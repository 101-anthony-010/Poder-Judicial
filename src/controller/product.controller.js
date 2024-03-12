const Product = require('../model/product.model');
const catchAsync = require('./../utils/catchAsync')

exports.CreateProduct = catchAsync( async (req, res, next) => {
    const { marca } = req.body;
    
    const product = await Product.create({
        marca,
    })

    res.status(200).json({
        status: 'Success',
        product
    })
})

exports.FindAllProducts = catchAsync( async (req, res, next) => {
    const products = await Product.findAll();

    res.status(200).json({
      status: 'Success',
      data: products
    })
})