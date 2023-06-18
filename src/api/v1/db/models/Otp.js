const { Schema, model } = require('mongoose')

const OtpSchema = new Schema({
  email: {
    type: String,
    unique: true,
    sparse: true,
    trim: true,
  },
  phone: {
    type: String,
    unique: true,
    sparse: true,
  },
  countryCallingCode: {
    type: String,
  },
  otp: {
    type: Number,
    required: true,
  },
  tries: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date,
    index: { expires: 180 },
  },
})

module.exports = model('otp', OtpSchema)
