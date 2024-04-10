const Dependencia = require('./../model/dependencia.model')
const catchAsync = require("../utils/catchAsync");

exports.createDependencia= catchAsync(async (req, res, next) => {
  const { name } = req.body;
console.log(name)
  const modelProduct = await Dependencia.create({
    name
  })

  res.status(200).json({
    status: "Succes",
    modelProduct
  })
})

exports.findAllDependencias = catchAsync(async (req, res, next) => {
  const dependencias = await Dependencia.findAll()

  res.status(200).json({
    status: "Success",
    dependencias
  })
})

exports.findOneDependencia = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const dependencia = await Dependencia.findOne({
    where: {
      id
    }
  })

  res.status(200).json({
    status: "Success",
    dependencia
  })
})

exports.deleteDependencia = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const dependencia = await Dependencia.destroy({id})

  res.status(200).json({
    status: "Success",
    dependencia
  })
})

exports.updateDependencia = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const { name } = req.body;

  const dependencia = await Dependencia.findOne({id})

  const newDependencia = await dependencia.update({
    name
  })

  res.status(200).json({
    status: "Success",
    newDependencia
  })
})