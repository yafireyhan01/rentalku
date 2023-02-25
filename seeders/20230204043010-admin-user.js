'use strict';
const bcrypt = require('bcryptjs')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let password = await bcrypt.hash('test1234', 8)

    return queryInterface.bulkInsert('user_admins', [{
      full_name: 'rafi',
      email: 'rafiaceng@gmail.com',
      password: password,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_admins', null, {});
  }
};
