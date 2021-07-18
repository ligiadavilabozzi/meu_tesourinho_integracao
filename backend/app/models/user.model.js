const { v4: uuidv4 } = require('uuid');
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  /*class Users extends Model {

    static associate(models) {
      Users.hasMany(models.tabela);

    }
  };*/


  Users.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};