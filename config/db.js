const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "PrEm@0310@",
  database: "crud_api",
});

module.exports = db;
