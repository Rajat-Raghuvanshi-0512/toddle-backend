const Models = require('../db/models')
const {
  statusCodes,
  messages,
  globalConstant,
} = require('../../../../constants')
const { AppError } = require('../helpers/appError')

exports.registerTeacherService = async (body) => {
  const { name, age, salary, password, subject, email } = body
  if (await Models.Users.findOne({ email })) {
    throw new AppError(messages.USER_ALREADY_EXIST, statusCodes.BAD_REQUEST)
  }
  const userType = await Models.UserType.findOne({
    userUniqueNumber: globalConstant.USERTYPE_TEACHER,
  })
  const teacher = await Models.Users.create({
    name,
    age,
    salary,
    password,
    subject,
    email,
    userType: userType._id,
    role: userType.userType,
  })
  return teacher
}

exports.registerStudentService = async (body) => {
  const { name, age, standard, password, email } = body
  if (await Models.Users.findOne({ email })) {
    throw new AppError(messages.USER_ALREADY_EXIST, statusCodes.BAD_REQUEST)
  }
  const userType = await Models.UserType.findOne({
    userUniqueNumber: globalConstant.USERTYPE_STUDENT,
  })
  const student = await Models.Users.create({
    name,
    age,
    standard,
    password,
    email,
    userType: userType._id,
    role: userType.userType,
  })

  return student
}

exports.loginUserService = async (body) => {
  const { email, password } = body
  const user = await Models.Users.findOne({ email })
  if (!user) {
    throw new AppError(messages.USER_NOT_EXIST, statusCodes.BAD_REQUEST)
  }
  const matchPassword = await user.matchPassword(password)
  if (!matchPassword) {
    throw new AppError(messages.USER_NOT_EXIST, statusCodes.BAD_REQUEST)
  }
  return user
}
