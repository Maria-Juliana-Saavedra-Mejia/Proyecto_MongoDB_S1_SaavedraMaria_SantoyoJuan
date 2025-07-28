1. Estado actual de hospitales

    1. Listar todos los hospitales con su nombre.
    2. Contar cuántos médicos hay por hospital.
    3. Contar cuántas enfermeras hay por hospital (*requiere distinguir roles*).
    4. Mostrar hospitales con más de 10 áreas especializadas.
    5. Ver qué director está a cargo de cada hospital.
    6. Obtener nombres de médicos por hospital.
    7. Obtener áreas especializadas de cada hospital.
    8. Listar médicos por especialidad en un hospital.
    9. Listar hospitales ordenados por cantidad de personal.
    10. Buscar hospitales que tengan cierta especialidad médica (`$regex`).

    **Agregaciones avanzadas:**

    11. `$lookup` entre `Hospital` y `MedicosYPersonal` para ver total de personal por hospital.
    12. `$lookup` entre `Hospital` y `Hospital_Area` y `Area_Especializada` para listar áreas por hospital.
    13. `$group` para contar médicos por especialidad por hospital.
    14. `$project` para mostrar hospital, cantidad de personal y áreas en una sola vista.
    15. `$unwind` + `$group` para contar personal por rol y hospital.


2. Inventarios de medicamentos por tipo y disponibilidad

    16. Listar todos los medicamentos disponibles.
    17. Ver cantidad de unidades disponibles por medicamento.
    18. Ver medicamentos con disponibilidad menor a 10.
    19. Buscar medicamentos por nombre (`$regex`).
    20. Ver fecha de ingreso más reciente por medicamento.
    21. Listar medicamentos por tipo.
    22. Ver medicamentos fabricados por un fabricante específico.
    23. Listar todos los tipos de medicamentos.
    24. Buscar ubicaciones con más de 100 unidades en inventario.
    25. Mostrar inventario ordenado por fecha de ingreso.

    **Agregaciones avanzadas:**

    26. `$lookup` entre `Inventario` y `Medicamento` para ver nombre y disponibilidad.
    27. `$group` por `tipo_medicamento_id` para totalizar disponibilidad.
    28. `$lookup` + `$project` para ver fabricante, tipo y disponibilidad.
    29. `$unwind` + `$group` para contar medicamentos por ubicación.
    30. `$group` para sumar disponibilidad por medicamento.


3. Historiales clínicos de pacientes por diagnóstico y tratamientos realizados

    31. Listar todos los historiales por paciente.
    32. Buscar historiales por diagnóstico (`$regex`).
    33. Ver tratamientos aplicados a un paciente.
    34. Ver fecha del último historial registrado.
    35. Mostrar diagnóstico más frecuente por paciente.
    36. Listar pacientes con más de 3 diagnósticos distintos.
    37. Ver pacientes diagnosticados en los últimos 30 días.
    38. Listar tratamientos asociados a un diagnóstico.
    39. Mostrar descripciones de diagnósticos por historial.
    40. Ver tratamientos por tipo (quimioterapia, cirugía, etc).

    **Agregaciones avanzadas:**

    41. `$lookup` entre `Historial_Medico` y `Diagnostico`.
    42. `$lookup` entre `Historial_Medico` → `Diagnostico_Tratamiento` → `Tratamiento`.
    43. `$group` por paciente para contar diagnósticos únicos.
    44. `$project` para mostrar nombre del tratamiento, fecha y diagnóstico.
    45. `$unwind` historiales para detectar repeticiones de diagnóstico.


4. Actividades del personal según área médica y rol

    46. Listar todo el personal médico con especialidad.
    47. Buscar médicos con salario mayor a \$5,000.
    48. Ver personal asignado a cada área médica.
    49. Ver cuántos especialistas hay por área.
    50. Buscar personal por nombre o número de colegiatura (`$regex`).
    51. Ordenar médicos por salario descendente.
    52. Listar roles por especialidad (si hay rol en los datos).
    53. Ver médicos que trabajan en varias áreas (*requiere estructura adicional*).
    54. Buscar personal en hospitales específicos.
    55. Ver especialidades con más personal asignado.

    **Agregaciones avanzadas:**

    56. `$lookup` entre `MedicosYPersonal` y `Especialidad` para obtener nombre de especialidad.
    57. `$lookup` con `Hospital` para ver en qué hospital trabaja cada médico.
    58. `$group` por hospital y especialidad para contar médicos.
    59. `$project` con salario, especialidad y hospital.
    60. `$group` para calcular salario promedio por especialidad.


5. Gestión de visitas médicas y estadísticas de enfermedades comunes

    61. Listar todas las visitas médicas con fecha.
    62. Ver pacientes que han recibido más de 5 visitas.
    63. Mostrar visitas por día.
    64. Buscar visitas realizadas por un médico específico.
    65. Ver horarios más frecuentes de visitas.
    66. Diagnósticos más comunes en visitas.
    67. Enfermedades más frecuentes por hospital.
    68. Ver pacientes atendidos por un médico específico.
    69. Ver visitas que tienen un diagnóstico específico.
    70. Ver visitas por rango de fechas.

    **Agregaciones avanzadas:**

    71. `$lookup` entre `Visita_Medica` y `Paciente`.
    72. `$lookup` entre `Visita_Medica` y `Visita_Diagnostico` → `Diagnostico`.
    73. `$group` por `diagnostico_id` para contar frecuencia de enfermedades.
    74. `$project` fecha, paciente y diagnóstico para resumen diario.
    75. `$unwind` + `$group` por día para visitas promedio.

    
6.  Consultas combinadas

    76. Pacientes sin historial médico registrado.
    77. Médicos sin pacientes asignados.
    78. Medicamentos sin inventario actual.
    79. Diagnósticos sin tratamientos asignados.
    80. Tratamientos sin resultados asociados.
    81. Diagnósticos que usan más de un tratamiento.
    82. Tratamientos aplicados en múltiples áreas.
    83. Total invertido por tipo de tratamiento (`costo_base` \* cantidad).
    84. Ver pacientes por ciudad.
    85. Buscar pacientes por correo (`$regex`).

    **Agregaciones avanzadas:**

    86. `$lookup` entre `Paciente` y `Direccion` para ver ciudad.
    87. `$lookup` entre `Diagnostico_Tratamiento` y `Tratamiento`.
    88. `$group` para contar tratamientos por tipo.
    89. `$project` para mostrar nombre del tratamiento, diagnóstico y área.
    90. `$lookup` en cascada para ver tratamientos y medicamentos usados por paciente.


7. Consultas combinadas

    91. Top 5 diagnósticos más frecuentes.
    92. Hospital con más visitas registradas.
    93. Médicos con mayor número de pacientes.
    94. Costo promedio por tipo de tratamiento.
    95. Medicamentos más usados por tipo de enfermedad.
    96. Pacientes con múltiples seguros médicos (*si se modela más adelante*).
    97. Diagnósticos frecuentes por especialidad médica.
    98. Promedio de visitas por paciente.
    99. Porcentaje de ocupación de medicamentos (inventario total vs usado).
    100. Gráfico de crecimiento de visitas por mes (se puede exportar con datos).


