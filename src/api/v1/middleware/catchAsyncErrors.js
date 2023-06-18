// a higher order function that wraps a function in a try catch block
// and passes any errors to the next middleware
module.exports = (func) => (req, res, next) => {
  Promise.resolve(func(req, res, next)).catch(next)
}
