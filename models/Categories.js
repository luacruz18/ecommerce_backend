const { Model, DataTypes } = require("sequelize");

class Categories extends Model {
  static initModel(sequelize) {
    Categories.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Categories",
      }
    );
    return Categories;
  }
}

module.exports = Categories;
