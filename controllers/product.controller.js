const db = require("../models");
const Product = db.product;

// Create and Save a new Product
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        categories: req.body.categories,
        properties: req.body.properties,
        seller: req.body.seller,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });

    Product
        .save(product)
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

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    Product.find({name: ""})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products."
            });
        });
};

// Find a single Product with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Product.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Product with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Product with id=" + id });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Product with id=${id}. Maybe Product was not found!`
                });
            } else res.send({ message: "Product was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Product with id=" + id
            });
        });
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Product.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
                });
            } else {
                res.send({
                    message: "Product was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Product with id=" + id
            });
        });
};

exports.findAll = (req, res) => {
    Product.findById("")
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found any Products"});
            else res.send(data);
        })
        .catch(() => {
            res
                .status(500)
                .send({message: "Error retrieving Products"});
        });
};

exports.findAllPublished = (req, res) => {
    Product.find({ published: true })
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found any published Products"});
            else res.send(data);
        })
        .catch(() => {
            res
                .status(500)
                .send({message: "Error retrieving published Products"});
        });
};

exports.deleteAll = (req, res) => {
    Product.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Products were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all products."
            });
        });
};
