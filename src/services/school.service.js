

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
  console.log("save data call",params);
  const [result] = await pool.query(sql, params);
  return result;
};

export const getSchools = async (limit, offset) => {

  console.log("get data call")
  const [rows] = await pool.query(
    'SELECT * FROM schools LIMIT ? OFFSET ?',
    [limit, offset]
  );

  const [[count]] = await pool.query(
    'SELECT COUNT(*) AS totalCount FROM schools'
  );

  return { rows, totalCount: count.totalCount };

};






