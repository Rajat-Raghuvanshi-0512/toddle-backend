const config = require('../../../../config')

exports.saveToCookie = (user, statusCode, res) => {
  const token = user.getJwtToken()
  const options = {
    httpOnly: true,
    expires: new Date(Date.now() + config.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
  }
  const { password, ...others } = user._doc
  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({ success: true, others, token })
}
