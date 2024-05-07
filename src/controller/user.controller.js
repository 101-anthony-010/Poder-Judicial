const User = require('./../model/user.model');
const catchAsync = require('./../utils/catchAsync')
const bcrypt = require('bcryptjs');

exports.createUser = catchAsync(async (req, res, next) => {
  const { name, lastName, email, password, userName, sedeId, dependenciaId, cargoId, phone, dni, infoId } = req.body;

  const salt = await bcrypt.genSalt(16);
  const encryptedPassword = await bcrypt.hash(password, salt);
  // console.log(name, lastName, email, password, userName, sedeId, dependenciaId, cargoId, phone, dni, infoId)
  const user = await User.create({
    name: name.toLowerCase(),
    lastName: lastName.toLowerCase(),
    email,
    password: encryptedPassword,
    userName,
    sedeId,
    dependenciaId,
    cargoId,
    phone,
    dni,
    infoId
  });

  res.status(200).json({
    status: 'Success',
    data: {
      user
    }
  })
});

exports.findAllUser = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    where: {
      state: "enable"
    }
  })

  res.status(200).json({
    status: "Success",
    users
  })
})

exports.findOneUser = catchAsync(async (req, res, next) => {
  const { id } = req.params
  
  const user = await User.findOne({
    where: {
      id
    }
  })

  res.status(200).json({
    status: "Success",
    user
  })
})

exports.deletedUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.destroy({
    where: {
      id
    }
  })

  res.status(200).json({
    status: "Success",
    user
  })
})

exports.updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const { name, lastName, email, password, userName, sedeId, dependenciaId, cargoId, phone } = req.body

  const user = await User.findOne({id})

  const newUser = await user.update({
    name,
    lastName,
    email,
    password,
    userName,
    sedeId,
    dependenciaId,
    cargoId,
    phone
  })

  res.status(200).json({
    status: "Success",
    newUser
  })
});