const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"postgresql",
    database:"n_database",
    host:"localhost",
    port:5432
});

module.exports = pool; 