//1. Muestra el nombre de todos los hospitales, ocultando el `_id`.

db.Hospital.find({},{nombre:1,_id:0});

//2. Muestra todos los medicamentos con sus nombres y descripciones.

   db.Medicamento.find({},{nombre:1, _id:0, descripcion:1});

//3. Lista todas las especialidades médicas disponibles.

   db.Especialidad.find();

//4. Muestra las descripciones de todos los diagnósticos.

   db.Diagnostico.find({},{descripcion:1, _id:0});

//5. Lista todos los tipos de medicamentos registrados.

   db.Tipo_Medicamento.find({}, {nombre: 1, _id: 0});

//6. Muestra los nombres de los tipos de tratamiento existentes.

   db.Tratamiento.find({},{nombre:1});

//7. Lista todos los fabricantes de medicamentos.

   db.Fabricante.find({}, {nombre: 1, _id: 0});

//8. Muestra el nombre de cada persona registrada en `MedicosYPersonal`.

   db.MedicosYPersonal.find({},{nombre:1 , _id:0 });

//9. Lista los pacientes registrados con su nombre.

   db.Paciente.find({},{nombre:1,_id:0});

//10. Muestra todas las descripciones de los resultados de tratamientos.

    db.Resultado.find({},{descripcion:1, _id:0});

//11. Muestra los tratamientos con su nombre y descripción.

    db.Tratamiento.find({},{nombre:1,descripcion:1,_id:0});

//12. Consulta el inventario con los IDs de medicamentos y su disponibilidad.

    db.Inventario.find({}, {disponibilidad: 1, medicamento_id: 1, _id: 0});

//13. Muestra las visitas médicas con fecha, hora y médico asignado.

    db.Visita_Medica.aggregate([
      {$lookup: {
          from: "MedicosYPersonal",
          localField: "medico_id",
          foreignField: "numero_colegiatura",
          as: "medico"
        }
      },
      { $unwind: "$medico" },
      {$project: {
          _id: 0,
          fecha: 1,
          hora: 1,
          nombre_medico: "$medico.nombre"
        } }])

//14. Consulta todos los diagnósticos-tratamiento.

    db.Diagnostico.aggregate([
      {$lookup: {
          from: "Diagnostico_Tratamiento",
          localField: "_id",
          foreignField: "diagnostico_id",
          as: "relacion"
        } },
      { $unwind: "$relacion" },
      {$lookup: {
          from: "Tratamiento",
          localField: "relacion.tratamiento_id",
          foreignField: "_id",
          as: "tratamiento"
        }},
      { $unwind: "$tratamiento" },
      { $project: {
          _id: 0,
          diagnostico: "$descripcion",
          tratamiento: "$tratamiento.nombre"
        } }])

//15. Consulta los tratamientos-medicamentos registrados.

    db.Medicamento.aggregate([
      {$lookup: {
          from: "Tratamiento_Medicamento",
          localField: "_id",
          foreignField: "medicamento_id",
          as: "relacion"
        }},
      { $unwind: "$relacion" },
      {$lookup: {
          from: "Tratamiento",
          localField: "relacion.tratamiento_id",
          foreignField: "_id",
          as: "tratamiento"
        }},
      { $unwind: "$tratamiento" },
      {$project: {
          _id: 0,
          medicamento: "$nombre",
          tratamiento: "$tratamiento.nombre"
        }}])

//16. Consulta los tratamientos por área médica.

db.Tratamiento_Area.aggregate([
  {$lookup: {
      from: "Area_Especializada",
      localField: "area_id",
      foreignField: "_id",
      as: "area"
    }},
  { $unwind: "$area" },{
    $lookup: {
      from: "Tratamiento",
      localField: "tratamiento_id",
      foreignField: "_id",
      as: "tratamiento"
    }},
  { $unwind: "$tratamiento" },
  {$project: {
      _id: 0,
      area: "$area.nombre",
      tratamiento: "$tratamiento.nombre",
      descripcion_tratamiento: "$tratamiento.descripcion"}}
])

//17. Muestra las áreas asociadas a cada hospital.

    db.Area_Especializada.aggregate([
      {$lookup: {
          from: "Hospital_Area",
          localField: "_id",
          foreignField: "area_id",
          as: "relacion"
        }},
      { $unwind: "$relacion" },
      {$lookup: {
          from: "Hospital",
          localField: "relacion._id",
          foreignField: "_id",
          as: "hospital"
        }},
      { $unwind: "$hospital" },
      {$project: {
          _id: 0,
          area: "$nombre",
          hospital: "$hospital.nombre"
        }}])

//18. Muestra los nombres de los médicos que trabajan en el hospital con ID //1.

    db.MedicosYPersonal.find({ numero_colegiatura: /^002/, hospital_id:1 },{ _id: 0, nombre: 1})

//19. Lista los pacientes asignados al hospital con ID //1.

    db.Paciente.find({ hospital_id: 1 })

//20. Busca medicamentos cuyo nombre contenga "Ranitidina".

    db.Medicamento.find({nombre:/Ranitidina/i})

//21. Muestra los trabajadores con `numero_colegiatura` igual a 003.

    db.MedicosYPersonal.find({ numero_colegiatura: /^003/ })

//22. Consulta el inventario de medicamentos con menos de 100 unidades disponibles.

    db.Inventario.find({ disponibilidad: { $lt: 100 } })

//23. Ordena los registros de inventario por fecha de ingreso más reciente.

    db.Inventario.find().sort({ fecha_ingreso: -1 })

//24. Busca tratamientos de un tipo específico.

    db.Tratamiento.find({ tipo_tratamiento_id: 1 })

//25. Encuentra medicamentos de un tipo específico.

    db.Medicamento.find({ tipo_medicamento_id: 1 })

//26. Muestra medicamentos de un fabricante en particular.

    db.Medicamento.find({ fabricante_id: 6 })

//27. Consulta todos los pacientes que tienen asignado un seguro médico.

    db.Paciente.find({ seguro_medico_id: { $exists: true, $ne: null } })

//28. Cuenta cuántos pacientes hay por hospital.

    db.Paciente.aggregate([
      {$group: {
          _id: "$hospital_id",
          totalPacientes: { $sum: 1 }
        } }])

//29. Muestra todos los historiales médicos de un paciente.

    db.Historial_Medico.find({paciente_id:18})

//30. Consulta diagnósticos que contengan "asma" en su descripción.

    db.Diagnostico.find({descripcion:/asma/i})

//31. Cuenta cuántos médicos hay en total por hospital.

db.MedicosYPersonal.aggregate([
  {$match: { numero_colegiatura: { $regex: /^002/ }
    }},
  {$group: {
      _id: "$hospital_id",
      totalMedicos: { $sum: 1 }
    }}])
//32. Muestra los hospitales con más de 5 áreas especializadas.

db.Hospital_Area.aggregate([
  {
    $group: {
      _id: "$hospital_id",          
      total_areas: { $sum: 1 }     
    }
  },
  {$match: {
      total_areas: { $gt: 5 }      
    }},
  {$lookup: {
      from: "Hospital",
      localField: "_id",
      foreignField: "_id",
      as: "hospital"
    }},
  { $unwind: "$hospital" },
  {$project: {
      _id: 0,
      hospital: "$hospital.nombre",
      total_areas: 1
  }}])

//33. Relaciona cada hospital con su director (usando su número de colegiatura).

db.MedicosYPersonal.aggregate([
  {$match: { numero_colegiatura: { $regex: /^001/ }
    }},
  {$lookup: {
    from: "Hospital",
    localField: "numero_colegiatura",
    foreignField: "director_id",
    as: "hospital"
    }},
    { $unwind: "$hospital" },
  {$project: {
            _id: 0,
            nombre: "$nombre",
            hospital: "$hospital.nombre"
}}])

//34. Muestra el nombre del hospital donde trabaja cada médico.

db.MedicosYPersonal.aggregate([
  {$match: { numero_colegiatura: { $regex: /^002/ }
    }},
  {$lookup: {
    from: "Hospital",
    localField: "hospital_id",
    foreignField: "_id",
    as: "hospital"
    }},
    { $unwind: "$hospital" },
  {$project: {
            _id: 0,
            nombre: "$nombre",
            hospital: "$hospital.nombre"
}}])


//35. Muestra los nombres de las áreas de especialidad del hospital id:1.

db.Hospital_Area.aggregate([
  {$match: { hospital_id: 1 }},
  {$lookup: {
      from: "Area_Especializada",
      localField: "area_id",
      foreignField: "_id",
      as: "area"
    }},
  { $unwind: "$area" },
  {$project: {
      _id: 0,
      nombre_area: "$area.nombre"
}}])    

//36. Muestra los médicos con su nombre de especialidad.

db.MedicosYPersonal.aggregate([
  {$match: { numero_colegiatura: { $regex: /^002/ }
    }},
  {$lookup: {
    from: "Especialidad",
    localField: "especialidad_id",
    foreignField: "_id",
    as: "hospital"
    }},
    { $unwind: "$hospital" },
  {$project: {
            _id: 0,
            nombre: "$nombre",
            hospital: "$hospital.nombre"
}}])

//37. Agrupa a los médicos por especialidad y cuenta cuántos hay por cada una.

db.MedicosYPersonal.aggregate([
  {$match: {
      numero_colegiatura: { $regex: /^002/ }
    }},
  {$lookup: {
      from: "Especialidad",
      localField: "especialidad_id",
      foreignField: "_id",
      as: "especialidad"
    }},
  { $unwind: "$especialidad" },
  {$group: {
      _id: "$especialidad.nombre",
      cantidad_medicos: { $sum: 1 }
    }},
  {$project: {
      _id: 0,
      especialidad: "$_id",
      cantidad_medicos: 1
}}])

//38. Ordena los hospitales por cantidad de personal médico.

db.MedicosYPersonal.aggregate([
  {$match: {
      numero_colegiatura: { $regex: /^002/ }
    }},
    {$group: {
        _id: "$hospital_id",
        cantidad_medicos: { $sum: 1 }
      }},
    {$lookup: {
        from: "Hospital",
        localField: "_id",
        foreignField: "_id",
        as: "hospital"
      }},
    { $unwind: "$hospital" },
    {$project: {
        _id: 0,
        hospital: "$hospital.nombre",
        cantidad_medicos: 1
      }},
    {$sort: {
        cantidad_medicos: -1 
  }}])    

//39. Muestra el total de personal médico agrupado por hospital (nombre).

db.MedicosYPersonal.aggregate([
  {$match: {
      numero_colegiatura: { $regex: /^002/ }
}},
  {$group: {
      _id: "$hospital_id",
      total_medicos: { $sum: 1 }
    }},
  {$lookup: {
      from: "Hospital",
      localField: "_id",
      foreignField: "_id",
      as: "hospital"
    }},
  { $unwind: "$hospital" },
  {$project: {
      _id: 0,
      hospital: "$hospital.nombre",
      total_medicos: 1
    }}])

//40. Muestra los pacientes con su ciudad de residencia.

db.Paciente.aggregate([
  {$lookup: {
      from: "Direccion",
      localField: "direccion_id",
      foreignField: "_id",
      as: "direccion"
    }},
  { $unwind: "$direccion" },
  {$project: {
      _id: 0,
      nombre: "$nombre",
      direccion: "$direccion.ciudad",
      cantidad_medicos: 1
    }},
])   

//41. Consulta todas las visitas médicas realizadas por un médico específico.

db.Visita_Medica.aggregate([
  {$match: {
    medico_id: "0020001"
}},
  {$lookup: {
      from: "MedicosYPersonal",
      localField: "medico_id",
      foreignField: "numero_colegiatura",
      as: "Medico"
    }},
  { $unwind: "$Medico" },
  {$project: {
      _id: 0,
      fecha: "$fecha",
      hora: "$hora",
      medico: "$Medico.nombre",
    }},
]) 

//42. Cuenta cuántas visitas ha tenido un paciente en total.

db.Visita_Medica.aggregate([
  {$match: {
    paciente_id: 1
}},
  {$lookup: {
      from: "Paciente",
      localField: "paciente_id",
      foreignField: "_id",
      as: "Paciente"
    }},
  { $unwind: "$Paciente" },
  {$group: {
    _id: "$paciente_id",
    paciente:{ $first:"$Paciente.nombre"},
    total_visitas: { $sum: 1 }
  }},
  {$project: {
      _id: 0,
      paciente:1,
      total_visitas:1
    }}
])    

//43. Muestra las visitas con los datos del paciente asociado.

db.Visita_Medica.aggregate([
  {$lookup: {
      from: "Paciente",
      localField: "paciente_id",
      foreignField: "_id",
      as: "Paciente"
    }},
  { $unwind: "$Paciente" },
  {$project: {
      _id: 1,
      fecha:"$fecha",
      hora:"$hora",
      nombre_paciente: "$Paciente.nombre",
      correo_paciente:"$Paciente.correo",
      telefono_paciente:"$Paciente.telefono"
    }}
])   

//44. Muestra las visitas junto con sus diagnósticos.

db.Visita_Diagnostico.aggregate([
  {$lookup: {
      from: "Visita_Medica",
      localField: "visita_id",
      foreignField: "_id",
      as: "Visita"
    }},
  { $unwind: "$Visita" },
  {$lookup: {
    from: "Diagnostico",
    localField: "diagnostico_id",
    foreignField: "_id",
    as: "Diagnostico"
  }},
{ $unwind: "$Diagnostico" },
  {$project: {
      _id: 0,
      visita_id:"$Visita._id",
      descripcion:"$Diagnostico.descripcion",
    }}
])    

//45. Agrupa las visitas por día y cuenta cuántas hubo cada día.

db.Visita_Medica.aggregate([
  {$group: {
      _id: "$fecha", 
      total_visitas: { $sum: 1 }
    }},
  {$project: {
      _id: 0,
      fecha: "$_id",
      total_visitas: 1
    }},
  {$sort: { fecha: 1 } 
}])   

//46. Muestra cuál es el diagnóstico más frecuente en la base de datos.

db.Visita_Diagnostico.aggregate([
  {$lookup: {
    from: "Diagnostico",
    localField: "diagnostico_id",
    foreignField: "_id",
    as: "Diagnostico"
  }},
{ $unwind: "$Diagnostico" },
{$group: {
  _id: "$diagnostico_id",
  diagnostico:{ $first:"$Diagnostico.descripcion"},
  total_diagnosticos: { $sum: 1 }
}},
{$project: {
    _id: 0,
    diagnostico: 1,
    total_diagnosticos: 1
  }
},
{ $sort: { total_diagnosticos: -1 } },
{ $limit: 1 }
])

//47. Lista los pacientes que han recibido un diagnósticos.

db.Visita_Diagnostico.aggregate([
  {$lookup: {
      from: "Visita_Medica",
      localField: "visita_id",
      foreignField: "_id",
      as: "visita"
    }},
  { $unwind: "$visita" },
  {$group: {
      _id: "$visita.paciente_id"
    }},
  {$lookup: {
      from: "Paciente",
      localField: "_id",
      foreignField: "_id",
      as: "paciente"
    }},
  { $unwind: "$paciente" },
  {$project: {
      _id: 0,
      nombre: "$paciente.nombre"
}}]) 

//48. Muestra cuántos médicos hay por especialidad.

db.MedicosYPersonal.aggregate([
  { $match: { numero_colegiatura: { $regex: /^002/ } } }, 
  {$lookup: {
      from: "Especialidad",
      localField: "especialidad_id",
      foreignField: "_id",
      as: "especialidad"
    }},
  { $unwind: "$especialidad" },
  {$group: {
      _id: "$especialidad.nombre",
      total_medicos: { $sum: 1 }
    }},
  {$project: {
      _id: 0,
      especialidad: "$_id",
      total_medicos: 1
}}])

//49. Lista los médicos que ganan más de $5000000.

db.MedicosYPersonal.find({numero_colegiatura: /^002/, salario:{$gt:5000000}}) 

//50. Muestra los medicamentos que no tienen disponibilidad.

db.Inventario.aggregate([
  { $match: { disponibilidad:0} }, 
  {$lookup: {
      from: "Medicamento",
      localField: "medicamento_id",
      foreignField: "_id",
      as: "medicamento"
    }},
  { $unwind: "$medicamento" },
  {$project: {
      _id: 0,
      medicamento: "$medicamento.nombre",
      total_medicamentos: "$disponibilidad"
}}])



//51. Muestra el salario promedio por especialidad médica.

db.MedicosYPersonal.aggregate([
  { $match: { numero_colegiatura: { $regex: /^002/ } } }, 
  {$lookup: {
      from: "Especialidad",
      localField: "especialidad_id",
      foreignField: "_id",
      as: "especialidad"
    }},
  { $unwind: "$especialidad" },
  {$group: {
      _id: "$especialidad.nombre",
      total_medicos: { $sum: 1 },
      promedio_salario: {$avg:"$salario"}
    }},
  {$project: {
      _id: 0,
      especialidad: "$_id",
      total_medicos: 1,
      promedio_salario:1
}}])   

//52. Cuenta cuántos medicamentos hay por tipo.

db.Medicamento.aggregate([
  {$lookup: {
      from: "Tipo_Medicamento",
      localField: "tipo_medicamento_id",
      foreignField: "_id",
      as: "Medicamento"
    }},
  { $unwind: "$Medicamento" },
  {$group: {
      _id: "$Medicamento.nombre",
      total_medicamentos: { $sum: 1 },
    }},
  {$project: {
      _id: 0,
      nombre_medicamento: "$_id",
      total_medicamentos: 1
}}])    

//53. Muestra el nombre del medicamento y su fabricante.

db.Medicamento.aggregate([
  {$lookup: {
      from: "Fabricante",
      localField: "fabricante_id",
      foreignField: "_id",
      as: "Fabricante"
    }},
  { $unwind: "$Fabricante" },
  {$project: {
      _id: 0,
      nombre_medicamento: "$nombre",
      nombre_fabricante: "$Fabricante.nombre"
}}])       

//54. Muestra los tratamientos con los medicamentos que usan.

db.Tratamiento.aggregate([
  {$lookup: {
      from: "Tratamiento_Medicamento",
      localField: "_id",
      foreignField: "tratamiento_id",
      as: "relaciones"
    }},
  { $unwind: "$relaciones" },
  {$lookup: {
      from: "Medicamento",
      localField: "relaciones.medicamento_id",
      foreignField: "_id",
      as: "medicamento"
    }},
  { $unwind: "$medicamento" },
  {$project: {
      _id: 0,
      tratamiento: "$nombre",
      medicamento: "$medicamento.nombre"
}}])  

//55. Muestra el costo total por tipo de tratamiento.

db.Tipo_Tratamiento.find({},{_id: 0,nombre: 1,costo: 1})

//56. Muestra los hospitales con más de 20 empleados.

db.MedicosYPersonal.aggregate([
  {$lookup: {
    from: "Hospital",
    localField: "hospital_id",
    foreignField: "_id",
    as: "Hospital"
  }},
{ $unwind: "$Hospital" },
{$group: {
  _id: "$Hospital.nombre",
  total_personal: { $sum: 1 }
}},
{$match: {
    total_personal: { $gt: 20 }
  }},
{$project: {
    _id: 1,
    total_personal: 1
  }
},
{ $sort: { total_personal: 1 } },
])   

//57. Muestra los diagnósticos más comunes y cuántas veces se repiten.

db.Visita_Diagnostico.aggregate([
  {$group: {
    _id: "$diagnostico_id",
    total: { $sum: 1 }
  }},
  {$lookup: {
      from: "Diagnostico",
      localField: "_id",
      foreignField: "_id",
      as: "diagnostico"
    }},
  { $unwind: "$diagnostico" },
  {$project: {
      _id: 0,
      diagnostico: "$diagnostico.descripcion",
      total: 1}},
  { $sort: { total: -1 } }
])    

//58. Muestra las visitas agrupadas por paciente y cuántas tiene cada uno.

db.Visita_Medica.aggregate([
  {$lookup: {
      from: "Paciente",
      localField: "paciente_id",
      foreignField: "_id",
      as: "paciente"
    }},
  { $unwind: "$paciente" },
  {$group: {
    _id: "$paciente.nombre",
    total_Visitas: { $sum: 1 }
  }},
  {$project: {
      _id: 1,
      diagnostico: 1,
      total_Visitas: 1}}
])    

//59. Relaciona diagnósticos con tratamientos y medicamentos.

db.Diagnostico_Tratamiento.aggregate([
  {$lookup: {
      from: "Diagnostico",
      localField: "diagnostico_id",
      foreignField: "_id",
      as: "diagnostico"
    }},
  { $unwind: "$diagnostico" },
  {$lookup: {
    from: "Tratamiento",
    localField: "tratamiento_id",
    foreignField: "_id",
    as: "Tratamiento"
  }},
{ $unwind: "$Tratamiento" },
  {$project: {
      _id: 1,
      diagnostico: "$diagnostico.descripcion",
      Tratamiento: "$Tratamiento.nombre"
    }}
])   

//60. Muestra cuántas veces se ha usado cada medicamento en tratamientos.

db.Tratamiento_Medicamento.aggregate([
  {$group: {
      _id: "$medicamento_id",
      veces_usado: { $sum: 1 }
    }},
  {$lookup: {
      from: "Medicamento",
      localField: "_id",
      foreignField: "_id",
      as: "medicamento"
    }},
  { $unwind: "$medicamento" },
  {$project: {
      _id: 0,
      medicamento: "$medicamento.nombre",
      veces_usado: 1
    }},
  { $sort: { veces_usado: -1 } }
]) 

//61. Agrupa pacientes por ciudad y cuenta cuántos hay por cada una.

db.Paciente.aggregate([
{$lookup: {
  from: "Direccion",
  localField: "direccion_id",
  foreignField: "_id",
  as: "direccion"
}},
{ $unwind: "$direccion" },
{$group: {
_id: "$direccion.ciudad",
total_personas_ciudad: { $sum: 1 }
}},
{$project: {
  _id: 1,
  total_personas_ciudad: 1}}
])     

//62. Muestra los tratamientos con más de tres medicamentos asociados.

db.Tratamiento_Medicamento.aggregate([
  {$group: {
      _id: "$tratamiento_id",
      total_medicamentos: { $sum: 1 }
    }},
  {$match: {
      total_medicamentos: { $gt: 3 }
    }},
  {$lookup: {
      from: "Tratamiento",
      localField: "_id",
      foreignField: "_id",
      as: "tratamiento"
    }},
  { $unwind: "$tratamiento" },
  {$project: {
      _id: 0,
      tratamiento: "$tratamiento.nombre",
      total_medicamentos: 1
}}])    

//63. Lista los diagnósticos y tratamientos de un paciente.

db.Historial_Medico.aggregate([
  { $match: { paciente_id: 18 } }, 
  {$lookup: {
      from: "Diagnostico",
      localField: "diagnostico_id",
      foreignField: "_id",
      as: "diagnostico"
    }},
  { $unwind: "$diagnostico" },
  {$lookup: {
      from: "Diagnostico_Tratamiento",
      localField: "diagnostico_id",
      foreignField: "diagnostico_id",
      as: "dt"
    }},
  { $unwind: "$dt" },
  {$lookup: {
      from: "Tratamiento",
      localField: "dt.tratamiento_id",
      foreignField: "_id",
      as: "tratamiento"
    }
  },
  { $unwind: "$tratamiento" },
  {$project: {
      _id: 0,
      fecha: "$fecha_registro",
      diagnostico: "$diagnostico.descripcion",
      tratamiento: "$tratamiento.nombre"
}}])

//64. Agrupa tratamientos por tipo y cuenta cuántos hay de cada tipo.

db.Tratamiento.aggregate([
  {$lookup: {
      from: "Tipo_Tratamiento",
      localField: "tipo_tratamiento_id",
      foreignField: "_id",
      as: "tratamiento"
    }},
  { $unwind: "$tratamiento" },
  {$group: {
    _id: "$tratamiento.nombre",
    tipo_tratamiento_cantidad: { $sum: 1 }
  }},
  {$project: {
      _id: 1,
      tipo_tratamiento_cantidad:1
}}])   

//65. Muestra los resultados agrupados por tratamiento.

db.Resultado.aggregate([
  {$lookup: {
      from: "Tratamiento",
      localField: "tratamiento_id",
      foreignField: "_id",
      as: "tratamiento"
    }},
  { $unwind: "$tratamiento" },
  {$group: {
      _id: "$tratamiento.nombre",
      resultados: { $push: "$descripcion" }
    }},
  {$project: {
      _id: 0,
      tratamiento: "$_id",
      resultados: 1
}}])   

//66. Muestra cuántos pacientes tiene cada hospital.

db.Paciente.aggregate([
  {$lookup: {
      from: "Hospital",
      localField: "hospital_id",
      foreignField: "_id",
      as: "hospital"
    }},
  { $unwind: "$hospital" },
  {$group: {
    _id: "$hospital.nombre",
    total_pacientes: { $sum: 1 }
  }},
  {$project: {
      _id: 1,
      total_pacientes: 1
}}])   

//67. Relaciona cada tratamiento con su tipo y costo.

db.Tratamiento.aggregate([
  {$lookup: {
      from: "Tipo_Tratamiento",
      localField: "tipo_tratamiento_id",
      foreignField: "_id",
      as: "tipo"
    }},
  { $unwind: "$tipo" },
  {$project: {
      _id: 0,
      tratamiento: "$nombre",
      tipo: "$tipo.nombre",
      costo: "$tipo.costo_base"
}}])  

//68. Muestra los diagnósticos más comunes por especialidad médica.

db.Visita_Diagnostico.aggregate([
  {$lookup: {
      from: "Diagnostico",
      localField: "diagnostico_id",
      foreignField: "_id",
      as: "diagnostico"
    }},
  { $unwind: "$diagnostico" },
  {$lookup: {
      from: "Visita_Medica",
      localField: "visita_id",
      foreignField: "_id",
      as: "visita"
    }},
  { $unwind: "$visita" },
  {$lookup: {
      from: "MedicosYPersonal",
      localField: "visita.medico_id",
      foreignField: "numero_colegiatura",
      as: "medico"
    }},
  { $unwind: "$medico" },
  {$lookup: {
      from: "Especialidad",
      localField: "medico.especialidad_id",
      foreignField: "_id",
      as: "especialidad"
    }},
  { $unwind: "$especialidad" },
  {$group: {
      _id: {
        especialidad: "$especialidad.nombre",
        diagnostico: "$diagnostico.descripcion"
      },
      total: { $sum: 1 }
    }},
  {$sort: { "_id.especialidad": 1, total: -1 }
  }])

//69. Muestra el número total de visitas por médico.

db.Visita_Medica.aggregate([
  {$group: {
      _id: "$medico_id",
      total_visitas: { $sum: 1 }
    }},
  {$lookup: {
      from: "MedicosYPersonal",
      localField: "_id",
      foreignField: "numero_colegiatura",
      as: "medico"
    }},
  { $unwind: "$medico" },
  {$project: {
      _id: 0,
      nombre_medico: "$medico.nombre",
      total_visitas: 1
    }}])   

//70. Muestra el promedio de visitas por paciente.

db.Visita_Medica.aggregate([
  { $group: {
      _id: "$paciente_id",
      total_visitas: { $sum: 1 }
  }},
  { $group: {
      _id: null,
      promedio_visitas: { $avg: "$total_visitas" }
  }},
  { $project: {
      _id: 0,
      promedio_visitas: 1
  }}]) 

//71. Muestra las enfermedades más comunes en el hospital 1.

db.Visita_Medica.aggregate([
  {$lookup: {
      from: "Paciente",
      localField: "paciente_id",
      foreignField: "_id",
      as: "paciente"
    }},
  { $unwind: "$paciente" },
  {$match: { "paciente.hospital_id": 1 }
  },
  {$lookup: {
      from: "Visita_Diagnostico",
      localField: "_id",
      foreignField: "visita_id",
      as: "diagnosticos"
    }},
  { $unwind: "$diagnosticos" },
  {$lookup: {
      from: "Diagnostico",
      localField: "diagnosticos.diagnostico_id",
      foreignField: "_id",
      as: "detalle_diagnostico"
    }},
  { $unwind: "$detalle_diagnostico" },
  {$group: {
      _id: "$detalle_diagnostico.descripcion",
      total: { $sum: 1 }
    }},
  { $sort: { total: -1 } }
])

//72. Muestra los medicamentos más usados en tratamientos exitosos.

db.Resultado.aggregate([
  {$lookup: {
      from: "Tratamiento_Medicamento",
      localField: "tratamiento_id",
      foreignField: "tratamiento_id",
      as: "meds"
    }},
  { $unwind: "$meds" },
  {$lookup: {
      from: "Medicamento",
      localField: "meds.medicamento_id",
      foreignField: "_id",
      as: "medicamento"
    }},
  { $unwind: "$medicamento" },
  {$group: {
      _id: "$medicamento.nombre",
      veces_usado: { $sum: 1 }
    }
  },
  { $sort: { veces_usado: -1 } }
])
    

//73. Muestra el nombre de cada tratamiento y los diagnósticos en los que se ha aplicado.

db.Diagnostico_Tratamiento.aggregate([
  {$lookup: {
      from: "Tratamiento",
      localField: "tratamiento_id",
      foreignField: "_id",
      as: "tratamiento"
    }},
  { $unwind: "$tratamiento" },
  {$lookup: {
      from: "Diagnostico",
      localField: "diagnostico_id",
      foreignField: "_id",
      as: "diagnostico"
    }},
  { $unwind: "$diagnostico" },
  {$project: {
      _id: 0,
      tratamiento: "$tratamiento.nombre",
      diagnostico: "$diagnostico.descripcion"
 }}])


//74. Agrupa pacientes por seguro médico y cuenta cuántos hay.

db.Paciente.aggregate([
  {$lookup: {
      from: "Seguros_Medicos",
      localField: "seguro_medico_id",
      foreignField: "_id",
      as: "seguro"}
  },
  { $unwind: "$seguro" },
  {$group: {
      _id: "$seguro.nombre",
      total_pacientes: { $sum: 1 }
    }},
  { $project: { _id: 0, seguro: "$_id", total_pacientes: 1 } }
])
    

//75. Muestra los tratamientos realizados en cada área médica.

db.Tratamiento_Area.aggregate([
  {$lookup: {
      from: "Area_Especializada",
      localField: "area_id",
      foreignField: "_id",
      as: "area"
    }},
  { $unwind: "$area" },
  {$lookup: {
      from: "Tratamiento",
      localField: "tratamiento_id",
      foreignField: "_id",
      as: "tratamiento"
    }},
  { $unwind: "$tratamiento" },
  {$project: {
      _id: 0,
      area: "$area.nombre",
      tratamiento: "$tratamiento.nombre"
}}])
   

//76. Calcula el total de unidades de inventario por tipo de medicamento.

db.Inventario.aggregate([
  {$lookup: {
      from: "Medicamento",
      localField: "medicamento_id",
      foreignField: "_id",
      as: "medicamento"
    }},
  { $unwind: "$medicamento" },
  {$group: {
      _id: "$medicamento.tipo_medicamento_id",
      total_unidades: { $sum: "$disponibilidad" }
}}])
   

//77. Agrupa diagnósticos por mes de registro y cuenta cuántos hubo cada mes.

db.Historial_Medico.aggregate([
  {$group: {
      _id: {
        mes: { $month: "$fecha_registro" },
        año: { $year: "$fecha_registro" }
      },
      total_diagnosticos: { $sum: 1 }
    }},
  {$sort: { "_id.año": 1, "_id.mes": 1 }
  }])
   
//78. Muestra la disponibilidad de medicamentos por ubicación.

db.Inventario.aggregate([
  {$lookup: {
      from: "Ubicacion",
      localField: "ubicacion_id",
      foreignField: "_id",
      as: "ubicacion"
    }},
  { $unwind: "$ubicacion" },
  {$group: {
      _id: "$ubicacion.edificio",
      total_disponibilidad: { $sum: "$disponibilidad" }
    }}])

//79. Lista las visitas ordenadas por fecha más reciente.

db.Visita_Medica.find().sort({ fecha: -1 })   

//80. Muestra los diagnósticos que tienen más de un tratamiento asociado.

db.Diagnostico_Tratamiento.aggregate([
  {$group: {
      _id: "$diagnostico_id",
      total_tratamientos: { $sum: 1 }
    }},
  { $match: { total_tratamientos: { $gt: 1 } } },
  {$lookup: {
      from: "Diagnostico",
      localField: "_id",
      foreignField: "_id",
      as: "diagnostico"
    }},
  { $unwind: "$diagnostico" },
  {$project: {
      _id: 0,
      diagnostico: "$diagnostico.descripcion",
      total_tratamientos: 1
}}])
   
//81. Agrupa medicamentos por fabricante y suma su disponibilidad total.

db.Medicamento.aggregate([
  {$lookup: {
      from: "Inventario",
      localField: "_id",
      foreignField: "medicamento_id",
      as: "inventario"
    }},
  { $unwind: "$inventario" },
  {$lookup: {
      from: "Fabricante",
      localField: "fabricante_id",
      foreignField: "_id",
      as: "fabricante"
    }},
  { $unwind: "$fabricante" },
  {$group: {
      _id: "$fabricante.nombre",
      total_disponibilidad: { $sum: "$inventario.disponibilidad" }
}}])
   

//82. Muestra cuántos tratamientos activos hay por hospital.

db.Paciente.aggregate([
  {$lookup: {
      from: "Historial_Medico",
      localField: "_id",
      foreignField: "paciente_id",
      as: "historial"
    }},
  { $unwind: "$historial" },
  {$lookup: {
      from: "Diagnostico_Tratamiento",
      localField: "historial.diagnostico_id",
      foreignField: "diagnostico_id",
      as: "tratamientos"
    }},
  { $unwind: "$tratamientos" },
  {$group: {
      _id: "$hospital_id",
      tratamientos_totales: { $addToSet: "$tratamientos.tratamiento_id" }
    }},
  {$project: {
      hospital_id: "$_id",
      cantidad_tratamientos: { $size: "$tratamientos_totales" },
      _id: 0
}}])
   

//83. Relaciona cada tratamiento con los pacientes que lo han recibido.

db.Diagnostico_Tratamiento.aggregate([
  {$lookup: {
      from: "Historial_Medico",
      localField: "diagnostico_id",
      foreignField: "diagnostico_id",
      as: "historial"
    }},
  { $unwind: "$historial" },
  {$lookup: {
      from: "Paciente",
      localField: "historial.paciente_id",
      foreignField: "_id",
      as: "paciente"
    }},
  { $unwind: "$paciente" },
  {$lookup: {
      from: "Tratamiento",
      localField: "tratamiento_id",
      foreignField: "_id",
      as: "tratamiento"
    }},
  { $unwind: "$tratamiento" },
  {$group: {
      _id: "$tratamiento.nombre",
      pacientes: { $addToSet: "$paciente.nombre" }
}}])
  

//84. Muestra las visitas que se realizaron entre dos fechas específicas.

db.Visita_Medica.find({
  fecha: {
    $gte: ISODate("2024-01-01"),
    $lte: ISODate("2024-12-31")
}})
   

//85. Muestra los diagnósticos y sus resultados clínicos asociados.

db.Diagnostico.aggregate([
  {$lookup: {
      from: "Diagnostico_Tratamiento",
      localField: "_id",
      foreignField: "diagnostico_id",
      as: "relacion"
    }},
  { $unwind: "$relacion" },
  {$lookup: {
      from: "Resultado",
      localField: "relacion.tratamiento_id",
      foreignField: "tratamiento_id",
      as: "resultados"
    }},
  { $unwind: "$resultados" },
  {$project: {
      _id: 0,
      diagnostico: "$descripcion",
      resultado: "$resultados.descripcion"
}}])
   

//86. Muestra el salario promedio, mínimo y máximo por especialidad médica.

db.MedicosYPersonal.aggregate([
  {$lookup: {
      from: "Especialidad",
      localField: "especialidad_id",
      foreignField: "_id",
      as: "especialidad"
    }},
  { $unwind: "$especialidad" },
  {$group: {
      _id: "$especialidad.nombre",
      salario_promedio: { $avg: "$salario" },
      salario_minimo: { $min: "$salario" },
      salario_maximo: { $max: "$salario" }
}}])
   

//87. Muestra los medicamentos más usados por pacientes con diagnóstico "diabetes".

db.Diagnostico.aggregate([
  { $match: { descripcion: /diabetes/i } },
  {$lookup: {
      from: "Diagnostico_Tratamiento",
      localField: "_id",
      foreignField: "diagnostico_id",
      as: "relacion"
    }},
  { $unwind: "$relacion" },
  {$lookup: {
      from: "Tratamiento_Medicamento",
      localField: "relacion.tratamiento_id",
      foreignField: "tratamiento_id",
      as: "medicamentos"
    }},
  { $unwind: "$medicamentos" },
  {$lookup: {
      from: "Medicamento",
      localField: "medicamentos.medicamento_id",
      foreignField: "_id",
      as: "medicamento"
    }},
  { $unwind: "$medicamento" },
  {$group: {
      _id: "$medicamento.nombre",
      total_usos: { $sum: 1 }
    }},
  { $sort: { total_usos: -1 } }
])
   

//88. Muestra el crecimiento mensual de visitas durante el último año.

db.Visita_Medica.aggregate([
  {$match: {
      fecha: {
        $gte: ISODate("2024-01-01"),
        $lte: ISODate("2024-12-31")
      }}},
  {$group: {
      _id: { $month: "$fecha" },
      total_visitas: { $sum: 1 }
    }},
  { $sort: { "_id": 1 } }
])
   

//89. Muestra qué pacientes han recibido más de cero tratamientos distintos.

db.Historial_Medico.aggregate([
  {$lookup: {
      from: "Diagnostico_Tratamiento",
      localField: "diagnostico_id",
      foreignField: "diagnostico_id",
      as: "tratamientos"
    }},
  { $unwind: "$tratamientos" },
  {$group: {
      _id: "$paciente_id",
      tratamientos_diferentes: { $addToSet: "$tratamientos.tratamiento_id" }
    }},
  {$project: {
      _id:0,
      paciente_id: "$_id",
      cantidad_tratamientos: { $size: "$tratamientos_diferentes" }
    }},
  { $match: { cantidad_tratamientos: { $gt: 0 } } }
])
   

//90. Agrupa el personal por rol y muestra cuántos hay por cada uno.

db.MedicosYPersonal.aggregate([
  {$addFields: {
      rol_codigo: { $substr: ["$numero_colegiatura", 0, 3] }
    }},
  {$group: {
      _id: "$rol_codigo",
      total_personal: { $sum: 1 }
    }},
  {$project: {
      _id: 0,
      rol: {
        $switch: {
          branches: [
            { case: { $eq: ["$_id", "001"] }, then: "Director General" },
            { case: { $eq: ["$_id", "002"] }, then: "Médico Especialista" },
            { case: { $eq: ["$_id", "003"] }, then: "Enfermero/a" },
            { case: { $eq: ["$_id", "004"] }, then: "Personal Administrativo" },
            { case: { $eq: ["$_id", "005"] }, then: "Personal de Mantenimiento" }
          ],
          default: "Otro"
        }},
      total_personal: 1
    }},
  { $sort: { total_personal: -1 } }
])

//91. Muestra qué áreas médicas tienen más tratamientos asociados.

db.Tratamiento_Area.aggregate([
  {$lookup: {
      from: "Area_Especializada",
      localField: "area_id",
      foreignField: "_id",
      as: "area"
    }},
  { $unwind: "$area" },
  {$group: {
      _id: "$area.nombre",
      total_tratamientos: { $sum: 1 }
    }},{ $sort: { total_tratamientos: -1 } }
])
   

//92. Muestra cuántos tratamientos hay por tipo de enfermedad.

db.Tratamiento.aggregate([
  {$lookup: {
      from: "Tipo_Tratamiento",
      localField: "tipo_tratamiento_id",
      foreignField: "_id",
      as: "tipo"
    }},
  { $unwind: "$tipo" },
  {$group: {
      _id: "$tipo.nombre",
      total_tratamientos: { $sum: 1 }
    }}
])
  

//93. Lista los medicamentos que han sido usados en más de un hospital.

db.Tratamiento_Medicamento.aggregate([
  {$lookup: {
      from: "Diagnostico_Tratamiento",
      localField: "tratamiento_id",
      foreignField: "tratamiento_id",
      as: "dt"
    }},
  { $unwind: "$dt" },
  {$lookup: {
      from: "Historial_Medico",
      localField: "dt.diagnostico_id",
      foreignField: "diagnostico_id",
      as: "historial"
    }},
  { $unwind: "$historial" },
  {$lookup: {
      from: "Paciente",
      localField: "historial.paciente_id",
      foreignField: "_id",
      as: "paciente"
    }},
  { $unwind: "$paciente" },
  {$group: {
      _id: "$medicamento_id",
      hospitales: { $addToSet: "$paciente.hospital_id" }
    }},
  {$match: {
      "hospitales.1": { $exists: true }
    }},
  {$lookup: {
      from: "Medicamento",
      localField: "_id",
      foreignField: "_id",
      as: "medicamento"
    }},
  { $unwind: "$medicamento" },
  {$project: {
      _id: 0,
      medicamento: "$medicamento.nombre",
      hospitales_usados: { $size: "$hospitales" }
}}])
   

//94. Muestra el costo total de tratamientos agrupado por hospital.

db.Paciente.aggregate([
  {$lookup: {
      from: "Historial_Medico",
      localField: "_id",
      foreignField: "paciente_id",
      as: "historial"
    }},
  { $unwind: "$historial" },
  {$lookup: {
      from: "Diagnostico_Tratamiento",
      localField: "historial.diagnostico_id",
      foreignField: "diagnostico_id",
      as: "dt"
    }},
  { $unwind: "$dt" },
  {$lookup: {
      from: "Tratamiento",
      localField: "dt.tratamiento_id",
      foreignField: "_id",
      as: "tratamiento"
    }},
  { $unwind: "$tratamiento" },
  {$lookup: {
      from: "Tipo_Tratamiento",
      localField: "tratamiento.tipo_tratamiento_id",
      foreignField: "_id",
      as: "tipo"
    }},
  { $unwind: "$tipo" },
  {$group: {
      _id: "$hospital_id",
      costo_total: { $sum: "$tipo.costo_base" }
}}])
    

//95. Muestra cuáles tratamientos han tenido los mejores resultados.

db.Resultado.aggregate([
  {$lookup: {
      from: "Tratamiento",
      localField: "tratamiento_id",
      foreignField: "_id",
      as: "tratamiento"
    }},
  { $unwind: "$tratamiento" },
  {$group: {
      _id: "$tratamiento.nombre",
      total_resultados: { $sum: 1 }
    }},
  { $sort: { total_resultados: -1 } }
])
  

//96. Muestra los medicamentos que tienen menos de 100 unidades en inventario y están ubicados en el piso 1.

db.Inventario.aggregate([
  {$match: {
      disponibilidad: { $lt: 300 }
    }},
  {$lookup: {
      from: "Ubicacion",
      localField: "ubicacion_id",
      foreignField: "_id",
      as: "ubicacion"
    }},
  { $unwind: "$ubicacion" },
  {$match: {
      "ubicacion.piso": "1"
    }},
  {$lookup: {
      from: "Medicamento",
      localField: "medicamento_id",
      foreignField: "_id",
      as: "medicamento"
    }},
  { $unwind: "$medicamento" },
  {$project: {
      _id: 0,
      medicamento: "$medicamento.nombre",
      disponibilidad: 1,
      piso: "$ubicacion.piso",
      estante: "$ubicacion.estante"
    }},
  { $sort: { disponibilidad: 1 } }
])
    

//97. Muestra el porcentaje de visitas que tienen diagnóstico registrado.

db.Visita_Medica.aggregate([
  {$lookup: {
      from: "Visita_Diagnostico",
      localField: "_id",
      foreignField: "visita_id",
      as: "diagnostico"
    }},
  {$group: {
      _id: null,
      total_visitas: { $sum: 1 },
      con_diagnostico: {
        $sum: {
          $cond: [{ $gt: [{ $size: "$diagnostico" }, 0] }, 1, 0]
}}}},
  {$project: {
      _id: 0,
      porcentaje: {
        $multiply: [
          { $divide: ["$con_diagnostico", "$total_visitas"] },
          100
]}}}])
   

//98. Muestra las visitas que no tienen diagnóstico asociado.

db.Visita_Medica.aggregate([
  {$lookup: {
      from: "Visita_Diagnostico",
      localField: "_id",
      foreignField: "visita_id",
      as: "diagnostico"
    }},
  {$match: { "diagnostico": { $eq: [] } }}
])
   

//99. Muestra los medicamentos que no han sido usados en ningún tratamiento.

db.Medicamento.aggregate([
  {$lookup: {
      from: "Tratamiento_Medicamento",
      localField: "_id",
      foreignField: "medicamento_id",
      as: "usos"
    }},
  { $match: { usos: { $eq: [] } } },
  { $project: { _id: 0, nombre: 1 } }
])
   

//100. Muestra el número total de medicamentos disponibles por tipo de medicamento.

db.Inventario.aggregate([
  {$lookup: {
      from: "Medicamento",
      localField: "medicamento_id",
      foreignField: "_id",
      as: "medicamento"
    }},
  { $unwind: "$medicamento" },
  {$group: {
      _id: "$medicamento.tipo_medicamento_id",
      total_disponibilidad: { $sum: "$disponibilidad" }
    }},
  {$lookup: {
      from: "Tipo_Medicamento",
      localField: "_id",
      foreignField: "_id",
      as: "tipo"
    }},
  { $unwind: "$tipo" },
  {$project: {
      _id: 0,
      tipo_medicamento: "$tipo.nombre",
      total_disponibilidad: 1
    }},
  { $sort: { total_disponibilidad: -1 } }
])

