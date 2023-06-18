const { Schema, model, Types } = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../../../../config')

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    subject: {
      type: String,
    },
    standard: {
      type: String,
    },
    role: {
      type: String,
      default: 'student',
      enum: ['student', 'teacher'],
    },
    userType: {
      type: Types.ObjectId,
      required: true,
      ref: 'userType',
    },
  },
  { versionKey: false, timestamps: true }
)

// Password hashing
UserSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      next()
    }
    this.password = await bcrypt.hash(this.password, 10)
  } catch (err) {
    console.log(err)
  }
})

// JWT token
UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, config.SECRET_KEY, {
    expiresIn: config.JWT_EXPIRE,
  })
}

//Compare password
UserSchema.methods.matchPassword = async function (pass) {
  try {
    return await bcrypt.compare(pass, this.password)
  } catch (err) {
    console.log(err)
  }
}

module.exports = model('user', UserSchema)
