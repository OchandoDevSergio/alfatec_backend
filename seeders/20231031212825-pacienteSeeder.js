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

    await queryInterface.bulkInsert("Pacientes", [
      {
        id: 1,
        usuario_id: 1,
        nhc: 123456789,
        nombre: "Jose",
        primerApellido: "García",
        segundoApellido: "Moreno",
        genero: "masculino",
        fechaNacimiento: "1/1/1990",
        nifPasaporte: "11111111a",
        calle: "San Vicente",
        numero: 1,
        puerta: "1a",
        codigoPostal: 46001,
        ciudad:"Valencia",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 2,
        usuario_id: 2,
        nhc: 223456789,
        nombre: "Antonio",
        primerApellido: "Jiménez",
        segundoApellido: "Cruz",
        genero: "masculino",
        fechaNacimiento: "1/1/1991",
        nifPasaporte: "22222222b",
        calle: "Jesús",
        numero: 2,
        puerta: "2b",
        codigoPostal: 46001,
        ciudad:"Valencia",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 3,
        usuario_id: 3,
        nhc: 323456789,
        nombre: "Vicenta",
        primerApellido: "Ferro",
        segundoApellido: "Gil",
        genero: "femenino",
        fechaNacimiento: "1/1/1992",
        nifPasaporte: "33333333c",
        calle: "Marqués de dos aguas",
        numero: 3,
        puerta: "1",
        codigoPostal: 46001,
        ciudad:"Valencia",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 4,
        usuario_id: 4,
        nhc: 423456789,
        nombre: "María",
        primerApellido: "Carmona",
        segundoApellido: "Iglesias",
        genero: "femenino",
        fechaNacimiento: "1/1/1993",
        nifPasaporte: "44444444d",
        calle: "Tres cruces",
        numero: 4,
        puerta: "4a",
        codigoPostal: 46001,
        ciudad:"Valencia",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 5,
        usuario_id: 5,
        nhc: 523456789,
        nombre: "Miguel",
        primerApellido: "Navarro",
        segundoApellido: "López",
        genero: "masculino",
        fechaNacimiento: "1/1/1994",
        nifPasaporte: "55555555e",
        calle: "Primado Reich",
        numero: 2,
        puerta: "3",
        codigoPostal: 46001,
        ciudad:"Valencia",
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
