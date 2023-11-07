
const router = require('express').Router();

const pacientesController = require('../controllers/pacientesController');

router.get('/', pacientesController.getAllPacientes);
// router.get('/:userId', auth, appointmentsController.getCustomerAppointments);
// router.get('/artist/:artistId', auth, appointmentsController.getArtistAppointments);
router.post('/', pacientesController.createNewPaciente);
router.put('/', pacientesController.modifyPaciente);
router.delete('/:pacienteId', pacientesController.deletePaciente);

module.exports = router;