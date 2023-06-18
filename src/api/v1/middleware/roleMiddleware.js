const { messages, statusCodes } = require('../../../../constants')
const { AppError } = require('../helpers/appError')
const Models = require('../models')

// <---------------------------------------------RBAC------------------------------------------------------->
exports.checkRole = (roles) => {
  return async (req, res, next) => {
    try {
      const userTypeId = req.user.userType
      const { userType } = await Models.UserType.findById({ _id: userTypeId })

      // Checking the user role with routes accessible roles
      if (roles.includes(userType)) next()
      throw new AppError(messages.UN_AUTHORIZED_USER, statusCodes.UN_AUTHORIZED)
    } catch (error) {
      next(error)
    }
  }
}
