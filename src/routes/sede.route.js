const express = require('express');

const router = express.Router();

//Controller functions
const sedeController = require('./../controller/sede.controller')

router
    .route('/')
    .post(sedeController.createSede)
    .get(sedeController.findAllSedes)
    .patch(sedeController.updateSede)

router
    .route('/:id')
    .get(sedeController.findOneSedes)
    .delete(sedeController.deleteSede)

module.exports = router;