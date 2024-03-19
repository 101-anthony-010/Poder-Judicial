const express = require('express');

const router = express.Router();

//Controller functions
<<<<<<< HEAD
const productController = require('./../controller/product.controller')
const modelProductController = require('./../controller/modelProduct.controller')
=======
const ProductController = require('./../controller/product.controller');
>>>>>>> fdfc885af6b87b9963ed8a7041fdfb02d8ccaaea

//Middleware functions

//Rutas
router
    .route('/')
    .post(
<<<<<<< HEAD
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
=======
      ProductController.CreateProduct
    )
    .get(
      ProductController.FindAllProducts
>>>>>>> fdfc885af6b87b9963ed8a7041fdfb02d8ccaaea
    )

module.exports = router;