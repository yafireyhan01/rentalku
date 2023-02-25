require("dotenv").config();
const User = require("../../models").Users;
const bcrypt = require("bcryptjs");

class CarController {
  async exec(req, res, next) {
    try {

      const password =   bcrypt.hashSync(req.body.password, 8)

      const userData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        password: password
      };

      let data = await User.create(userData);

      return res.status(200).json({
        status: "success",
        data,
        message: "register successfull",
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = CarController;
