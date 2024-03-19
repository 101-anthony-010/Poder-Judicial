const express = require('express');

const router = express.Router();

//Controller functions
const UserController = require('./../controller/user.controller')

//Middleware functions

//Rutas
router
    .route('/')
    .post(
<<<<<<< HEAD
      userController.createUser
=======
        UserController.CreateUser
>>>>>>> fdfc885af6b87b9963ed8a7041fdfb02d8ccaaea
    )
    .get(userController.findAllUser)

module.exports = router;