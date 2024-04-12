require("dotenv").config();

<<<<<<< Updated upstream
const userSeeder = require("./userSeeders");
userSeeder();
const categorySeeder = require("./categorySeeders");
categorySeeder();
const adminSeeder = require("./adminSeeders");
adminSeeder();
const orderSeeder = require("./orderSeeders");
orderSeeder();
const  productSeeder = require("./productSeeders");
productSeeder();

=======

const categorySeeders = require("./categorySeeders");
const productSeeders = require("./productSeeders");
const userSeeders = require("./userSeeders");
const orderSeeders = require("./orderSeeders");


orderSeeders();
productSeeders();
userSeeders();
orderSeeders();
categorySeeders();

console.log("All seeders were created")
>>>>>>> Stashed changes
