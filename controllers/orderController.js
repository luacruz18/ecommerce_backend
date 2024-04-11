const { Order } = require("../models");

const orderController = {
  index: async (req, res) => {
    try {
      const orders = await Order.findAll();
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
      const newOrder = await Order.create({
        buyer: req.body.buyer,
        items: req.body.items,
        status: req.body.items,
      });
      return res.json(newOrder);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  update: async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      const updatableData = {};
      if (req.body.buyer) {
        updatableData.buyer = req.body.buyer;
      }
      if (req.body.items) {
        updatableData.items = req.body.items;
      }
      if (req.body.status) {
        updatableData.status = req.body.status;
      }

      await order.update(updatableData);
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
      return res.json({ message: "Order deleted successfully" });
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
};

module.exports = orderController;
