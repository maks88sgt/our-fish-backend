module.exports = mongoose => {
    return mongoose.model(
        "Cart",
        mongoose.Schema(
            {
                products: [
                    {
                        productId: Number,
                        quantity: Number,
                        name: String,
                        price: Number
                    }
                ],
                contactInfo: {
                    firstName: String,
                    lastName: String,
                    email: String,
                    phone: String
                },
                shippingAddress: {
                    city: String,
                    street: String,
                    house: String,
                    apartment: String,
                },
                comment: String,
                status: {type: String, enum: ["Created", "Canceled", "Paid", "Shipped", "Completed"]}
            },
            {timestamps: true}
        )
    );
};
