const express = require ('express');
const clienteController = require('./controllers/clienteControllers')
const router = express.Router();

router.get('/clientes', clienteController.getAll);

module.exports = router;