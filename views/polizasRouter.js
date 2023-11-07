
const router = require('express').Router();

const polizasController = require('../controllers/polizasController');

//router.get('/', usuariosController.getAllUsuarios);
 router.get('/:pacienteId', polizasController.getPacientePolizas);
// router.get('/artist/:artistId', auth, appointmentsController.getArtistAppointments);
router.post('/', polizasController.createNewPoliza);
router.put('/', polizasController.modifyPoliza);
// router.delete('/:erase', auth, appointmentsController.deleteAppointment);
router.delete('/:polizaId', polizasController.deletePoliza);

module.exports = router;