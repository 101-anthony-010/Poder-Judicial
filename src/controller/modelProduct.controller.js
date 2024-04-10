const ModelProduct = require("../model/modelProduct.model");
const catchAsync = require("../utils/catchAsync");

exports.createModelProduct = catchAsync(async (req, res, next) => {
  const { name, marcaId } = req.body;

  const modelProduct = await ModelProduct.create({
    name,
    marcaId
  })

  res.status(200).json({
    status: "Succes",
    modelProduct
  })
})

exports.findAllModelProduct = catchAsync(async (req, res, next) => {
  const modelsProducts = await ModelProduct.findAll()

  res.status(200).json({
    status: "Success",
    modelsProducts
  })
})

exports.findOneModelProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const modelProduct = await ModelProduct.findOne({
    where: {
      id
    }
  })

  res.status(200).json({
    status: "Success",
    modelProduct
  })
})

exports.deleteModelProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const modelProduct = await ModelProduct.destroy({id})

  res.status(200).json({
    status: "Success",
    modelProduct
  })
})

exports.updateModelProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const { name, marcaId } = req.body;

  const modelProduct = await ModelProduct.findOne({id})

  const newModelProduct = await modelProduct.update({
    name,
    marcaId
  })

  res.status(200).json({
    status: "Success",
    newModelProduct
  })
})