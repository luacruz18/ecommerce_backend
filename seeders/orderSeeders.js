const Order = require("../models/index").Order;

async function orderSeeder() {
  const createOrders = [
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
  Order.bulkCreate(createOrders);
}
module.exports = orderSeeder;
