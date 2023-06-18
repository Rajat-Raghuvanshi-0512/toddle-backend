const Models = require('../db/models')

// <-----------------------------------------Development Mode Error Handler---------------------------------------->
const sendErrorDev = async (err, res) => {
  const statusCode = err.statusCode || 500
  console.log('Error--------->', {
    statusCode,
    message: err.message,
    stack: err.stack,
  })
  if (statusCode >= 500) {
    await Models.ErrorLogs.create({
      message: err.message,
      stack: err.stack,
      statusCode,
    })
  }
  res.status(statusCode).json({
    statusCode,
    message: err.message,
    stack: err.stack,
  })
}

// <-----------------------------------------Production Mode Error Handler------------------------------------------>
const sendErrorProd = (err, res) => {
  const statusCode = err.statusCode || 500
  if (err.isOperational) {
    res.status(statusCode).json({
      message: err.message,
    })
  } else {
    res.status(statusCode).json({
      message: 'Something went wrong',
    })
  }
}

module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'stag') {
    sendErrorDev(err, res)
  } else {
    sendErrorProd(err, res)
  }
}
