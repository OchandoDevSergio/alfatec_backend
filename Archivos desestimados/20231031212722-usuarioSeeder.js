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

    await queryInterface.bulkInsert("Usuarios", [
      {
        id: 1,
        rol: "paciente",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 2,
        rol: "paciente",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 3,
        rol: "paciente",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 4,
        rol: "paciente",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 5,
        rol: "paciente",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 6,
        rol: "profesional",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 7,
        rol: "profesional",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 8,
        rol: "profesional",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 9,
        rol: "profesional",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 10,
        rol: "profesional",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 11,
        rol: "profesional",
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
