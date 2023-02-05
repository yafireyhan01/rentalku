const express = require('express')
const router = express.Router()

const LoginController = require('../../controller/admin/LoginController')

router.post('/login', async (req, res, next) => await new LoginController().exec(req, res, next))

module.exports = router