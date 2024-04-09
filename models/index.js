const { Sequelize, Model, DataTypes } = require("sequelize");

const User = require("./User");
const Orders = require("./Orders");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  }
);

User.initModel(sequelize);
Orders.initModel(sequileze);

module.exports = {
  sequelize,
  User,
  Orders,
};
