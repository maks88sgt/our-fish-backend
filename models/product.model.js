const mongoose = require("mongoose");

const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
            name: String,
            price: Number,
            description: String,
            categories: [String],
            properties: [String],
            seller: String,
            published: Boolean
        },
        { timestamps: true })
);

module.exports = Product;
