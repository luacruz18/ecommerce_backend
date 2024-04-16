const { Category } = require("../models/index");

const categoryController = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll();
      return res.json(categories);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  show: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      return res.json(category);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  store: async (req, res) => {
    try {
      const newCategory = await Category.create({ name: req.body.name });
      return res.json(newCategory);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  update: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      const datosActualizables = {};
      if (req.body.name) {
        datosActualizables.name = req.body.name;
      }
      await category.update(datosActualizables);
      return res.json(category);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Oops! Something went wrong" });
    }
  },
  
  destroy: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      await category.destroy();
      return res.send();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error deleting category" });
    }
  },
};

module.exports = categoryController;
