const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        productList: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "payment pending",
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "payment pending",
        },
      },
      {
        sequelize,
        modelName: "order",
      }
    );
    return Order;
  }
}

module.exports = Order;
