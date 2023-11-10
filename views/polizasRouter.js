
const router = require('express').Router();

const polizasController = require('../controllers/polizasController');

router.get('/:pacienteId', polizasController.getPacientePolizas);
router.post('/', polizasController.createNewPoliza);
router.put('/', polizasController.modifyPoliza);
router.delete('/poliza/:polizaId', polizasController.deletePoliza);
router.delete('/:pacienteId', polizasController.deletePolizasPaciente);

module.exports = router;