const jwt = require("jsonwebtoken");
const { User, Admin } = require("../models");

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
      return res.json({ message: "Error del servidor." });
    }
    return res.json({ message: "Error del servidor."})
  },
};

module.exports = authController;
