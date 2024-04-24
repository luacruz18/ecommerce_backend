const { Admin } = require("../models/index");

const adminController = {
  index: async (req, res) => {
    try {
      const admins = await Admin.findAll();
      return res.status(200).json(admins);
    } catch (err) {
      console.error("Error fetching administrators:", err);
      return res.status(500).json({ message: "Error fetching administrators" });
    }
  },
  show: async (req, res) => {
    try {
      const admin = await Admin.findByPk(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: "Administrator not found" });
      }
      return res.status(200).json(admin);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error fetching administrator" });
    }
  },
  store: async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newAdmin = await Admin.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
      });
      return res.status(201).json(newAdmin);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error creating administrator" });
    }
  },
  update: async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const admin = await Admin.findByPk(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: "Administrator not found" });
      }

      const updatableData = {};
      if (req.body.firstname) {
        updatableData.firstname = req.body.firstname;
      }
      if (req.body.lastname) {
        updatableData.lastname = req.body.lastname;
      }
      if (req.body.email) {
        updatableData.email = req.body.email;
      }
      if (req.body.address) {
        updatableData.address = req.body.address;
      }
      if (req.body.phoneNumber) {
        updatableData.phoneNumber = req.body.phoneNumber;
      }
      if (hashedPassword) {
        updatableData.password = hashedPassword;
      }

      await admin.update(updatableData);
      return res.status(200).json(admin);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error updating administrator" });
    }
  },
  destroy: async (req, res) => {
    try {
      const admin = await Admin.findByPk(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: "Administrator not found" });
      }

      if (admin.id === 1) {
        return res
          .status(403)
          .json({ message: "This administrator cannot be deleted" });
      }
      await admin.destroy();
      return res.status(200).json({ message: "Administrator deleted successfully" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error deleting admin" });
    }
  },
};

module.exports = adminController;
