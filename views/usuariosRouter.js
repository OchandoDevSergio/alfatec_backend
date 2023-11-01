
const router = require('express').Router();

const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.getAllUsuarios);
// router.get('/:userId', auth, appointmentsController.getCustomerAppointments);
// router.get('/artist/:artistId', auth, appointmentsController.getArtistAppointments);
// router.post('/', auth, appointmentsController.createNewAppointment);
// router.put('/', auth, appointmentsController.modifyAppointment);
// router.delete('/:erase', auth, appointmentsController.deleteAppointment);

module.exports = router;