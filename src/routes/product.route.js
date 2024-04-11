const express = require('express');

const router = express.Router();

//Controller functions
const productController = require('./../controller/product.controller')

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
    
module.exports = router;