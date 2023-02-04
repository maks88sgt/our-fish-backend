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

    cart
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
