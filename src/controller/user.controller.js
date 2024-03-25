const User = require('./../model/user.model');
const catchAsync = require('./../utils/catchAsync')

exports.createUser = catchAsync( async (req, res, next) => {
  const { name, lastName, email, password, userName, sedeId, dependenciaId, cargoId } = req.body;

const user = await User.create({
        name,
        lastName,
        email,
        password,
        userName,
        sedeId,
        dependenciaId,
        cargoId
    })

    res.status(200).json({
        status: 'Success',
        user
    })
})

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
  const { name, lastName, email, password, userName, sedeId, dependenciaId, cargoId } = req.body

  const user = await User.findOne({id})

  const newUser = await user.update({
    name,
    lastName,
    email,
    password,
    userName,
    sedeId,
    dependenciaId,
    cargoId
  })

  res.status(200).json({
    status: "Success",
    newUser
  })
});