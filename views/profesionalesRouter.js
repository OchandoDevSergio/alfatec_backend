
const router = require('express').Router();

const profesionalesController = require('../controllers/profesionalesController');

//router.get('/', usuariosController.getAllUsuarios);
// router.get('/:userId', auth, appointmentsController.getCustomerAppointments);
// router.get('/artist/:artistId', auth, appointmentsController.getArtistAppointments);
router.post('/', profesionalesController.createNewProfesional);
// router.put('/', auth, appointmentsController.modifyAppointment);
router.delete('/medics', profesionalesController.deleteMedicos);

module.exports = router;