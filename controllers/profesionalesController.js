
const { Usuario, Profesional} = require('../models');

const profesionalesController = {};

profesionalesController.createNewProfesional = async (req, res) => {
    try {
  
      const newProfesional = await Profesional.create({
        usuario_id: req.body.usuario_id,
        nºColegiado: req.body.nºColegiado,
        nombre: req.body.nombre,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        genero: req.body.genero,
        fechaNacimiento: req.body.fechaNacimiento,
        nifPasaporte: req.body.nifPasaporte,
        tipoProfesional: req.body.tipoProfesional,
        calle: req.body.calle,
        numero: req.body.numero,
        puerta: req.body.puerta,
        codigoPostal: req.body.codigoPostal,
        ciudad: req.body.ciudad,
      });
  
      return res.send(newProfesional);
  
    } catch (error) {
      return res.json({
        success: false,
        message: "No ha sido posible crear el profesional",
        error: error.message,
      });
    }
  }




  module.exports = profesionalesController;