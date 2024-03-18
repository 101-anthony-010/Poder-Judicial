const User = require("../model/user.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.validMeals = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const user = await User.findOne({
    where: {
      status: "active",
      id
    }
  });

  if (!user)
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  
  req.user = user;
  next()
});