import { groupUsersByDepartment } from "../utils/transform";

test("groups users with summary fields", () => {
  const users = [
    {
      id: 1,
      firstName: "Alice",
      lastName: "Smith",
      gender: "female",
      age: 25,
      hair: { color: "Blond" },
      company: { department: "Engineering" },
      address: { postalCode: "12345" },
    },
    {
      id: 2,
      firstName: "Bob",
      lastName: "Johnson",
      gender: "male",
      age: 30,
      hair: { color: "Black" },
      company: { department: "Engineering" },
      address: { postalCode: "67890" },
    },
  ];

  const result = groupUsersByDepartment(users);

  expect(result).toEqual({
    Engineering: {
      male: 1,
      female: 1,
      ageRange: "25-30",
      hair: { Blond: 1, Black: 1 },
      addressUser: { AliceSmith: "12345", BobJohnson: "67890" },
    },
  });
});
