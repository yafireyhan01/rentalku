'use strict';
const bcrypt = require('bcryptjs')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let password = await bcrypt.hash('test1234', 8)

    return queryInterface.bulkInsert('UserAdmins', [{
      fullName: 'rafi',
      email: 'rafiaceng@gmail.com',
      password: password,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserAdmins', null, {});
  }
};
