require("dotenv").config();

const userSeeder = require("./userSeeders");

const categorySeeder = require("./categorySeeders");

const adminSeeder = require("./adminSeeders");

const orderSeeder = require("./orderSeeders");

const productSeeder = require("./productSeeders");

async function run() {
  await userSeeder();
  await categorySeeder();
  await adminSeeder();
  await orderSeeder();
  await productSeeder();
  console.log("All seeders were created");
}
run();
