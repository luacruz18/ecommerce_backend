const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const authRouter = require("./authRoutes");
const adminRouter = require("./adminRoutes");
const categoryRouter = require("./categoryRoutes");
const orderRouter = require("./orderRoutes");
const productRouter = require("./productRoutes")
const isAdmin = require("../Middlewares/isAdmin")
const { expressjwt: checkJwt } = require("express-jwt");

router.use("/token", authRouter);
router.use("/user", checkJwt({ secret: process.env.SECRET_TOKEN, algorithms: ["HS256"]}), userRoutes);
router.use("/admin", checkJwt({ secret: process.env.SECRET_TOKEN, algorithms: ["HS256"]}), isAdmin, adminRouter);
router.use("/category", categoryRouter);
router.use("/order", orderRouter);
router.use("/product", productRouter);

module.exports = router;
