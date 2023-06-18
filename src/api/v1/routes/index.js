const router = require('express').Router()

router.use('/auth', require('./authRoutes'))
router.use('/journel', require('./authRoutes'))

module.exports = router
