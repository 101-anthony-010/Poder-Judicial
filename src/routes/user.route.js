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
    .post(userController.createUser)
    .get(userController.findAllUser)

router
      .route('/:id')
      .get(userController.findOneUser)
      .delete(userController.deletedUser)
      .patch(userController.updateUser)

router
    .route('/sede')
    .post(sedeController.createSede)
    .get(sedeController.findAllSedes)

router
    .route('/sede:id')
    .get(sedeController.findOneSedes)
    .patch(sedeController.updateSede)
    .delete(sedeController.deleteSede)

router
    .route('/dependencia')
    .post(dependenciaController.createDependencia)
    .get(dependenciaController.findAllDependencias)

router
    .route('/dependencia:id')
    .get(dependenciaController.findOneDependencia)
    .patch(dependenciaController.updateDependencia)
    .delete(dependenciaController.deleteDependencia)

router
    .route('/cargo')
    .post(cargoController.createCargo)
    .get(cargoController.findAllCargo)
    
router
    .route('/cargo/:id')
    .get(cargoController.findOneCargo)
    .patch(cargoController.updateCargo)
    .delete(cargoController.deleteCargo)

module.exports = router;