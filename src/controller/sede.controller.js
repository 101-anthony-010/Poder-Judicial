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

exports.findAllSedes = catchAsync(async (req, res, next) => {
  const sedes = await Sede.findAll()

  res.status(200).json({
    status: "Success",
    sedes
  })
})

exports.findOneSedes = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const sede = await Sede.findOne({
    where: {
      id
    }
  })

  res.status(200).json({
    status: "Success",
    sede
  })
})

exports.deleteSede = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const sede = await Sede.destroy({id})

  res.status(200).json({
    status: "Success",
    sede
  })
})

exports.updateSede = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const { name } = req.body;

  const sede = await Sede.findOne({id})

  const newSede = await sede.update({
    name
  })

  res.status(200).json({
    status: "Success",
    newSede
  })
})