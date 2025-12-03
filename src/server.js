
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import schoolRoutes from "./routes/school.routes.js";



import path from "path";
import { fileURLToPath } from "url";


const app = express();
app.use(cors());
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("Backend running with MySQL!");
});

app.use("/", schoolRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("server con:", process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME);

});

