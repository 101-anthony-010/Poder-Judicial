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