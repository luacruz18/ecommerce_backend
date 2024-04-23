require("dotenv").config();

const userSeeder = require("./userSeeders");
userSeeder();
const categorySeeder = require("./categorySeeders");
categorySeeder();
const adminSeeder = require("./adminSeeders");
adminSeeder();
const orderSeeder = require("./orderSeeders");
orderSeeder();
const productSeeder = require("./productSeeders");
productSeeder();


console.log("All seeders were created")
