const { Order } = require("../models/index");

const orderController = {
  index: async (req, res) => {
    try {
      const orders = await Order.findAll({ include: "user" });
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
      const order = req.body;

      if (!order.address)
        return res.json({ message: "Oops! Something went wrong" });

      if (!order.userId)
        return res.json({ message: "Oops! Something went wrong" });

      for (const product of order.products) {
        const productInDb = await product.findByPk(product.id);
        if (productInDb.stock < product.qty) {
          return res.json({
            message: "unsufficient stock.",
            product: product.id,
            stock: productInDb.stock,
          });
        }
        product.price = productInDb.price;
      }
      order.status = "pending";
      for (const product of order.products) {
        const productInDb = await product.findByPk(product.id);
        productInDb.stock = productInDb.stock - product.qty;
        await productInDb.save();
      }
      await Order.create(order);
      return res.json({ message: "Order recieved" });
    } catch (err) {
      console.error(err);
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
      return res.send();
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
};

module.exports = orderController;
