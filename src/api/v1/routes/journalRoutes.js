const router = require('express').Router()
const { authController } = require('../controllers')
const { authValidation } = require('../validations')

router.post(
  '/add',
  authValidation.registerTeacherValidation,
  authController.registerTeacher
)
router
  .route('/:id')
  .put(authValidation.registerStudentValidation, authController.registerStudent)
  .delete(
    authValidation.registerStudentValidation,
    authController.registerStudent
  )
router.post(
  '/fetchall',
  authValidation.loginValidation,
  authController.loginUser
)

module.exports = router
