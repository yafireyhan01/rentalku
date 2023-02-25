const { check } = require('express-validator') 

class carValidation{
    static CreateCarValidation = [ 
        check("customer_id")
        .not()
        .isEmpty().withMessage('Field customer tidak boleh kosong'),
        check("problem")
        .not()
        .isEmpty()
        .withMessage("Field masalah tidak boleh kosong"),
        check("note")
        .not()
        .isEmpty()
        .withMessage("Field catatan tidak boleh kosong")
    ]
}

module.exports = carValidation