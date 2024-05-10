const Sede = require('./../model/sede.model')
const catchAsync = require("../utils/catchAsync");

exports.createSede = catchAsync(async (req, res, next) => {
  const { name, address } = req.body;

  const sede = await Sede.create({
    name,
    address
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

  const sede = await Sede.destroy({
    where: {
      id
    }
  })

  res.status(200).json({
    status: "Success",
    sede
  })
})

exports.updateSede = catchAsync(async (req, res, next) => {
  // const { id } = req.params
  const { id, name, address } = req.body;

  const sede = await Sede.findOne({
    where: {
      id
    }
  })

  const newSede = await sede.update({
    name,
    address
  })

  res.status(200).json({
    status: "Success",
    newSede
  })
})