
const { Profesional} = require('../models');

const profesionalesController = {};

profesionalesController.getAllProfesionales = async (req, res) => {

  try {

      const allProfesionales = await Profesional.findAll();

      return res.json({
          success: true,
          message: "Datos de todos los profesionales recuperados",
          data: allProfesionales,
      });


  } catch (error) {

      return res.status(500).json({
          success: false,
          message: "Los datos no han podido ser recuperados",
          error: error.message,
      });

  }

}

profesionalesController.createNewProfesional = async (req, res) => {
    try {
  
      const newProfesional = await Profesional.create({
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


  profesionalesController.deleteMedicos = async (req, res) => {
  
      try {
          const deleteMedics = await Profesional.destroy({
            where: {
              tipoProfesional: "médico"
            },
          })
          return res.json({
            success: true,
            message: "Los médicos han sido eliminados de la base de datos",
            data: deleteMedics,
          });
        } catch (error) {
          return res.status(500).json({
            success: false,
            message: "Los médicos no han podido ser eliminados de la base de datos",
            error: error.message,
          });
        }
      
  
  }

  profesionalesController.deleteProfesional = async (req, res) => {
  
    try {
        const deleteProfesional = await Profesional.destroy({
          where: {
            id: req.params.profesionalId
          },
        })
        return res.json({
          success: true,
          message: "El profesional ha sido eliminado de la base de datos",
          data: deleteProfesional,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "El profesional no ha podido ser eliminado de la base de datos",
          error: error.message,
        });
      }
  }

  profesionalesController.modifyProfesional = async (req, res) => {
    let body = req.body;
  
    try {
  
        const updateProfesional = await Profesional.update(
          {
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
        },
        {
                  where: {
            id: body.id
          }
        }
        );
  
  
        return res.json({
          success: true,
          message: "El profesional ha sido actualizado",
          data: updateProfesional,
        });
  
    } catch (error) {
        return res.status(500).json({
          success: false,
          message: "No se ha podido actualizar al profesional",
          error: error.message,
        }); 
    }
  }

  module.exports = profesionalesController;