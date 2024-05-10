const express = require('express');

const router = express.Router();

//Controller functions
const dependenciaController = require('./../controller/dependencia.controller')

router
    .route('/')
    .post(dependenciaController.createDependencia)
    .get(dependenciaController.findAllDependencias)
    .patch(dependenciaController.updateDependencia)

router
    .route('/:id')
    .get(dependenciaController.findOneDependencia)
    .delete(dependenciaController.deleteDependencia)


module.exports = router;