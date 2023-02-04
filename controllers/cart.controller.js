const db = require("../models");
const Cart = db.cart;

exports.create = (req, res) => {
    if (!req.body.product) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    const cart = new Cart({
        name: req.body.name,
        price: req.body.price,
        categories: req.body.categories,
        properties: req.body.properties,
        seller: req.body.seller,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });

    Cart
        .save(cart)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Product."
            });
        });
};

//Get Cart by Id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Cart.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Cart with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Cart with id=" + id });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Cart.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Cart with id=${id}. Maybe Cart was not found!`
                });
            } else res.send({ message: "Cart was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Cart with id=" + id
            });
        });
};
