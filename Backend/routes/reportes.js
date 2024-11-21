const express = require('express');
const { generarReporteGeneral, generarReporteUsuario } = require('../controllers/reportesController');

const router = express.Router();

// Generar reporte general
router.get('/general', generarReporteGeneral);

// Generar reporte para un usuario específico
router.get('/usuario/:userId', generarReporteUsuario);

module.exports = router;
