const express = require('express');

const router = express.Router();

//Controller functions
const infoController = require('./../controller/info.controller')

router
    .route('/')
    .post(infoController.createInfo)
    .get(infoController.findAllInfo)
    .patch(infoController.updateInfo)
    
router
    .route('/:id')
    .get(infoController.findOneInfo)

module.exports = router;