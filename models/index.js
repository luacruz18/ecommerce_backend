const { Sequelize, Model, DataTypes } = require("sequelize");

const User = require("./User");
const Products = require("./Products");
const Admins = require("./Admins");

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
Products.initModel(sequelize);
Admins.initModel(sequelize);

module.exports = {
  sequelize,
  User,
  Products,
  Admins,
};
