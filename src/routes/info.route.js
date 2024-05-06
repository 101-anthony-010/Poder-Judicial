const express = require('express');

const router = express.Router();

//Controller functions
const infoController = require('./../controller/info.controller')

router
    .route('/')
    .post(infoController.createInfo)
    .get(infoController.findAllInfo)
    
router
    .route('/:id')
    .get(infoController.findOneInfo)
    .patch(infoController.updateInfo)

module.exports = router;