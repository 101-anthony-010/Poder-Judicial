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