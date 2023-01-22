require('dotenv').config()
const User = require('../../models').Users
const bcrypt = require('bcryptjs')

class RegisterController{
    async exec(req, res, next){
        try{

            const userData = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                phone: req.body.address,
                password: bcrypt.hashSync('sayabukanrobot123', 8)
            }

            let data = await User.create(userData)
            
            // if(req.user.is_active == false){
            //     throw Error('user status is not active')
            // }

            // let last_ip_login = req.connection.remoteAddress
            // let last_login = new Date()

            // let payload = {
            //     user_id: req.user._id,
            //     user_name: req.user.name,
            //     user_email: req.user.email,
            // }

            // let privateKey = fs.readFileSync('./public/private.key')

            // let i  = 'Nusatrades corp';          // Issuer 
            // let s  = 'admin@admin.com';        // Subject 
            // let a  = 'http://nusatrades.in'; // Audience// SIGNING OPTIONS

            // let signOptions = {
            // issuer:  i,
            // subject:  s,
            // audience:  a,
            // expiresIn:  "12h",
            // algorithm:  "RS256"
            // };

            // let token = await jwt.sign(payload, privateKey, signOptions)

            // await SuperUser.update({last_ip_login: last_ip_login, last_login: last_login },{where : {email: req.user.email}})

            // return res.status(200).json({
            //     status: 'success',
            //     data: {token, expiresIn: '12 hours'},
            //     message: 'login successfull'
            // })
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