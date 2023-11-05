'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("Polizas", [
      {
        id: 1,
        paciente_id: 1,
        nombreAseguradora: "Adeslas",
        tipoSeguro: "salud",
        nºTarjeta: "1111111111111111",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 2,
        paciente_id: 1,
        nombreAseguradora: "Santa Lucía",
        tipoSeguro: "familiar",
        nºTarjeta: "2222111111111111",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 3,
        paciente_id: 2,
        nombreAseguradora: "Mapfre",
        tipoSeguro: "dental",
        nºTarjeta: "3333111111111111",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 4,
        paciente_id: 2,
        nombreAseguradora: "Adeslas",
        tipoSeguro: "salud",
        nºTarjeta: "4444111111111111",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 5,
        paciente_id: 3,
        nombreAseguradora: "Asisa",
        tipoSeguro: "familiar",
        nºTarjeta: "5555111111111111",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 6,
        paciente_id: 3,
        nombreAseguradora: "Adeslas",
        tipoSeguro: "dental",
        nºTarjeta: "6666111111111111",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 7,
        paciente_id: 4,
        nombreAseguradora: "Mapfre",
        tipoSeguro: "salud",
        nºTarjeta: "7777111111111111",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 8,
        paciente_id: 4,
        nombreAseguradora: "Asisa",
        tipoSeguro: "familiar",
        nºTarjeta: "8888111111111111",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 9,
        paciente_id: 5,
        nombreAseguradora: "Adeslas",
        tipoSeguro: "dental",
        nºTarjeta: "9999111111111111",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 10,
        paciente_id: 5,
        nombreAseguradora: "Santa Lucía",
        tipoSeguro: "salud",
        nºTarjeta: "0000111111111111",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },

    ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
