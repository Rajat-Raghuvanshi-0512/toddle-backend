const router = require('express').Router()
const { authController } = require('../controllers')
const { authValidation } = require('../validations')

router.post(
  '/register-teacher',
  authValidation.registerTeacherValidation,
  authController.registerTeacher
)
router.post(
  '/register-student',
  authValidation.registerStudentValidation,
  authController.registerStudent
)
router.post('/login', authValidation.loginValidation, authController.loginUser)

// router.post('/', authController.addData);

module.exports = router
