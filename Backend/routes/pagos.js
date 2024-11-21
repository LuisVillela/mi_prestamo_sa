const express = require('express');
const { registrarPago, validarPago } = require('../controllers/pagosController');

const router = express.Router();

// Registrar un pago
router.post('/registrar', registrarPago);

// Validar un pago
router.put('/validar/:pagoId', validarPago);

module.exports = router;
