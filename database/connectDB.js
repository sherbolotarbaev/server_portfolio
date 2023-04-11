require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

let sql = "SELECT * FROM data_client;";

pool.execute(sql, (err, result) => {
  if (err) throw err;

  console.log(result);
});

module.exports = pool.promise();
