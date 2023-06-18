const Joi = require('joi')
const { validateSchema } = require('./validationFunction')

exports.registerTeacherValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    subject: Joi.string().optional(),
    age: Joi.number().required(),
    salary: Joi.string().required(),
    password: Joi.string().min(3).max(15).required(),
    confirm_pass: Joi.any().valid(Joi.ref('password')).required(),
  })
  try {
    const validated = validateSchema(req.body, schema)
    if (validated) next()
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}

exports.registerStudentValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    standard: Joi.string().required(),
    age: Joi.number().required(),
    password: Joi.string().min(3).max(15).required(),
    confirm_pass: Joi.any().valid(Joi.ref('password')).required(),
  })
  try {
    const validated = validateSchema(req.body, schema)
    if (validated) next()
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}

exports.loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(3).max(15).required(),
  })
  try {
    const validated = validateSchema(req.body, schema)
    if (validated) next()
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}
