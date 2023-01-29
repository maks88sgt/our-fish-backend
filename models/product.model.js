module.exports = mongoose => {
    const Product = mongoose.model(
        "product",
        mongoose.Schema(
            {
                name: String,
                price: Number,
                description: String,
                categories: [String],
                properties: [String],
                seller: String,
                published: Boolean
            },
            { timestamps: true }
        )
    );

    return Product;
};
