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

    await queryInterface.bulkInsert("Profesionals", [
      {
        id: 1,
        nºColegiado: 987654321,
        nombre: "Jacinto",
        primerApellido: "Lorente",
        segundoApellido: "Molina",
        genero: "masculino",
        fechaNacimiento: "23/1/1983",
        nifPasaporte: "66666666f",
        tipoProfesional: "médico",
        calle: "Suecia",
        numero: 12,
        puerta: "5",
        codigoPostal: 46001,
        ciudad: "Valencia",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 2,
        nºColegiado: 777888999,
        nombre: "Oscar",
        primerApellido: "Rico",
        segundoApellido: "Puente",
        genero: "masculino",
        fechaNacimiento: "13/2/1996",
        nifPasaporte: "77777777g",
        tipoProfesional: "médico",
        calle: "Bailén",
        numero: 36,
        puerta: "2a",
        codigoPostal: 46001,
        ciudad: "Valencia",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 3,
        nºColegiado: 444555666,
        nombre: "Lorena",
        primerApellido: "Martínez",
        segundoApellido: "Rueda",
        genero: "femenino",
        fechaNacimiento: "15/6/2000",
        nifPasaporte: "88888888h",
        tipoProfesional: "enfermero",
        calle: "San Agustín",
        numero: 15,
        puerta: "2c",
        codigoPostal: 46001,
        ciudad: "Valencia",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 4,
        nºColegiado: 111222333,
        nombre: "Benito",
        primerApellido: "Macías",
        segundoApellido: "Puig",
        genero: "masculino",
        fechaNacimiento: "18/3/1991",
        nifPasaporte: "99999999i",
        tipoProfesional: "enfermero",
        calle: "Séneca",
        numero: 65,
        puerta: "7",
        codigoPostal: 46001,
        ciudad: "Valencia",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 5,
        nºColegiado: 0,
        nombre: "Luisa",
        primerApellido: "Robles",
        segundoApellido: "Puentes",
        genero: "femenino",
        fechaNacimiento: "6/11/1989",
        nifPasaporte: "12121212j",
        tipoProfesional: "administrativo",
        calle: "Cuenca",
        numero: 3,
        puerta: "2a",
        codigoPostal: 46001,
        ciudad: "Valencia",
        createdAt: "2023-10-31 22:33:32",
        updatedAt: "2023-10-31 22:33:32",
      },
      {
        id: 6,
        nºColegiado: 0,
        nombre: "Jaime",
        primerApellido: "Vela",
        segundoApellido: "Muñoz",
        genero: "masculino",
        fechaNacimiento: "14/4/1980",
        nifPasaporte: "13131313k",
        tipoProfesional: "administrativo",
        calle: "República Argentina",
        numero: 7,
        puerta: "1",
        codigoPostal: 46730,
        ciudad: "Gandía",
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
