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


exports.findOneCargo = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const cargo = await Cargo.findOne({id})

  res.status(200).json({
    status: "Success",
    cargo
  })
})

exports.deleteCargo = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const cargo = await Cargo.destroy({id})

  res.status(200).json({
    status: "Success",
    cargo
  })
})

exports.updateCargo = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const { name } = req.body;

  const cargo = await Cargo.findOne({id})

  const newCargo = await cargo.update({
    name
  })

  res.status(200).json({
    status: "Success",
    newCargo
  })
})