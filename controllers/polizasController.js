
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

  
  module.exports = polizasController;