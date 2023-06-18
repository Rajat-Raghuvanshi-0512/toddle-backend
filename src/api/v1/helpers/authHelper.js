// <-------------------------------------------------Success-Response----------------------------------------------->
exports.sendResponse = (res, statusCode, message, data) => {
  return res.status(statusCode).json({
    message: message,
    data: data,
  })
}
