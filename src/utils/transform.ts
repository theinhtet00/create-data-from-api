import { User } from "../common/types";

export function groupUsersByDepartment(users: User[]) {
  const grouped = new Map<string, any>();

  for (const user of users) {
    const department = user.company.department || "Unknown";
    const gender = user.gender;
    const age = user.age;
    const hairColor = user.hair.color || "Unknown";
    const fullName = `${user.firstName}${user.lastName}`;
    const postalCode = user.address.postalCode || "00000";

    if (!grouped.has(department)) {
      grouped.set(department, {
        male: 0,
        female: 0,
        ageRange: { min: Infinity, max: -Infinity },
        hair: new Map<string, number>(),
        addressUser: new Map<string, string>(),
      });
    }

    const deptData = grouped.get(department);

    if (gender === "male") deptData.male++;
    else if (gender === "female") deptData.female++;

    deptData.ageRange.min = Math.min(deptData.ageRange.min, age);
    deptData.ageRange.max = Math.max(deptData.ageRange.max, age);

    deptData.hair.set(hairColor, (deptData.hair.get(hairColor) || 0) + 1);

    deptData.addressUser.set(fullName, postalCode);
  }

  return Object.fromEntries(
    [...grouped.entries()].map(([dept, data]) => [
      dept,
      {
        male: data.male,
        female: data.female,
        ageRange: `${data.ageRange.min}-${data.ageRange.max}`,
        hair: Object.fromEntries(data.hair),
        addressUser: Object.fromEntries(data.addressUser),
      },
    ])
  );
}
