const { User } = require("../models/index");
const bcrypt = require("bcryptjs");

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.findAll({include: "user" });
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
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        password: hashedPassword,
      });
      return res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong" });
    }
  },
  update: async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      if (req.auth.sub !== req.params.id) {
        return res.status(403).json({ message: "Unauthorized" });
      }
      const updatableData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        password: hashedPassword,
      };
      await user.update(updatableData);
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong" });
    }
  },
  destroy: async (req, res) => {
    try {
      const userId = req.params.id;
      if (userId !== req.user.id) {
        return res.status(403).json({ message: "You are not authorized to delete this user." });
      }
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
  
      await user.destroy();
      return res.json({ message: "User deleted successfully." });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong." });
    }
  },
};

module.exports = userController;
