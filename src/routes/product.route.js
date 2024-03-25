const express = require('express');

const router = express.Router();

//Controller functions
const productController = require('./../controller/product.controller')
const modelProductController = require('./../controller/modelProduct.controller')
const marcaController = require('./../controller/marca.controller')

//Middleware functions

//Rutas
router
    .route('/')
    .post(productController.createProduct)
    .get(productController.findAllProduct)
    
router
    .route('/:id')
    .delete(productController.deletedProduct)
    .patch(productController.updateProduct)

router
    .route('/modelProduct')
    .post(modelProductController.createModelProduct)
    .get(modelProductController.findAllModelProduct)

router
    .route('/marca')
    .post(marcaController.createMarca)
    .get(marcaController.findAllMarcas)

module.exports = router;