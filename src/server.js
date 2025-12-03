
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
// import dotenv from "dotenv";
import schoolRoutes from "./routes/school.routes.js";



import path from "path";
import { fileURLToPath } from "url";
// dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve uploaded images

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// for image access
// app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Backend running with MySQL!");
});

app.use("/", schoolRoutes);


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));







const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("server con:", process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME);

});
