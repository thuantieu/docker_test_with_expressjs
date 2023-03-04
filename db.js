// require("dotenv").config()
const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
    {
        // host: 'localhost',
        // host: '172.18.0.2',
        host: process.env.HOST,
        dialect: 'postgres'
    }
);

async function connectDB() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
  
module.exports = { connectDB, sequelize, Sequelize, DataTypes };