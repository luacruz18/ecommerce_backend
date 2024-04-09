const { Model, DataTypes } = require("sequelize");

class Products extends Model {
  static initModel(sequelize) {
    Products.init(
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
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        stock: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        featured: {
            type: DataTypes.STRING,
            allowNull: false,
          },
      },
      {
        sequelize,
        modelName: "Products",
      }
    );
    return Products;
  }
}

module.exports = Products;
