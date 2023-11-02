const { Usuario, Paciente} = require('../models');

const pacientesController = {};

pacientesController.createNewPaciente = async (req, res) => {
    try {
  
      const newPaciente = await Paciente.create({
        usuario_id: req.body.usuario_id,
        nhc: req.body.nhc,
        nombre: req.body.nombre,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        genero: req.body.genero,
        fechaNacimiento: req.body.fechaNacimiento,
        nifPasaporte: req.body.nifPasaporte,
        calle: req.body.calle,
        numero: req.body.numero,
        puerta: req.body.puerta,
        codigoPostal: req.body.codigoPostal,
        ciudad: req.body.ciudad,
      });
  
      return res.send(newPaciente);
  
    } catch (error) {
      return res.json({
        success: false,
        message: "No ha sido posible crear el paciente",
        error: error.message,
      });
    }
  }





  module.exports = pacientesController;