const express = require("express");
const router = express.Router();
const { Category } = require("../models/index");
const categoryController = require("../controllers/categoryController");
const isAdmin = require("../Middlewares/isAdmin")


router.get("/", categoryController.index);
router.get("/:id", categoryController.show);
router.post("/", isAdmin, categoryController.store);
router.patch("/:id", isAdmin, categoryController.update);
router.delete("/:id", isAdmin, categoryController.destroy);

module.exports = router;
