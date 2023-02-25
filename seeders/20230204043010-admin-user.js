"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let password = await bcrypt.hash("123qwe", 8);

    return queryInterface.bulkInsert("user_admins", [
      {
        full_name: "admin",
        email: "admin@gmail.com",
        password: password,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("user_admins", null, {});
  },
};
