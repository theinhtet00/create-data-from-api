import express from "express";
import cors from "cors";
import { fetchUsers } from "./utils/api";

const app = express();
app.use(cors());

app.get("/users/grouped", async (req, res) => {
  const users = await fetchUsers();
  res.json(users);
});

app.listen(3000, () => console.log("Server running on port 3000"));
