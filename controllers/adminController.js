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
        return res.status(404).json({ message: "Admin not found" });
      }
      return res.status(200).json(admin);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error fetching admin" });
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
      return res.status(500).json({ message: "Error creating admin" });
    }
  },
  update: async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const admin = await Admin.findByPk(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
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
      return res.status(500).json({ message: "Error updating admin" });
    }
  },
  destroy: async (req, res) => {
    try {
      const admin = await Admin.findByPk(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }

      if (admin.id === 1) {
        return res
          .status(403)
          .json({ message: "This admin cannot be deleted" });
      }
      await admin.destroy();
      return res.status(200).json({ message: "Admin deleted successfully" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error deleting admin" });
    }
  },
};

module.exports = adminController;
