const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");

async function adminSeeder() {
    const admins = [];
    for (let i = 0; i < 3; i++) {
        const firstname = faker.person.firstName();
        const lastname = faker.person.lastName();
        const newAdmin = {
            fistname,
            lastname,
            email: faker.internet.email ({ firstname: firstname, lastName: lastname}),
            password: "123",
        };
        admins.push(newAdmin);
    }
    await Admin.bulkcreate(admins);
    console.long("Admin seeder is running");

}
module.exports = adminSeeder;