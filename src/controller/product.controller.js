const { where } = require('sequelize');
const Product = require('./../model/product.model');
const catchAsync = require('./../utils/catchAsync')

exports.createProduct = catchAsync(async (req, res, next) => {
    const { marcaId, modelId, numSerie, userId, dateInitial, description, amount } = req.body;

    const product = await Product.create({
        marcaId,
        modelId,
        numSerie,
        userId,
        dateInitial,
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

exports.findOneProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  
  const product = await Product.findOne({
    where: {
      id
    }
  })

  res.status(200).json({
    status: "Success",
    product
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

exports.updateProduct = catchAsync(async (req, res, next) => {
  // const { id } = req.params;
  const { id, amount, dateInitial, description, marcaId, modelId, numSerie, userId } = req.body

  const product = await Product.findOne({
    where: {
      id
    }
  })

  const newProduct = await product.update({
    amount,
    // dateInitial,
    description,
    marcaId,
    modelId,
    numSerie,
    userId
  }) 

  res.status(200).json({
    status: "Success",
    newProduct 
  });
});

exports.disableProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { dateFinal } = req.body

  const product = await Product.findOne({
    where: {
      id
    }
  })

  const newProduct = await product.update({
    dateFinal,
    state: 'disable'
  }) 

  res.status(200).json({
    status: "Desabled con exito",
    newProduct 
  });
})

exports.amountPagesProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { amountPages } = req.body

  const product = await Product.findOne({
    where: {
      id
    }
  })

  const newProduct = await product.update({
    amountPages,
    state: 'disable'
  }) 

  res.status(200).json({
    status: "Cantidad de paginas con exito",
    newProduct 
  });
})