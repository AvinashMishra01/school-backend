// import express from "express";
// import multer from "multer";
// import { addSchool, getAllSchools } from "../controllers/school.controller.js";

// const router = express.Router();

 
// const upload = multer({
//   dest: "uploads/",
// });

 
// router.post("/add-school", upload.single("image"), addSchool);
// router.get("/schools", getAllSchools);

// export default router;


import express from "express";
import multer from "multer";
import { addSchoolController, getSchoolsController } from "../controllers/school.controller.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // important

router.post("/add-school", upload.single("image"), addSchoolController);
router.get("/schools", getSchoolsController);

export default router;