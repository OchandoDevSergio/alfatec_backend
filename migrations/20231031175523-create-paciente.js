'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pacientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },      
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
          key:"id"
        }
      },
      nhc: {
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      primerApellido: {
        type: Sequelize.STRING
      },
      segundoApellido: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      fechaNacimiento: {
        type: Sequelize.STRING
      },
      nifPasaporte: {
        type: Sequelize.STRING
      },
      calle: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      },
      puerta: {
        type: Sequelize.STRING
      },
      codigoPostal: {
        type: Sequelize.INTEGER
      },
      ciudad: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pacientes');
  }
};