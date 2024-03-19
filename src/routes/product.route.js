const express = require('express');

const router = express.Router();

//Controller functions
const productController = require('./../controller/product.controller')
const modelProductController = require('./../controller/modelProduct.controller')

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

router
    .route('/modelProduct')
    .post(
      modelProductController.createModelProduct
    )
    .get(
      modelProductController.findAllModelProduct
    )

module.exports = router;