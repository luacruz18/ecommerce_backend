const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  const users = await User.findAll();
  console.log(users);
  return res.send(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  return res.json(user);
});

router.post("/", async (req, res) => {
  const { firstname, lastname, email, address, phoneNumber, password } =
    req.body;
  console.log(req.body);
  await User.create({
    firstname,
    lastname,
    email,
    address,
    phoneNumber,
    password,
  });
  res.send("Usuario creado correctamente");
});

module.exports = router;
