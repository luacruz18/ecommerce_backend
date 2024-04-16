const { Category } = require("../models/index");

async function categorySeeder() {
    const category = [
        {name: "dulce"},
        {name: "salado"},
        {name: "agridulce"}
     ]
Category.bulkCreate(category);
console.log("Category seeder is running")
}
module.exports = categorySeeder; 
