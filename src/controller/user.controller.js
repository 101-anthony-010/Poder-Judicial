const User = require('./../model/user.model');
const catchAsync = require('./../utils/catchAsync')

exports.CreateUser = catchAsync( async (req, res, next) => {
    const { name } = req.body;
    
    const user = await User.create({
        name,
    })

    res.status(200).json({
        status: 'Success',
        user
    })
})