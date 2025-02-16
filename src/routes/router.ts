import { Router } from "express";
import groupedByDepartment from "../service/groupedByDepartment";

const router = Router();

router.get("/users/group-by-department", groupedByDepartment);

export default router;
