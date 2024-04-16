const Order = require("../models/index").Order;

async function orderSeeder() {
  const createOrders = [
    { products: "{product:x, qty:123}", address: "Canelones 1234", userId: "1", status: "pending" },
    { products: "{product:x, qty:123}", address: "Canelones 123", userId: "2", status: "pending" },
    { products: "{product:x, qty:123}", address: "Canelones 12", userId: "3", status: "pending" },
  ];
  Order.bulkCreate(createOrders);
  console.log("Order seeder is running")
}
module.exports = orderSeeder;
