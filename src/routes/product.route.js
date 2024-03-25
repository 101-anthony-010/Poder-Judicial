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
    .get(productController.findOneProduct)
    .delete(productController.deletedProduct)
    .patch(productController.updateProduct)

router
    .route('/used/:id')
    .patch(productController.disableProduct)

router
    .route('/modelProduct')
    .post(modelProductController.createModelProduct)
    .get(modelProductController.findAllModelProduct)

router
    .route('/modelProduct/:id')
    .get(modelProductController.findOneModelProduct)
    .patch(modelProductController.updateModelProduct)
    .delete(modelProductController.deleteModelProduct)

router
    .route('/marca')
    .post(marcaController.createMarca)
    .get(marcaController.findAllMarcas)

router
    .route('/marca/:id')
    .get(marcaController.findOneMarca)
    .patch(marcaController.updateMarca)
    .delete(marcaController.deleteMarca)

module.exports = router;