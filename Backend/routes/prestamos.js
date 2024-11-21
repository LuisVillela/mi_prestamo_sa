const express = require('express');
const { crearPrestamo, obtenerPrestamos } = require('../controllers/prestamosController');

const router = express.Router();

// Crear un préstamo
router.post('/crear', crearPrestamo);

// Obtener todos los préstamos
router.get('/', obtenerPrestamos);

module.exports = router;
