const Order = require("../models/index").Order;

async function orderSeeder() {
  const status = [
    { productList: "{product:x, qty:123}" },
    { status: "pending" },
    { userId: "1" },
    { productList: "{product:x, qty:123}" },
    { status: "pending" },
    { userId: "1" },
    { productList: "{product:x, qty:123}" },
    { status: "pending" },
    { userId: "1" },
    { productList: "{product:x, qty:123}" },
    { status: "pending" },
    { userId: "1" },
  ];
  Category.bulkCreate(order);
}
module.exports = categorySeeder;
