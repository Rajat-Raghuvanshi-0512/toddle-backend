const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { AppError } = require('./src/api/v1/helpers/appError')

// Require base route file
const route = require('./src/api/v1/routes')
const config = require('./config')

let corsOptions = {
  origin: '*',
  credentials: true,
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use((req, res, next) => {
  const info = req.method + ' ' + res.statusCode + ' ' + req.url
  console.log('API HIT -------------->', info, '\n|\nv\n|\nv\n')
  if (!req.header('lang') || req.header('lang') == '') req.lang = 'en'
  else req.lang = req.header('lang')
  next()
})

// Routes Api ----------> {{BASE_URL}}/v1...
app.use('/v1', route)

// For invalid routes
app.all('*', (req) => {
  throw new AppError(`Requested URL ${req.path} not found`, 404)
})

// Log the NODE Environment
console.log(`NODE_ENV=${config.NODE_ENV}`)

module.exports = app
