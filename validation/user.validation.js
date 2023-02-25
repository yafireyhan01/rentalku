const { check } = require('express-validator') 

class userValidation{

    static registerValidation = [ 
        check("name")
        .not()
        .isEmpty().withMessage('Field name tidak boleh kosong'),
        check("email")
        .not()
        .isEmpty().withMessage('Field email tidak boleh kosong'),
        check("password")
        .not()
        .isEmpty()
        .withMessage("Field password tidak boleh kosong"),
        check("phone")
        .not()
        .isEmpty()
        .withMessage("Field phone tidak boleh kosong"),
        check("address")
        .not()
        .isEmpty()
        .withMessage("Field address tidak boleh kosong"),
    ]

    static loginValidation = [ 
        check("email")
        .not()
        .isEmpty().withMessage('Field email tidak boleh kosong'),
        check("password")
        .not()
        .isEmpty()
        .withMessage("Field password tidak boleh kosong"),
    ]
}

module.exports = userValidation