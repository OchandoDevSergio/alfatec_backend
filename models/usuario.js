'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Usuario.hasMany(models.Paciente, {
        foreignKey: 'usuario_id'
      });

      Usuario.hasMany(models.Profesional, {
        foreignKey: 'usuario_id'
      });

      Usuario.hasMany(models.Poliza, {
        foreignKey: 'usuario_id'
      });

    }
  }
  Usuario.init({
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};