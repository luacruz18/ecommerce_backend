const { Category } = require("../models");

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
            const newCategory = await Category.create({name: req.body.name});
            return res.json(newCategory);
        } catch (err) {
            console.log(err);
            return res.json({ message: "Oops! Something went wrong" });
        }
    },
    update: async (req, res) => {
        try {
            const category = await Category.findByPk(req.params.id);
            await category.update(req.body);
            return res.json(category);
        } catch (err) {
            console.log(err);
            return res.json({ message: "Oops! Something went wrong" });
        }
    },
    destroy: async (req, res) => {
        try {
            const category = await Category.findByPk(req.params.id);
            await category.destroy();
            return res.status(204).send();
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "User deleted sucessfully" });
        }
    }
};

module.exports = categoryController;
