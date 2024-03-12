const express = require('express');

const router = express.Router();

//Controller functions
const ProductController = require('./../controller/product.controller');

//Middleware functions

//Rutas
router
    .route('/')
    .post(
      ProductController.CreateProduct
    )
    .get(
      ProductController.FindAllProducts
    )

module.exports = router;