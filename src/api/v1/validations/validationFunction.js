// <------------------------------------------Schema validator function-------------------------------------------->
exports.validateSchema = (inputs, schema) => {
  const options = { errors: { wrap: { label: '' } } }
  const { error } = schema.validate(inputs, options)
  if (error) throw error
  else return true
}
