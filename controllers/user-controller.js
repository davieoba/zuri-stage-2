const User = require('../models/user-model')
const catchAsync = require('../utils/catchAsync')

exports.createUser = catchAsync(async (req, res, next) => {
  const user = await User.create({
    fullName: req.body.fullName
  })

  res.status(201).json({
    message: 'ok',
    user
  })
})

exports.getUser = catchAsync(async (req, res, next) => {
  const id = req.params.user_id

  const user = await User.findById(id)

  if (!user) {
    return res.status(404).json({
      message: 'no user found'
    })
  }

  res.status(200).json({
    message: 'ok',
    user
  })
})

exports.updateUser = catchAsync(async (req, res, next) => {
  const id = req.params.user_id

  const user = await User.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true
  })

  res.status(200).json({
    message: 'ok',
    user
  })
})

exports.deleteUser = catchAsync(async (req, res, next) => {
  const id = req.params.user_id

  await User.findByIdAndDelete(id)

  res.status(204).json({
    message: 'ok'
  })
})