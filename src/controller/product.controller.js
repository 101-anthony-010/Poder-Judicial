const Product = require('./../model/product.model');
const catchAsync = require('./../utils/catchAsync')

exports.createProduct = catchAsync(async (req, res, next) => {
    const { marcaId, modelId, numSerie, userId, date, description, amount } = req.body;

    const product = await Product.create({
        marcaId,
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

exports.deletedProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.destroy({
    where: { 
      id 
    }
  });

  res.status(200).json({
    status: "Success",
    product 
  });
});