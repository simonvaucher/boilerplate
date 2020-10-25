require("dotenv").config();

const mysql = require("mysql2");

const con = mysql.createConnection({
  host: process.env.BOILERPLATE_HOST,
  user: process.env.BOILERPLATE_USER,
  password: process.env.BOILERPLATE_PASS,
});

con.connect(err => {
  if (err) throw err;
  con.query(`CREATE DATABASE ${process.env.BOILERPLATE_DB}`, function (
    err,
    _result
  ) {
    if (err) throw err;
    con.end();
    console.log("completed 'setup_db' task");
  });
});
