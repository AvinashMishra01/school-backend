// import pool from '../database/db.js'

// export async function createSchoolService(data) {
//   const query = `
//     INSERT INTO schools (name, address, city, state, contact, email_id, image)
//     VALUES (?, ?, ?, ?, ?, ?, ?)
//   `;

//   const values = [
//     data.name,
//     data.address,
//     data.city,
//     data.state,
//     data.contact,
//     data.email_id,
//     data.image,
//   ];

//   const [result] = await pool.query(query, values);
//   return result.insertId;
// }

// export const getSchoolsService = async () => {
//   const [rows] = await pool.query("SELECT * FROM schools");

//   const updatedRows = rows.map((school) => ({
//     ...school,
//     image: `http://localhost:5000/uploads/${school.image}`
//   }));

//   return updatedRows;
// };


import pool from "../database/db.js";

export const addSchool = async (data) => {
  const sql = `INSERT INTO schools (name, address, city, state, contact, email_id, image)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const params = [
    data.name,
    data.address,
    data.city,
    data.state,
    data.contact,
    data.email_id,
    data.image
  ];

  const [result] = await pool.query(sql, params);
  return result;
};

export const getSchools = async (limit, offset) => {
//   const query = `
//     SELECT 
//       *, 
//       COUNT(*) OVER() as totalCount
//     FROM schools
//     LIMIT ? OFFSET ?;
//   `;
  
//   const [rows] = await pool.query(query, [limit, offset]);
//   return rows;
  const [rows] = await pool.query(
    'SELECT * FROM schools LIMIT ? OFFSET ?',
    [limit, offset]
  );

  const [[count]] = await pool.query(
    'SELECT COUNT(*) AS totalCount FROM schools'
  );

  return { rows, totalCount: count.totalCount };
};