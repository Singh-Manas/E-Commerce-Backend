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