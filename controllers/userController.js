const { User } = require("../models");

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  show: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  store: async (req, res) => {
    try {
      const newUser = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
      });
      return res.json(newUser);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  update: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      const datosActualizables = {};
      if (req.body.firstname) {
        datosActualizables.firstname = req.body.firstname;
      }
      if (req.body.lastname) {
        datosActualizables.lastname = req.body.lastname;
      }
      if (req.body.email) {
        datosActualizables.email = req.body.email;
      }
      if (req.body.address) {
        datosActualizables.address = req.body.address;
      }
      if (req.body.phoneNumber) {
        datosActualizables.phoneNumber = req.body.phoneNumber;
      }
      if (req.body.password) {
        datosActualizables.password = req.body.password;
      }
      await user.update(datosActualizables);
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },

  destroy: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      await user.destroy();
      return res.json({ message: "User deleted successfully" });
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
};

module.exports = userController;

