const express = require('express');

const router = express.Router();

//Controller functions
const asignationController = require('./../controller/asignation.controller'); 
const productController = require('./../controller/product.controller');

//Middleware functions

//Rutas
router
    .route('/')
    .post(asignationController.createAsignation)
    .get(asignationController.findAllAsignation)

router
    .route('/:id')
    .get(asignationController.findOneAsignation)
    .patch(asignationController.updateAsignation)
    .delete(asignationController.deleteAsignation)


router
    .route('/amountPages/:id')
    .patch(productController.amountPagesProduct)

module.exports = router;