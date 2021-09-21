const { Sequelize} = require('sequelize');

// Sequelize is an ORM (Object Relational Mapping) tool used for Database connectivity. 
const sequelize = new Sequelize (
    "postgres", 
    "postgres",
    "12345",
    {
        host: "localhost",
        dialect: "postgres"
    }
);

sequelize.sync();

// Always use async, await with try catch
(async () => {
     try {
         await sequelize.authenticate();
         console.log("Connection Established with DB");
     } catch(err) {
        console.error("Unable to Connect with DB");
     }
})()

module.exports = sequelize;

// For connecting directly to Postgres

// const Pool = require('pg').Pool;
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: '123456789',
//     port: 5432
// });
// pool.query('SELECT * FROM "Users"', (err, result) => {
//     if(err) {
//         throw err;
//     }
//     res.status(200).json(result);
// });