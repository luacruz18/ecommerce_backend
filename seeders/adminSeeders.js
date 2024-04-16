const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");

async function adminSeeder() {
    const admins = [];
    const specialAdmin = {
        firstname: "Admin",
        lastname: "Admin",
        email: "admin@Admin",
        password: "1234",
    };
    admins.push(specialAdmin);

    for (let i = 0; i < 3; i++) {
        const firstname = faker.person.firstName();
        const lastname = faker.person.lastName();
        const newAdmin = {
            firstname,
            lastname,
            email: faker.internet.email ({ firstname: firstname, lastName: lastname}),
            password: "123",
        };
        admins.push(newAdmin);
    }

    await Admin.bulkCreate(admins);
    console.log("Admin seeder is running");
}
module.exports = adminSeeder;