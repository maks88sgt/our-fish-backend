const mongoose = require("mongoose");

const Cart = mongoose.model(
    "Cart",
    new mongoose.Schema({
            products: [
                {
                    productId: Number,
                    quantity: Number,
                    name: String,
                    price: Number,
                    seller: String
                }
            ],
            contactInfo: {
                name: String,
                email: String,
                phone: String
            },
            shippingAddress: {
                city: String,
                street: String,
                house: String,
                entrance: String,
                apartment: String,
            },
            comment: String,
            status: {type: String, enum: ["Created", "Purchased", "Confirmed", "Canceled", "Paid", "Shipped", "Completed"]}
        },
        {timestamps: true})
);

module.exports = Cart;
