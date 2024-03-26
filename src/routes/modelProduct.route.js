const express = require('express');

const router = express.Router();

//Controller functions
const modelProductController = require('./../controller/modelProduct.controller')

//Middleware functions

router
    .route('/')
    .post(modelProductController.createModelProduct)
    .get(modelProductController.findAllModelProduct)

router
    .route('/:id')
    .get(modelProductController.findOneModelProduct)
    .patch(modelProductController.updateModelProduct)
    .delete(modelProductController.deleteModelProduct)

module.exports = router;
