const mysql = require("mysql")



const connection = mysql.createConnection({
    host: "localhost",
    PORT: 8080,
    user: "root",
    password: "",
    database: "burgers_db"
});

module.exports = connection