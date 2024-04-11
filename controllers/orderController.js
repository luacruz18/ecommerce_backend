const { Order } = require("../models");

const orderController = {
  index: async (req, res) => {
    try {
<<<<<<< Updated upstream
      const orders = await Order.findAll();
=======
      const orders = await User.findAll();
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      const newOrder = await Order.create({
        buyer: req.body.buyer,
        items: req.body.items,
        status: req.body.items,
      });
=======
      const newOrder = await Order.create(req.body);
>>>>>>> Stashed changes
      return res.json(newOrder);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  update: async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
<<<<<<< Updated upstream
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
=======
      await order.update(req.body);
>>>>>>> Stashed changes
      return res.json(order);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  destroy: async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      await order.destroy();
<<<<<<< Updated upstream
      return res.json({ message: "Order deleted successfully" });
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
=======
      return res.status(204).send();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Oops! Something went wrong" });
>>>>>>> Stashed changes
    }
  },
};

module.exports = orderController;
