import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import router from "./routes/router";
import swaggerDocument from "./routes/docs/groupByDepartmentDocs";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use("/api", router);

// swagger-UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => console.log(`Server running on port ${port}`));
