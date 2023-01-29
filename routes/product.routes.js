const {authJwt} = require("../middlewares");
module.exports = app => {

    const products = require("../controllers/product.controller");

    const router = require("express").Router();

    // Create a new Product
    router.post("/", [authJwt.verifyToken, authJwt.isModerator],products.create);

    // Retrieve all Products
    router.get("/",[authJwt.verifyToken, authJwt.isModerator], products.findAll);

    // Retrieve all published Products
    router.get("/published", products.findAllPublished);

    // Retrieve a single Product with id
    router.get("/:id", products.findOne);

    // Update a Product with id
    router.put("/:id", [authJwt.verifyToken, authJwt.isModerator], products.update);

    // Delete a Product with id
    router.delete("/:id", [authJwt.verifyToken, authJwt.isModerator], products.delete);

    // Delete all Products
    router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], products.deleteAll);

    app.use('/api/products', router);
};
