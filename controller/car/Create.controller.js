const API = require('../../core/index.core')
const Car = require('../../models').cars

class CreateCar extends API{
    constructor(){
        super(Car)
    }

    async exec(req, res, next){
        try{
            let { name, image, price, engine, transmission, gas_condition } = req.body

            let  request_data = { name, image, price, engine, transmission, gas_condition }

            let data = await this.create(request_data)

            return res.status(201).json({
                status: 'success',
                message: 'data created successfully',
                data
            })
        }catch(err){
            return res.status(400).json({
                status: 'error',
                message: err.message
            })
        }
    }
}

module.exports = CreateCar