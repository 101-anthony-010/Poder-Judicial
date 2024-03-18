const Product = require('./../model/product.model');
const catchAsync = require('./../utils/catchAsync')

exports.createProduct = catchAsync( async (req, res, next) => {
    const { marca, modelId, numSerie, userId, date, description, amount } = req.body;
    
    const product = await Product.create({
        marca,
        modelId,
        numSerie,
        userId,
        date,
        description,
        amount
    })

    res.status(200).json({
        status: 'Success',
        product
    })
})

exports.findAllProduct = catchAsync(async (req, res, next) => {
  const products = await Product.findAll()

  res.status(200).json({
    status: "Success",
    products
  })
})