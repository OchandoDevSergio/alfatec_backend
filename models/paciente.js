'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Paciente.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id'
      });

    }
  }
  Paciente.init({
    nhc: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    primerApellido: DataTypes.STRING,
    segundoApellido: DataTypes.STRING,
    genero: DataTypes.STRING,
    fechaNacimiento: DataTypes.STRING,
    nifPasaporte: DataTypes.STRING,
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    puerta: DataTypes.STRING,
    codigoPostal: DataTypes.INTEGER,
    ciudad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Paciente',
  });
  return Paciente;
};