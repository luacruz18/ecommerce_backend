const { Order } = require("../models/index");

const orderController = {
  index: async (req, res) => {
    try {
      const orders = await User.findAll();
      return res.json(orders);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  show: async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      return res.json(order);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  store: async (req, res) => {
    try {
      const newOrder = await Order.create(req.body);
      return res.json(newOrder);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  update: async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      await order.update(req.body);
      return res.json(order);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  destroy: async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      await order.destroy();
      return res.status(204).send();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Oops! Something went wrong" });
    }
  },
};

module.exports = orderController;
