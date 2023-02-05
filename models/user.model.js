const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ],
        seller: String,
        orders: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cart"
        }]
    })
);

module.exports = User;
