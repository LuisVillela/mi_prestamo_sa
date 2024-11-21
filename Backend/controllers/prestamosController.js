const { Pool } = require('pg');
const pool = require('../models/db');

exports.crearPrestamo = async (req, res) => {
  const { codigo_prestamo, monto_solicitado, cuotas_pactadas, motivo, user_id } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO miprestamo.PRESTAMO (codigo_prestamo, monto_solicitado, cuotas_pactadas, motivo, user_id, fecha_creacion) 
       VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *`,
      [codigo_prestamo, monto_solicitado, cuotas_pactadas, motivo, user_id]
    );
    res.status(201).json({ prestamo: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el préstamo' });
  }
};

exports.obtenerPrestamos = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM miprestamo.PRESTAMO`);
    res.status(200).json({ prestamos: result.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener préstamos' });
  }
};
