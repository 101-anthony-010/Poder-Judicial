const express = require('express');

const router = express.Router();

//Controller functions
const cargoController = require('./../controller/cargo.controller')

router
    .route('/')
    .post(cargoController.createCargo)
    .get(cargoController.findAllCargo)
    .patch(cargoController.updateCargo)
    
router
    .route('/:id')
    .get(cargoController.findOneCargo)
    .delete(cargoController.deleteCargo)

module.exports = router;