const app = require('./app')
const config = require('./config')
const connectToDB = require('./src/api/v1/db/connection')
const errorController = require('./src/api/v1/helpers/errorController')

connectToDB()

app.use(errorController)

app.listen(config.PORT, config.HOST, () => {
  console.log(`APP LISTENING ON https://${config.HOST}:${config.PORT}`)
})
