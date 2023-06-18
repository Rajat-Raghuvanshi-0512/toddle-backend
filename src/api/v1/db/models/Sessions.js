const { Schema, model, Types } = require('mongoose')

const sessionSchema = new Schema(
  {
    tokenId: {
      type: String,
    },
    userID: {
      type: Types.ObjectId,
      ref: 'user',
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    loginTime: {
      type: Date,
    },
    logoutTime: {
      type: Date,
    },
    deviceID: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
)

module.exports = model('sessions', sessionSchema)
