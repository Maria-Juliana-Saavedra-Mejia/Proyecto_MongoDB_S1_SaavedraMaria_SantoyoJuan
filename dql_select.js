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



//33. Relaciona cada hospital con su director (usando su número de colegiatura).


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


//35. Muestra los nombres de las áreas de especialidad de un hospital.

    

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

    

//40. Muestra los pacientes con su ciudad de residencia.

    

//41. Consulta todas las visitas médicas realizadas por un médico específico.

    

//42. Cuenta cuántas visitas ha tenido un paciente en total.

    

//43. Muestra las visitas con los datos del paciente asociado.

    

//44. Muestra las visitas junto con sus diagnósticos.

    

//45. Agrupa las visitas por día y cuenta cuántas hubo cada día.

    

//46. Muestra cuál es el diagnóstico más frecuente en la base de datos.

    

//47. Lista los pacientes que han recibido más de tres diagnósticos distintos.

    

//48. Muestra cuántos médicos hay por especialidad.

    

//49. Lista los médicos que ganan más de $//5,000.

    

//50. Muestra los medicamentos que no tienen disponibilidad.

    

//51. Muestra el salario promedio por especialidad médica.

    

//52. Cuenta cuántos medicamentos hay por tipo.

    

//53. Muestra el nombre del medicamento y su fabricante.

    

//54. Muestra los tratamientos con los medicamentos que usan.

    

//55. Muestra el costo total por tipo de tratamiento.

    

//56. Muestra los hospitales con más de 20 empleados.

    

//57. Muestra los diagnósticos más comunes y cuántas veces se repiten.

    

//58. Muestra las visitas agrupadas por paciente y cuántas tiene cada uno.

    

//59. Relaciona diagnósticos con tratamientos y medicamentos.

    

//60. Muestra cuántas veces se ha usado cada medicamento en tratamientos.

    

//61. Agrupa pacientes por ciudad y cuenta cuántos hay por cada una.

    

//62. Muestra los tratamientos con más de tres medicamentos asociados.

    

//63. Muestra el historial clínico completo de un paciente incluyendo diagnóstico y tratamiento.

    

//64. Agrupa tratamientos por tipo y cuenta cuántos hay de cada tipo.

    

//65. Muestra los resultados agrupados por tratamiento.

    

//66. Muestra cuántos pacientes tiene cada hospital.

    

//67. Relaciona cada tratamiento con su tipo y costo.

    

//68. Muestra los diagnósticos más comunes por especialidad médica.

    

//69. Muestra el número total de visitas por médico.

    

//70. Muestra el promedio de visitas por paciente.

    

//71. Muestra las enfermedades más comunes en el hospital //1.

    

//72. Muestra los medicamentos más usados en tratamientos exitosos.

    

//73. Muestra el nombre de cada tratamiento y los diagnósticos en los que se ha aplicado.

    

//74. Agrupa pacientes por seguro médico y cuenta cuántos hay.

    

//75. Muestra los tratamientos realizados en cada área médica.

    

//76. Calcula el total de unidades de inventario por tipo de medicamento.

    

//77. Agrupa diagnósticos por mes de registro y cuenta cuántos hubo cada mes.

    

//78. Muestra la disponibilidad de medicamentos por ubicación.

    

//79. Lista las visitas ordenadas por fecha más reciente.

    

//80. Muestra los diagnósticos que tienen más de un tratamiento asociado.

    

//81. Agrupa medicamentos por fabricante y suma su disponibilidad total.

    

//82. Muestra cuántos tratamientos activos hay por hospital.

    

//83. Relaciona cada tratamiento con los pacientes que lo han recibido.

    

//84. Muestra las visitas que se realizaron entre dos fechas específicas.

    

//85. Muestra los diagnósticos y sus resultados clínicos asociados.

    

//86. Muestra el salario promedio, mínimo y máximo por especialidad médica.

    

//87. Muestra los medicamentos más usados por pacientes con diagnóstico "diabetes".

    

//88. Muestra el crecimiento mensual de visitas durante el último año.

    

//89. Muestra qué pacientes han recibido más de cinco tratamientos distintos.

    

//90. Agrupa el personal por rol y muestra cuántos hay por cada uno.

    

//91. Muestra qué áreas médicas tienen más tratamientos asociados.

    

//92. Muestra cuántos tratamientos hay por tipo de enfermedad.

    

//93. Lista los medicamentos que han sido usados en más de un hospital.

    

//94. Muestra el costo total de tratamientos agrupado por hospital.

    

//95. Muestra cuáles tratamientos han tenido los mejores resultados.

    

//96. Agrupa pacientes por grupos de edad (si existiera ese campo).

    

//97. Muestra el porcentaje de visitas que tienen diagnóstico registrado.

    

//98. Muestra las visitas que no tienen diagnóstico asociado.

    

//99. Muestra los medicamentos que no han sido usados en ningún tratamiento.

    

//100. Muestra un resumen total de hospitales, médicos, pacientes y visitas.

