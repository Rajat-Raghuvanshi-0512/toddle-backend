const { Schema, model } = require('mongoose')

const LogSchema = new Schema(
  {
    message: {
      type: String,
      default: null,
    },
    stack: {
      type: String,
      default: null,
    },
    statusCode: {
      type: Number,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
)

module.exports = model('errorLogs', LogSchema)
