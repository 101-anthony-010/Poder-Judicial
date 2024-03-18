const express = require('express');

const router = express.Router();

//Controller functions
const productController = require('./../controller/product.controller')

//Middleware functions

//Rutas
router
    .route('/')
    .post(
      productController.createProduct
    )
    .get(
      productController.findAllProduct
    )

module.exports = router;