const jwt = require("jsonwebtoken");
const { User, Admin } = require("../models");
const isAdmin = require("../Middlewares/isAdmin");

const authController = {
  getToken: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (user && password === user.password) {
        const token = jwt.sign(
          { sub: user.id, role: "User" },
          process.env.SECRET_TOKEN
        );
        return res.json({ token });
      }

      if (!user) {
        const admin = await Admin.findOne({ where: { email } });
        if (admin && password === admin.password) {
          const token = jwt.sign(
            { sub: admin.id, role: "Admin" },
            process.env.SECRET_TOKEN
          );
          return res.json({ token });
        }
      }
    } catch (error) {
      console.error("Error al obtener el token:", error);
      return res.status(500).json({ message: "Error del servidor." });
    }
    return res.status(401).json({ message: "Credenciales incorrectas." });
  },

  
  adminRoute: async (req, res) => {
    try {
      isAdmin(req, res, () => {
        res.json({ message: "Acceso concedido como administrador." });
      });
    } catch (error) {
      console.error("Error en la ruta de administrador:", error);
      return res.status(500).json({ message: "Error del servidor." });
    }
  }
};

module.exports = authController;