module.exports = mongoose => {
    return mongoose.model(
        "Product",
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
};
