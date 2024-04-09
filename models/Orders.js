const { Model, DataTypes } = require("sequelize");

class Orders extends Model {
  static initModel(sequelize) {
    Orders.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
      },
      {
        sequelize,
        modelName: "Orders",
      }
    );
    return Orders;
  }
}

module.exports = Orders;
