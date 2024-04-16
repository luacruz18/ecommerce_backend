const { Admin } = require("../models/index");

const adminController = {
  index: async (req, res) => {
    try {
      const admins = await Admin.findAll();
      return res.json(admins);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  show: async (req, res) => {
    try {
      const admin = await Admin.findByPk(req.params.id);
      return res.json(admin);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  store: async (req, res) => {
    try {
      const newAdmin = await Admin.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
      });
      return res.json(newAdmin);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  update: async (req, res) => {
    try {
      const admin = await Admin.findByPk(req.params.id);
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
      await admin.update(datosActualizables);
      return res.json(admin);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },

  destroy: async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (admin && admin.id === 1) {
            return res.status(403).json({ message: "This admin is not allowed to be deleted"});
        }
        await admin.destroy();
        
        return res.json({ message: "Admin deleted successfully" });
    } catch (err) {
        console.log(err);
        return res.json({ message: "Oops! Something went wrong" });
    }
},
};

module.exports = userController;
