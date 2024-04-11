const { User } = require("../models");

const userController = {
    index: async (req, res) => {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (err) {
            console.log(err);
            return res.json({ message: "Oops! Something went wrong" });
        }
    },
    show: async (req, res) => { 
        try { 
            const user = await User.findByPk(req.params.id);
            return res.json(user);
        } catch (err) {
            console.log(err);
            return res.json({ message: "Oops! Something went wrong" });
        }
    },
    store: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            return res.json(newUser);
        } catch (err) {
            console.log(err);
            return res.json({ message: "Oops! Something went wrong" });
        }
    },
    update: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            await user.update(req.body);
            return res.json(user);
        } catch (err) {
            console.log(err);
            return res.json({ message: "Oops! Something went wrong" });
        }
    },
    destroy: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            await user.destroy();
            return res.status(204).send();
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Oops! Something went wrong" });
        }
    }
};

module.exports = userController;
