'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Poliza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Poliza.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id'
      });

    }
  }
  Poliza.init({
    nombreAseguradora: DataTypes.STRING,
    tipoSeguro: DataTypes.STRING,
    nºTarjeta: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Poliza',
  });
  return Poliza;
};