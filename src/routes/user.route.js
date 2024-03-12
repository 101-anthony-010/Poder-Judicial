const express = require('express');

const router = express.Router();

//Controller functions
const UserController = require('./../controller/user.controller')

//Middleware functions

//Rutas
router
    .route('/')
    .post(
        UserController.CreateUser
    )

module.exports = router;