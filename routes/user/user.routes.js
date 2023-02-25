const express = require('express')
const router = express.Router()

const RegisterController = require('../../controller/user/RegisterController')
const LoginController = require('../../controller/user/LoginController')
const UserValidation = require('../../validation/user.validation')

// //routes
router.post('/register', UserValidation.registerValidation, async (req, res, next) => await new RegisterController().exec(req, res, next))

router.post('/login', UserValidation.loginValidation, async (req, res, next) => await new LoginController().exec(req, res, next))

router.get('/testing',(req, res) => {
    return res.send({
        status: 'success',
        message: 'your api is live'
    })
})

module.exports = router