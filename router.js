

const router = require('express').Router();

const usuariosRouter = require('./views/usuariosRouter.js');



//Routing......

router.use('/usuarios', usuariosRouter);


module.exports = router;