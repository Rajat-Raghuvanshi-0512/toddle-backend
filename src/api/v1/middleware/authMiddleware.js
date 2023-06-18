const config = require('../../../../config')
const { Users } = require('../db/models')
const jwt = require('jsonwebtoken')

const checkAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies
    if (!token) {
      return res
        .status(401)
        .json({ message: 'Please login to access this resource' })
    }
    const data = jwt.verify(token, config.SECRET_KEY)
    req.user = await Users.findById(data.id)
    next()
  } catch (error) {
    console.log('error:', error)
    return res.sendStatus(401)
  }
}

module.exports = { checkAuth }
