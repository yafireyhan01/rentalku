const express = require('express')
const router = express.Router()

const RegisterController = require('../../controller/user/RegisterController')

// //routes
router.post('/register', async (req, res, next) => await new RegisterController().exec(req, res, next))

router.get('/testing',(req, res) => {
    return res.send({
        status: 'success',
        message: 'your api is live'
    })
})

module.exports = router