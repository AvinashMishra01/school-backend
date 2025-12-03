

import express from "express";
import multer from "multer";
import { addSchoolController, getSchoolsController } from "../controllers/school.controller.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); 

router.post("/add-school", upload.single("image"), addSchoolController);
router.get("/schools", getSchoolsController);


export default router;
