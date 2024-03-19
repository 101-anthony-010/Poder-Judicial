const Sede = require('./../model/sede.model')
const catchAsync = require("../utils/catchAsync");

exports.createSede = catchAsync(async (req, res, next) => {
  const { name } = req.body;

  const sede = await Sede.create({
    name
  })

  res.status(200).json({
    status: "Succes",
    sede
  })
})

exports.findAllDependecias = catchAsync(async (req, res, next) => {
  const sedes = await Sede.findAll()

  res.status(200).json({
    status: "Success",
    sedes
  })
})