import {
  getSchools,
  addSchool,
} from "../services/school.service.js";

// export async function addSchool(req, res) {
//   try {
//     const { name, address, city, state, contact, email_id } = req.body;
//     const image = req.file ? req.file.filename : null;

//     const insertId = await createSchoolService({
//       name,
//       address,
//       city,
//       state,
//       contact,
//       email_id,
//       image,
//     });

//     res.status(201).json({
//       message: "School added successfully",
//       id: insertId,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

// export async function getAllSchools(req, res) {
//   try {
//     const schools = await getSchoolsService();
//     res.json(schools);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }
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
    res.status(500).json({ error: err.message });
  }
};

// export const getSchoolsController = async (req, res) => {
//   try {
//     const rows = await getSchools();
//     res.json(rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// Backend: getSchoolsController.js
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
    res.status(500).json({ error: err.message });
  }
};
