
const router = require('express').Router();

const pacientesController = require('../controllers/pacientesController');

router.get('/', pacientesController.getAllPacientes);
// router.get('/:userId', auth, appointmentsController.getCustomerAppointments);
// router.get('/artist/:artistId', auth, appointmentsController.getArtistAppointments);
router.post('/', pacientesController.createNewPaciente);
// router.put('/', auth, appointmentsController.modifyAppointment);
// router.delete('/:erase', auth, appointmentsController.deleteAppointment);

module.exports = router;