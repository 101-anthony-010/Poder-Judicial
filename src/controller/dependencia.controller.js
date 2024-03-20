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

exports.findAllDependecias = catchAsync(async (req, res, next) => {
  const dependencias = await Dependencia.findAll()

  res.status(200).json({
    status: "Success",
    dependencias
  })
})