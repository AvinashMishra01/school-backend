// import mysql from "mysql2";

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",       
//   database: "school"
// });

// db.connect((err) => {
//   if (err) {
//     console.error("DB Connection Failed:", err);
//   } else {
//     console.log("MySQL Connected Successfully");
//   }
// });

// export default db;

import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
    connectionLimit: 10,
  connectTimeout: 20000
});

export default pool;


