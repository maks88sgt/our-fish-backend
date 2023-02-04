const cart = require("../controllers/cart.controller");
module.exports = app => {

    const router = require("express").Router();

    // Create a new Cart
    router.post("/",cart.create);

    // Retrieve a single Cart with id
    router.get("/:id", cart.findOne);

    // Update a Cart with id
    router.put("/:id", cart.update);

    app.use('/api/cart', router);
};
