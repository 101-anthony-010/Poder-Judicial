<<<<<<< HEAD
const Product = require('./../model/product.model');
const catchAsync = require('./../utils/catchAsync')

exports.createProduct = catchAsync(async (req, res, next) => {
    const { marca, modelId, numSerie, userId, date, description, amount } = req.body;
    
    const product = await Product.create({
        marca,
        modelId,
        numSerie,
        userId,
        date,
        description,
        amount
=======
const Product = require('../model/product.model');
const catchAsync = require('./../utils/catchAsync')

exports.CreateProduct = catchAsync( async (req, res, next) => {
    const { marca } = req.body;
    
    const product = await Product.create({
        marca,
>>>>>>> fdfc885af6b87b9963ed8a7041fdfb02d8ccaaea
    })

    res.status(200).json({
        status: 'Success',
        product
    })
})

<<<<<<< HEAD
exports.findAllProduct = catchAsync(async (req, res, next) => {
  const products = await Product.findAll()

  res.status(200).json({
    status: "Success",
    products
  })
=======
exports.FindAllProducts = catchAsync( async (req, res, next) => {
    const products = await Product.findAll();

    res.status(200).json({
      status: 'Success',
      data: products
    })
>>>>>>> fdfc885af6b87b9963ed8a7041fdfb02d8ccaaea
})