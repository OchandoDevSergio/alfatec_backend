
const { Usuario, Profesional, Poliza, Paciente } = require('../models');

const usuariosController = {};

usuariosController.getAllUsuarios = async (req, res) => {

    try {

        const allUsuarios = await Usuario.findAll(
          {
            include : [
              {
                model: Paciente,
                required: false,
                attributes: {
                  exclude : ['updatedAt','createdAt'],
                  include: ['id','usuario_id','nhc','nombre','primerApellido','segundoApellido','genero','fechaNacimiento','nifPasaporte','calle','numero','puerta','codigoPostal','ciudad']
                }
              },
              {
                model: Profesional,
                required: false,
                attributes: {
                  exclude : ['updatedAt','createdAt'],
                  include: ['id','usuario_id','nºColegiado','nombre','primerApellido','segundoApellido','genero','fechaNacimiento','nifPasaporte','calle','numero','puerta','codigoPostal','ciudad']
                }
              },
              {
                model: Poliza,
                required: false,
                attributes: {
                  exclude : ['updatedAt','createdAt'],
                  include: ['id','usuario_id','nombreAseguradora','tipoSeguro','nºTarjeta']
                }
              }
            ]
          }
        );

        return res.json({
            success: true,
            message: "Datos de todos los usuarios recuperados",
            data: allUsuarios,
        });


    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Los datos no han podido ser recuperados",
            error: error.message,
        });

    }

}



usuariosController.createNewUser = async (req, res) => {
  try {

    const newUser = await Usuario.create({
      rol: req.body.rol,
    });

    return res.send(newUser);

  } catch (error) {
    return res.json({
      success: false,
      message: "No ha sido posible crear el usuario",
      error: error.message,
    });
  }
}

// appointmentsController.modifyAppointment = async (req, res) => {
//   let body = req.body;

//   try {

//       const updateAppointment = await Rental.update(
//         {
//           user_id: req.body.user_id,
//           artist_id: req.body.artist_id,
//           date: req.body.date,
//           hour: req.body.hour,
//       },
//       {
//                 where: {
//           id: body.id
//         }
//       }
//       );


//       return res.json({
//         success: true,
//         message: "La cita ha sido actualizada",
//         data: updateAppointment,
//       });

//   } catch (error) {
//       return res.status(500).json({
//         success: false,
//         message: "No se ha podido actualizar la cita",
//         error: error.message,
//       }); 
//   }
// }

// appointmentsController.deleteAppointment = async (req, res) => {

//   let appointmentId = req.params.erase;

//     try {
//         const deleteAppointment = await Appointment.destroy({
//           where: {
//             id: appointmentId
//           },
//         });
//         return res.json({
//           success: true,
//           message: "La cita ha sido eliminada",
//           data: deleteAppointment,
//         });
//       } catch (error) {
//         return res.status(500).json({
//           success: false,
//           message: "La cita no ha podido ser eliminada",
//           error: error.message,
//         });
//       }
    

// }

module.exports = usuariosController;