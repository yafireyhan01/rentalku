const express = require('express')
const router = express.Router()

const RegisterController = require('../../controller/user/RegisterController')

// //routes
router.post('/register', async (req, res, next) => await new RegisterController().exec(req, res, next))

module.exports = router