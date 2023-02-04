const db = require("../models");
const Cart = db.cart;

// Create and Save a new Product
exports.create = (req, res) => {
    if (!req.body.products) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    const product = new Product({
        products: req.body.products,
        contactInfo: req.body.contactInfo,
        shippingAddress: req.body.shippingAddress,
        comment: req.body.comment,
        status: "Created"
    });

   product
        .save(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Cart."
            });
        });
};

// Find a single Product with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Cart.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found Product with id " + id});
            else res.send(data);
        })
        .catch(() => {
            res
                .status(500)
                .send({message: "Error retrieving Product with id=" + id});
        });
};

// Update a Product by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Cart.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Cart with id=${id}. Maybe Cart was not found!`
                });
            } else res.send({message: "Cart was updated successfully."});
        })
        .catch(() => {
            res.status(500).send({
                message: "Error updating Cart with id=" + id
            });
        });
};


