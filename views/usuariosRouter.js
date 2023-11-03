//Tabla desestimada en refactorización
const router = require('express').Router();

const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.getAllUsuarios);
router.post('/', usuariosController.createNewUser);


module.exports = router;