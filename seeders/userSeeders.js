const { faker } = require("@faker-js/faker");
const { user } = require("../models");

async function userSeeder() {
    const users = [];
    for (let i = 0; i < 20; i++) {
        const firstname = faker.person.firstName();
        const lastname = faker.person.lastName();
        const newUSer = {
            fistname,
            lastname,
            email: faker.internet.email ({ firstname: firstname, lastName: lastname}),
            phoneNumber: faker.phone.number (),
            password: "123",
        };
        users.push(newUser);
    }
    await User.bulkcreate(users);
    console.long("User seeder is running");

}
module.exports = userSeeder;