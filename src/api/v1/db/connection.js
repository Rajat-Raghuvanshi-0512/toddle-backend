const mongoose = require('mongoose')
const config = require('../../../../config')

const connectToDB = () => {
  mongoose
    .connect(config.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('===== Connected to MongoDB =====')
    })
    .catch((err) => {
      throw new Error('MongoDB Connection Error!', err)
    })
}

module.exports = connectToDB
