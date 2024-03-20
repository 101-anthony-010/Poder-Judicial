const express = require('express');

const router = express.Router();

//Controller functions
const userController = require('./../controller/user.controller')
const sedeController = require('./../controller/sede.controller')
const dependenciaController = require('./../controller/dependencia.controller')
const cargoController = require('./../controller/cargo.controller')

//Middleware functions

//Rutas
router
    .route('/')
    .post(
      userController.createUser
    )
    .get(
      userController.findAllUser
    )

router
    .route('/sede')
    .post(
      sedeController.createSede
    )
    .get(
      sedeController.findAllSedes
    )

router
    .route('/dependencia')
    .post(
      dependenciaController.createDependencia
    )
    .get(
      dependenciaController.findAllDependecias
    )

router
    .route('/cargo')
    .post(
      cargoController.createCargo
    )
    .get(
      cargoController.findAllCargo
    )
    

module.exports = router;