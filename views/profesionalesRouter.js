
const router = require('express').Router();

const profesionalesController = require('../controllers/profesionalesController');

router.get('/', profesionalesController.getAllProfesionales);
router.post('/', profesionalesController.createNewProfesional);
router.put('/', profesionalesController.modifyProfesional);
router.delete('/medics', profesionalesController.deleteMedicos);
router.delete('/:profesionalId', profesionalesController.deleteProfesional);

module.exports = router;