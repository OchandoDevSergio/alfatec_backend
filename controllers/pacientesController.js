const { Paciente} = require('../models');

const pacientesController = {};


pacientesController.getAllPacientes = async (req, res) => {

  try {

      const allPacientes = await Paciente.findAll();

      return res.json({
          success: true,
          message: "Datos de todos los pacientes recuperados",
          data: allPacientes,
      });


  } catch (error) {

      return res.status(500).json({
          success: false,
          message: "Los datos no han podido ser recuperados",
          error: error.message,
      });

  }

}



pacientesController.createNewPaciente = async (req, res) => {
    try {
  
      const newPaciente = await Paciente.create({
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

pacientesController.deletePaciente = async (req, res) => {
  
  try {
      const deletePaciente = await Paciente.destroy({
        where: {
          id: req.params.pacienteId
        },
      })
      return res.json({
        success: true,
        message: "El paciente ha sido eliminado de la base de datos",
        data: deletePaciente,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "El paciente no ha podido ser eliminado de la base de datos",
        error: error.message,
      });
    }
}

pacientesController.modifyPaciente = async (req, res) => {
  let body = req.body;

  try {

      const updatePaciente = await Paciente.update(
        {
          nhc:  req.body.nhc,
          nombre:  req.body.nombre,
          primerApellido:  req.body.primerApellido,
          segundoApellido:  req.body.segundoApellido,
          genero:  req.body.genero,
          fechaNacimiento:  req.body.fechaNacimiento,
          nifPasaporte:  req.body.nifPasaporte,
          calle:  req.body.calle,
          numero:  req.body.numero,
          puerta:  req.body.puerta,
          codigoPostal:  req.body.codigoPostal,
          ciudad: req.body.ciudad
      },
      {
                where: {
          id: body.id
        }
      }
      );


      return res.json({
        success: true,
        message: "El paciente ha sido actualizado",
        data: updatePaciente,
      });

  } catch (error) {
      return res.status(500).json({
        success: false,
        message: "No se ha podido actualizar al paciente",
        error: error.message,
      }); 
  }
}


  module.exports = pacientesController;