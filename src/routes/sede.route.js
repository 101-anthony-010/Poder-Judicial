const express = require('express');

const router = express.Router();

//Controller functions
const sedeController = require('./../controller/sede.controller')

router
    .route('/')
    .post(sedeController.createSede)
    .get(sedeController.findAllSedes)

router
    .route('/:id')
    .get(sedeController.findOneSedes)
    .patch(sedeController.updateSede)
    .delete(sedeController.deleteSede)

module.exports = router;