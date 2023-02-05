const User = require('../../models').Users
const bcrypt = require('bcryptjs')

const jwt = require("jsonwebtoken")
require('dotenv').config()

class Login{
    async exec (req, res, next){
        try{

            let email = req.body.email;
            let password = req.body.password;
            
            let findEmail = await User.findOne({where:{email}})

            if(!findEmail)throw new Error("Username atau password salah");

            let findPassword = findEmail.password;

            let ismatch = await bcrypt.compare(
                password,
                findPassword
            )

            if(!ismatch){
                throw new Error('maaf password tidak sesuai')
            }

            let payload = {
                id: findEmail.id,
                name: findEmail.name,
                email: findEmail.email,
            }

            let token = await jwt.sign(payload, process.env.JWT_SECRET,{
                expiresIn: '1m'
            })
            
            return res.status(200).json({
                status: 'success',
                message: 'data berhasil ditampilkan',
                data: {payload, token}
            })
        }catch(err){
            return res.status(400).json({
                status: 'Error!',
                message: err.message
            })
        }
    }
}

module.exports = Login
