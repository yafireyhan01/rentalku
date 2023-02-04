require('dotenv').config()
const User = require('../../models').Users
const bcrypt = require('bcryptjs')

class RegisterController{
    async exec(req, res, next){
        try{

            let password = await bcrypt.hash(req.body.password, 8)

            const userData = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                phone: req.body.address,
                password
            }

            let data = await User.create(userData)
            
             return res.status(200).json({
                status: 'success',
                data: {data, expiresIn: '12 hours'},
                message: 'login successfull'
            })
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = RegisterController