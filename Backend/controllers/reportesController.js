exports.generarReporteGeneral = (req, res) => {
    // Implementación de la lógica para el reporte general
    res.status(200).json({ message: 'Reporte general generado exitosamente' });
  };
  
  exports.generarReporteUsuario = (req, res) => {
    const { userId } = req.params;
    // Implementación de la lógica para el reporte de usuario
    res.status(200).json({ message: `Reporte generado para el usuario ${userId}` });
  };
  