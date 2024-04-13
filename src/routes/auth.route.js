const express = require('express');

const router = express.Router();

//Controller functions
const authController = require('./../controller/auth.controller')

//Middleware functions

//Rutas
router
    .route('/')
    .post(authController.login)

module.exports = router;