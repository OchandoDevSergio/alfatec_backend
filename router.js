

const router = require('express').Router();

//const usuariosRouter = require('./views/usuariosRouter.js'); tabla desestimada en refactorización
const profesionalesRouter = require('./views/profesionalesRouter.js');
const pacientesRouter = require('./views/pacientesRouter.js');
//const polizasRouter = require('./views/polizasRouter.js');



//Routing......

//router.use('/usuarios', usuariosRouter);
router.use('/profesionales', profesionalesRouter);
router.use('/pacientes', pacientesRouter);
//router.use('/polizas', polizasRouter);


module.exports = router;