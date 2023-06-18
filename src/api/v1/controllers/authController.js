const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const { statusCodes } = require('../../../../constants')
const { saveToCookie } = require('../helpers/saveToCookie')
const authService = require('../services/authService')

exports.registerTeacher = catchAsyncErrors(async (req, res) => {
  const teacherData = await authService.registerTeacherService(req.body)
  saveToCookie(teacherData, statusCodes.CREATED, res)
})

exports.registerStudent = catchAsyncErrors(async (req, res) => {
  const studentData = await authService.registerStudentService(req.body)
  saveToCookie(studentData, statusCodes.CREATED, res)
})

exports.loginUser = catchAsyncErrors(async (req, res) => {
  const user = await authService.loginUserService(req.body)
  saveToCookie(user, statusCodes.CREATED, res)
})
