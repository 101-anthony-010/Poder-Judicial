const Marca = require('./../model/marca.model')
const catchAsync = require("../utils/catchAsync");

exports.createMarca = catchAsync(async (req, res, next) => {
  const { name } = req.body;

  const marca = await Marca.create({
    name
  })

  res.status(200).json({
    status: "Succes",
    marca
  })
})

exports.findAllMarcas = catchAsync(async (req, res, next) => {
  const marcas = await Marca.findAll()

  res.status(200).json({
    status: "Success",
    marcas
  })
})

exports.findOneMarca = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const marca = await Marca.findOne({
    where: {
      id
    }
  })

  res.status(200).json({
    status: "Success",
    marca
  })
})

exports.deleteMarca = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const marca = await Marca.destroy({
    where: {
      id
    }
  })

  res.status(200).json({
    status: "Success",
    marca
  })
})

exports.updateMarca = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const { name } = req.body;

  const marca = await Marca.findOne({
    where: {
      id
    }
  })

  const newMarca = await marca.update({
    name
  })

  res.status(200).json({
    status: "Success",
    newMarca
  })
})