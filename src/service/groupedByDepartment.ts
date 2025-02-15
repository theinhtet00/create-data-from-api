import { Request, Response } from "express";
import { fetchUsers } from "../utils/api";
import { groupUsersByDepartment } from "../utils/transform";

const groupedByDepartment = async (req: Request, res: Response) => {
  const users = await fetchUsers();
  const grouped = groupUsersByDepartment(users);
  res.json(grouped);
};

export default groupedByDepartment;
