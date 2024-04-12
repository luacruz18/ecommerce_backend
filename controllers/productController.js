const { Product } = require("../models/index");

const productController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll();
      return res.json(products);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  show: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      return res.json(product);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  store: async (req, res) => {
    try {
      const newProduct = await Product.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        stock: req.body.stock,
        category: req.body.category,
        featured: req.body.featured,
      });
      return res.json(newProduct);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  update: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      const datosActualizables = {};
      if (req.body.name) {
        datosActualizables.name = req.body.name;
      }
      if (req.body.description) {
        datosActualizables.description = req.body.description;
      }
      if (req.body.image) {
        datosActualizables.image = req.body.image;
      }
      if (req.body.price) {
        datosActualizables.price = req.body.price;
      }
      if (req.body.stock) {
        datosActualizables.stock = req.body.stock;
      }
      if (req.body.category) {
        datosActualizables.category = req.body.category;
      }
      if (req.body.featured) {
        datosActualizables.featured = req.body.featured;
      }
      await Product.update(datosActualizables);
      return res.json(product);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },

  destroy: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      await product.destroy();
      return res.json({ message: "Product deleted successfully" });
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
};

module.exports = productController;
