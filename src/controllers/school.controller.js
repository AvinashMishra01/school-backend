import {
  getSchools,
  addSchool,
} from "../services/school.service.js";

export const addSchoolController = async (req, res) => {
  try {
    const base64Image = req.file.buffer.toString("base64");

    const data = {
      ...req.body,
      image: base64Image
    };

    const result = await addSchool(data);

    res.json({ message: "School added!", id: result.insertId });
  } catch (err) {
    console.log("error in save school", err.message);
    res.status(500).json({ error: err.message });
  }
};


export const getSchoolsController = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const result = await getSchools(limit, offset);

    const total = result.totalCount || 0;

    res.json({
      data: result.rows,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.log("error in get school", err.message)
    res.status(500).json({ error: err.message });
  }
};


