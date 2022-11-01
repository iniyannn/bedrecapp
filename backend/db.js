require('dotenv').config();

const mysql = require('mysql2')

//////////////////////////////////////////////////////////////////////////
// DATABASE_URL extracted from .env file
//////////////////////////////////////////////////////////////////////////
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log("DB Connected", connection)
module.exports = connection;

