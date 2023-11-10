
const { Poliza} = require('../models');

const polizasController = {};

polizasController.getPacientePolizas = async (req, res) => {

    try {
  
        const allPolizas = await Poliza.findAll(
          {
            where: { paciente_id: req.params.pacienteId  }
          }
        );
  
        return res.json({
            success: true,
            message: "Datos de todas las polizas recuperados",
            data: allPolizas,
        });
  
  
    } catch (error) {
  
        return res.status(500).json({
            success: false,
            message: "Los datos no han podido ser recuperados",
            error: error.message,
        });
  
    }
  
  }

  polizasController.deletePoliza = async (req, res) => {
  
    try {
        const deletePoliza = await Poliza.destroy({
          where: {
            id: req.params.polizaId
          },
        })
        return res.json({
          success: true,
          message: "La poliza ha sido eliminada de la base de datos",
          data: deletePoliza,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "La poliza no ha podido ser eliminada de la base de datos",
          error: error.message,
        });
      }
  }
  
  polizasController.createNewPoliza = async (req, res) => {
    try {
  
      const newPoliza = await Poliza.create({
        paciente_id:  req.body.paciente_id,
        nombreAseguradora:  req.body.nombreAseguradora,
        tipoSeguro:  req.body.tipoSeguro,
        nºTarjeta:  req.body.nºTarjeta,
      });
  
      return res.send(newPoliza);
  
    } catch (error) {
      return res.json({
        success: false,
        message: "No ha sido posible crear la poliza",
        error: error.message,
      });
    }
  }

  polizasController.modifyPoliza = async (req, res) => {
    let body = req.body;
  
    try {
  
        const updatePoliza = await Poliza.update(
          {
            paciente_id:  req.body.paciente_id,
            nombreAseguradora:  req.body.nombreAseguradora,
            tipoSeguro:  req.body.tipoSeguro,
            nºTarjeta:  req.body.nºTarjeta,
        },
        {
                  where: {
            id: body.id
          }
        }
        );
  
  
        return res.json({
          success: true,
          message: "La poliza ha sido actualizada",
          data: updatePoliza,
        });
  
    } catch (error) {
        return res.status(500).json({
          success: false,
          message: "No se ha podido actualizar la poliza",
          error: error.message,
        }); 
    }
  }

  polizasController.deletePolizasPaciente = async (req, res) => {

    console.log(`fuckkk`, req.params.pacienteId);

    try {
        const deletePolizas = await Poliza.destroy({
          where: {
            paciente_id: req.params.pacienteId  
          },
        })
        return res.json({
          success: true,
          message: "Las polizas han sido eliminadas",
          data: deletePolizas,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Las polizas no han sido eliminadas",
          error: error.message,
        });
      }
    

}

  module.exports = polizasController;