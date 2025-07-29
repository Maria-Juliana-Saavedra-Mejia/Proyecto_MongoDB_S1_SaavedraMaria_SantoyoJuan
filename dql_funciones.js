// 1. Contar pacientes por hospital
function contarPacientesPorHospital() {
    return db.Paciente.aggregate([
      { $group: {
          _id: "$hospital_id",
          total_pacientes: { $sum: 1 }
      }}
    ]).toArray();
  }
  
// 2. Buscar medicamentos por nombre
  function buscarMedicamentosPorNombre(nombre) {
    return db.Medicamento.find({ nombre: { $regex: nombre, $options: 'i' } }).toArray();
  }
  
// 3. Visitas por paciente
  function visitasPorPaciente(pacienteId) {
    return db.Visita_Medica.find({ paciente_id: pacienteId }).toArray();
  }
  
// 4. Médicos por especialidad
  function medicosPorEspecialidad() {
    return db.MedicosYPersonal.aggregate([
      { $group: {
          _id: "$especialidad_id",
          total: { $sum: 1 }
      }}
    ]).toArray();
  }
// 5. Medicamentos con baja disponibilidad (< 50)
  function medicamentosConBajaDisponibilidad() {
    return db.Inventario.aggregate([
      { $match: { disponibilidad: { $lt: 50 } } },
      { $lookup: {
          from: "Medicamento",
          localField: "medicamento_id",
          foreignField: "_id",
          as: "medicamento"
      }},
      { $unwind: "$medicamento" },
      { $project: {
          medicamento: "$medicamento.nombre",
          disponibilidad: 1
      }}
    ]).toArray();
  }
  
// 6. Tratamientos por hospital
  function tratamientosPorHospital() {
    return db.Historial_Medico.aggregate([
      { $lookup: {
          from: "Diagnostico_Tratamiento",
          localField: "diagnostico_id",
          foreignField: "diagnostico_id",
          as: "tratamientos"
      }},
      { $unwind: "$tratamientos" },
      { $lookup: {
          from: "Tratamiento",
          localField: "tratamientos.tratamiento_id",
          foreignField: "_id",
          as: "tratamiento"
      }},
      { $unwind: "$tratamiento" },
      { $lookup: {
          from: "Paciente",
          localField: "paciente_id",
          foreignField: "_id",
          as: "paciente"
      }},
      { $unwind: "$paciente" },
      { $group: {
          _id: "$paciente.hospital_id",
          tratamientos: { $addToSet: "$tratamiento.nombre" }
      }}
    ]).toArray();
  }
  
// 7. Diagnósticos por especialidad
  function diagnosticosPorEspecialidad() {
    return db.MedicosYPersonal.aggregate([
      { $match: { numero_colegiatura: { $regex: "^002" } }},
      { $lookup: {
          from: "Visita_Medica",
          localField: "numero_colegiatura",
          foreignField: "medico_id",
          as: "visitas"
      }},
      { $unwind: "$visitas" },
      { $lookup: {
          from: "Visita_Diagnostico",
          localField: "visitas._id",
          foreignField: "visita_id",
          as: "diagnosticos"
      }},
      { $unwind: "$diagnosticos" },
      { $lookup: {
          from: "Diagnostico",
          localField: "diagnosticos.diagnostico_id",
          foreignField: "_id",
          as: "diag"
      }},
      { $unwind: "$diag" },
      { $group: {
          _id: "$especialidad_id",
          diagnosticos: { $addToSet: "$diag.descripcion" }
      }}
    ]).toArray();
  }
  
// 8. Inventario por tipo de medicamento
  function inventarioPorTipoMedicamento() {
    return db.Inventario.aggregate([
      { $lookup: {
          from: "Medicamento",
          localField: "medicamento_id",
          foreignField: "_id",
          as: "medicamento"
      }},
      { $unwind: "$medicamento" },
      { $group: {
          _id: "$medicamento.tipo_medicamento_id",
          total_disponibilidad: { $sum: "$disponibilidad" }
      }}
    ]).toArray();
  }
  
// 9. Resumen hospitalario
  function resumenHospitalario() {
    return {
      hospitales: db.Hospital.countDocuments(),
      medicos: db.MedicosYPersonal.countDocuments(),
      pacientes: db.Paciente.countDocuments(),
      visitas: db.Visita_Medica.countDocuments()
    };
  }
  
// 10. Tratamientos con más de 3 medicamentos
  function tratamientosConMasDe3Medicamentos() {
    return db.Tratamiento_Medicamento.aggregate([
      { $group: {
          _id: "$tratamiento_id",
          total_medicamentos: { $sum: 1 }
      }},
      { $match: { total_medicamentos: { $gt: 3 } }}
    ]).toArray();
  }
  
// 11. Pacientes con más de 5 visitas
  function pacientesConMuchasVisitas() {
    return db.Visita_Medica.aggregate([
      { $group: {
          _id: "$paciente_id",
          visitas: { $sum: 1 }
      }},
      { $match: { visitas: { $gt: 5 } }}
    ]).toArray();
  }
  
// 12. Medicamentos no usados en tratamientos
  function medicamentosSinUso() {
    return db.Medicamento.aggregate([
      { $lookup: {
          from: "Tratamiento_Medicamento",
          localField: "_id",
          foreignField: "medicamento_id",
          as: "uso"
      }},
      { $match: { uso: { $eq: [] } } }
    ]).toArray();
  }
  
// 13. Tratamientos por tipo
  function tratamientosPorTipo() {
    return db.Tratamiento.aggregate([
      { $group: {
          _id: "$tipo_tratamiento_id",
          tratamientos: { $push: "$nombre" }
      }}
    ]).toArray();
  }
  
// 14. Total de medicamentos por fabricante
  function medicamentosPorFabricante() {
    return db.Medicamento.aggregate([
      { $group: {
          _id: "$fabricante_id",
          total: { $sum: 1 }
      }}
    ]).toArray();
  }
  
// 15. Diagnósticos más frecuentes
  function diagnosticosFrecuentes() {
    return db.Visita_Diagnostico.aggregate([
      { $group: {
          _id: "$diagnostico_id",
          frecuencia: { $sum: 1 }
      }},
      { $sort: { frecuencia: -1 } },
      { $limit: 5 }
    ]).toArray();
  }
  
// 16. Disponibilidad por ubicación
  function disponibilidadPorUbicacion() {
    return db.Inventario.aggregate([
      { $group: {
          _id: "$ubicacion_id",
          total: { $sum: "$disponibilidad" }
      }}
    ]).toArray();
  }
  
// 17. Resultados por tratamiento
  function resultadosPorTratamiento() {
    return db.Resultado.aggregate([
      { $group: {
          _id: "$tratamiento_id",
          resultados: { $push: "$descripcion" }
      }}
    ]).toArray();
  }
  
// 18. Visitas por médico
  function visitasPorMedico() {
    return db.Visita_Medica.aggregate([
      { $group: {
          _id: "$medico_id",
          total_visitas: { $sum: 1 }
      }}
    ]).toArray();
  }
  
// 19. Promedio de visitas por paciente
  function promedioVisitasPorPaciente() {
    return db.Visita_Medica.aggregate([
      { $group: {
          _id: "$paciente_id",
          total_visitas: { $sum: 1 }
      }},
      { $group: {
          _id: null,
          promedio: { $avg: "$total_visitas" }
      }}
    ]).toArray();
  }
  
// 20. Medicamentos en piso 1 con baja disponibilidad
  function medicamentosPiso1BajaDisponibilidad() {
    return db.Inventario.aggregate([
      { $match: { disponibilidad: { $lt: 100 } } },
      { $lookup: {
          from: "Ubicacion",
          localField: "ubicacion_id",
          foreignField: "_id",
          as: "ubicacion"
      }},
      { $unwind: "$ubicacion" },
      { $match: { "ubicacion.piso": 1 } },
      { $lookup: {
          from: "Medicamento",
          localField: "medicamento_id",
          foreignField: "_id",
          as: "medicamento"
      }},
      { $unwind: "$medicamento" },
      { $project: {
          medicamento: "$medicamento.nombre",
          disponibilidad: 1,
          piso: "$ubicacion.piso"
      }}
    ]).toArray();
  }
  