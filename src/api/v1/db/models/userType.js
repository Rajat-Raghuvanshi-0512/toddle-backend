const { Schema, model } = require('mongoose')

const UserTypeSchema = new Schema(
  {
    userType: {
      type: String,
      enum: ['teacher', 'student'],
      required: true,
    },
    userUniqueNumber: {
      type: Number,
      unique: true,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

module.exports = model('userType', UserTypeSchema)
