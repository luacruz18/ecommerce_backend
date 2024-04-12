const Order = require("../models/index").Order;

async function orderSeeder() {
  const status = [
    { productList: "{product:x, qty:123}" },
    { status: "pending" },
    { productList: "{product:x, qty:324}" },
    { status: "pending" },
    { productList: "{product:x, qty:523}" },
    { status: "pending" },
    { productList: "{product:x, qty:124}" },
    { status: "pending" },
  ];
  Category.bulkCreate(order);
}
module.exports = categorySeeder;
