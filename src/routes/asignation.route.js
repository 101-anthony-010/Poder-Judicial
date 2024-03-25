const express = require('express');

const router = express.Router();

//Controller functions
const asignationController = require('./../controller/asignation.controller'); 

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

    module.exports = router;