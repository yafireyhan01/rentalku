'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAdmin = sequelize.define('UserAdmins', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true
  });

  return UserAdmin;
};