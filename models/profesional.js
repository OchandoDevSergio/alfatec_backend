'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profesional.init({
    nºColegiado: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    1 ºApellido: DataTypes.STRING,
    2 ºApellido: DataTypes.STRING,
    genero: DataTypes.STRING,
    fechaNacimiento: DataTypes.STRING,
    nifPasaporte: DataTypes.STRING,
    tipoProfesional: DataTypes.STRING,
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    puerta: DataTypes.STRING,
    codigoPostal: DataTypes.INTEGER,
    ciudad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profesional',
  });
  return Profesional;
};