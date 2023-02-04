const express = require('express')
const router = express.Router()

const RegisterController = require('../../controller/user/RegisterController')
const LoginController = require('../../controller/user/LoginController')

// //routes
router.post('/register', async (req, res, next) => await new RegisterController().exec(req, res, next))

router.post('/login', async (req, res, next) => await new LoginController().exec(req, res, next))

router.get('/testing',(req, res) => {
    return res.send({
        status: 'success',
        message: 'your api is live'
    })
})

module.exports = router