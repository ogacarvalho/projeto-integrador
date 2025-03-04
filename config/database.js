// config/database.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/stock_na_mao.sqlite",
  logging: false,
});

module.exports = sequelize;