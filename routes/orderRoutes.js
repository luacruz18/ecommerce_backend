const express = require("express");
const router = express.Router();
const { Order } = require("../models/index");
const orderController = require("../controllers/orderController");
const isAdmin = require("../middlewares/isAdmin");


router.get("/", orderController.index);
router.get("/:id", orderController.show);
router.post("/",  orderController.store);
router.patch("/:id", orderController.update);
router.delete("/:id", isAdmin, orderController.destroy);

module.exports = router;
