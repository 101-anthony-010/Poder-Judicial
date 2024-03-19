const Cargo = require('./../model/cargo.model')
const catchAsync = require("../utils/catchAsync");

exports.createCargo = catchAsync(async (req, res, next) => {
  const { name } = req.body;

  const cargo = await Cargo.create({
    name
  })

  res.status(200).json({
    status: "Succes",
    cargo
  })
})

exports.findAllCargo = catchAsync(async (req, res, next) => {
  const cargos = await Cargo.findAll()

  res.status(200).json({
    status: "Success",
    cargos
  })
})