const express = require('express');

const router = express.Router();

//Controller functions
const userController = require('./../controller/user.controller')

//Middleware functions

//Rutas
router
    .route('/')
    .post(userController.createUser)
    .get(userController.findAllUser)

router
    .route('/:id')
    .get(userController.findOneUser)
    .delete(userController.deletedUser)
    .patch(userController.updateUser)

module.exports = router;