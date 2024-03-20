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