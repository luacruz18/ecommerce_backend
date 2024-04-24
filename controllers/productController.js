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
        pic: req.body.pic,
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
      if (!product) {
        return res.status(404).json({ message: "Product not found." });
      }
      const updatableData = {};
      if (req.body.name) {
        updatableData.name = req.body.name;
      }
      if (req.body.description) {
        updatableData.description = req.body.description;
      }
      if (req.body.image) {
        updatableData.image = req.body.image;
      }
      if (req.body.price) {
        updatableData.price = req.body.price;
      }
      if (req.body.stock) {
        updatableData.stock = req.body.stock;
      }
      if (req.body.category) {
        updatableData.category = req.body.category;
      }
      if (req.body.featured) {
        updatableData.featured = req.body.featured;
      }
      await product.update(updatableData);
      return res.json(product);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error updating product." });
    }
  },
  

  destroy: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      await product.destroy();
      return res.json({ message: "Product deleted successfully." });
    } catch (err) {
      console.log(err);
      return res.json({ message: "Error deleting product." });
    }
  },
};

module.exports = productController;
