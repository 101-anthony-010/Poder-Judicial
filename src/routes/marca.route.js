const express = require('express');

const router = express.Router();

//Controller functions
const marcaController = require('./../controller/marca.controller')

//Middleware functions

router
    .route('/')
    .post(marcaController.createMarca)
    .get(marcaController.findAllMarcas)

router
    .route('/:id')
    .get(marcaController.findOneMarca)
    .patch(marcaController.updateMarca)
    .delete(marcaController.deleteMarca)

module.exports = router;
