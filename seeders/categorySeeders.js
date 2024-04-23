const { Category } = require("../models/index");

async function categorySeeder() {
  const category = [{ name: "plain" }, { name: "toppings" }];
  Category.bulkCreate(category);
  console.log("Category seeder is running");
}
module.exports = categorySeeder;
