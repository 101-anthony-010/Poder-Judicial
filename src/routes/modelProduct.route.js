const express = require('express');

const router = express.Router();

//Controller functions
const modelProductController = require('./../controller/modelProduct.controller')

//Middleware functions

router
    .route('/')
    .post(modelProductController.createModelProduct)
    .get(modelProductController.findAllModelProduct)
    .patch(modelProductController.updateModelProduct)
    
router
    .route('/:id')
    .get(modelProductController.findOneModelProduct)
    .delete(modelProductController.deleteModelProduct)

module.exports = router;
