const express = require("express");
const router = express.Router();
const { Category } = require("../models/index");
const categoryController = require("../controllers/categoryController");
const isAdmin = require("../middlewares/isAdmin");

router.get("/", categoryController.index);
router.get("/:id", categoryController.show);

router.post("/", checkJwt({ secret: process.env.SECRET_TOKEN, algorithms: ["HS256"]}), isAdmin, categoryController.store);
router.patch("/:id", checkJwt({ secret: process.env.SECRET_TOKEN, algorithms: ["HS256"]}), isAdmin, categoryController.update);
router.delete("/:id", checkJwt({ secret: process.env.SECRET_TOKEN, algorithms: ["HS256"]}), isAdmin, categoryController.destroy);

module.exports = router;
