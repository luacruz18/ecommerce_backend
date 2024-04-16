const { User } = require("../models/index");

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong" });
    }
  },
  show: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong" });
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
      return res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong" });
    }
  },
  update: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const datosActualizables = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
      };
      await user.update(datosActualizables);
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong" });
    }
  },
  destroy: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      await user.destroy();
      return res.json({ message: "User deleted successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong" });
    }
  },
};

module.exports = userController;
