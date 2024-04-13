const bcrypt = require('bcryptjs');
const generateJWT = require('./../utils/jwt');
const catchAsync = require("../utils/catchAsync");
const User = require('../model/user.model');
const AppError = require('../utils/appError');

// exports.signUp = catchAsync(async (req, res, next) => {
//   const { name, lastName, dni, email, password, userName, sedeId, dependenciaId, cargoId, phone } = req.body;

//   const salt = await bcrypt.genSalt(16);
//   const encryptedPassword = await bcrypt.hash(password, salt);

//   const user = await User.create({
//     name: name.toLowerCase(),
//     lastName: lastName.toLowerCase(),
//     email,
//     dni,
//     password: encryptedPassword,
//     userName,
//     sedeId,
//     dependenciaId,
//     cargoId,
//     phone
//   });

//   const token = await generateJWT(user.id);

//   res.status(200).json({
//     status: 'success',
//     message: 'The user has been created',
//     token,
//     user: {
//       id: user.id,
//       name: user.name,
//       lastName: user.lastName,
//       dni: user.dni,
//       email: user.email,
//       userName: user.userName,
//       sedeId: user.sedeId,
//       dependenciaId: user.dependenciaId,
//       cargoId: user.cargoId,
//       phone: user.phone
//     },
//   });
// });

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
      state: 'enable',
    },
  });

  if (!user) {
    return next(new AppError(`User with email: ${email} not found`, 404));
  }
  
  if (!(await bcrypt.compare(password, user.password)))
        next(new AppError(`Incorrect email or password`, 401));

  const token = await generateJWT(user.id);

  res.status(200).json({
    status: 'success',
    token,
    user: {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      dni: user.dni,
      email: user.email,
      userName: user.userName,
      sedeId: user.sedeId,
      dependenciaId: user.dependenciaId,
      cargoId: user.cargoId,
      phone: user.phone
    },
  });
});