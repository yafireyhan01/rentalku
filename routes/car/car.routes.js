const express = require('express')
const router = express.Router()

const LoginController = require('../../controller/admin/LoginController')
const CreateCarController = require('../../controller/car/Create.controller')

router.post('/list', async (req, res, next) => await new LoginController().exec(req, res, next))

router.post('/create', async (req, res, next) => await new CreateCarController().exec(req, res, next))

router.post('/get/:id', async (req, res, next) => await new LoginController().exec(req, res, next))

router.post('/update', async (req, res, next) => await new LoginController().exec(req, res, next))

router.post('/delete', async (req, res, next) => await new LoginController().exec(req, res, next))

module.exports = router