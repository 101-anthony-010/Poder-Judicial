const Asignation = require("../model/asignation.model");
const catchAsync = require("../utils/catchAsync");

exports.createAsignation = catchAsync(async (req, res, next) => {
  const { userId, productId, date } = req.body;

  const asignation = await Asignation.create({
    userId,
    productId,
    date
  })

  res.status(200).json({
    status: "Succes",
    asignation
  })
}) 

exports.findAllAsignation = catchAsync(async (req, res, next) => {
  const asignations = await Asignation.findAll()

  res.status(200).json({
    status: "Succes",
    asignations
  })
})

exports.findOneAsignation = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const asignation = await Asignation.findOne({id})

  res.status(200).json({
    status: "Succes",
    asignation
  })
})

exports.updateAsignation = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const { userId, productId, date } = req.body

  const asignation = await Asignation.findOne({id})

  const newAsignation = await asignation.update({
    userId,
    productId,
    date
  })

  res.status(200).json({
    status: "Succes",
    newAsignation
  })
})

exports.deleteAsignation = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const asignation = await Asignation.destroy({id})

  res.status(200).json({
    status: "Succes",
    asignation
  })
})