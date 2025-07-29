// 1. Hospital
db.Hospital.insertMany([
  {
    _id: 1,
    nombre: "Hospital Universitario de Santander - HUS",
    director_id: 101
  },
  {
    _id: 2,
    nombre: "Fundación Cardiovascular de Colombia - FCV",
    director_id: 102
  },
  {
    _id: 3,
    nombre: "Hospital Internacional de Colombia - HIC",
    director_id: 103
  },
  {
    _id: 4,
    nombre: "Hospital Los Comuneros",
    director_id: 104
  },
  {
    _id: 5,
    nombre: "Hospital Local del Norte",
    director_id: 105
  }
]);

// 2. Area_Especializada
db.Area_Especializada.insertMany([
  // Áreas del Hospital Universitario de Santander - HUS
  {
    _id: 201,
    nombre: "Cirugía General",
    descripcion: "Especialidad quirúrgica que aborda procedimientos del abdomen, sistema digestivo, endocrino y otros sistemas corporales mediante técnicas convencionales y laparoscópicas."
  },
  {
    _id: 202,
    nombre: "Medicina Interna",
    descripcion: "Especialidad médica dedicada al diagnóstico, tratamiento y prevención de enfermedades de adultos, con enfoque integral en patologías sistémicas complejas."
  },
  {
    _id: 203,
    nombre: "Neurología",
    descripcion: "Especialidad médica que estudia y trata las enfermedades del sistema nervioso central, periférico y muscular, incluyendo trastornos cerebrovasculares y neurodegenerativos."
  },
  {
    _id: 204,
    nombre: "Ortopedia y Traumatología",
    descripcion: "Especialidad médico-quirúrgica dedicada al diagnóstico y tratamiento de lesiones del sistema musculoesquelético, incluyendo fracturas, luxaciones y patologías articulares."
  },
  {
    _id: 205,
    nombre: "Endocrinología",
    descripcion: "Especialidad médica que diagnostica y trata trastornos del sistema endocrino, incluyendo diabetes, enfermedades tiroideas y alteraciones hormonales."
  },
  {
    _id: 206,
    nombre: "Radiología",
    descripcion: "Especialidad médica que utiliza técnicas de imagen como rayos X, TAC, resonancia magnética y ecografía para el diagnóstico de enfermedades."
  },
  {
    _id: 207,
    nombre: "Cardiología",
    descripcion: "Especialidad médica enfocada en el diagnóstico y tratamiento de enfermedades cardiovasculares, incluyendo cardiopatías isquémicas, arritmias e insuficiencia cardíaca."
  },
  {
    _id: 208,
    nombre: "Ginecología y Obstetricia",
    descripcion: "Especialidad médico-quirúrgica que abarca la salud reproductiva femenina, embarazo, parto y enfermedades del sistema reproductor femenino."
  },
  {
    _id: 209,
    nombre: "Pediatría",
    descripcion: "Especialidad médica enfocada en la atención integral de la salud de niños, desde el nacimiento hasta la adolescencia, incluyendo crecimiento y desarrollo."
  },
  {
    _id: 210,
    nombre: "Anestesiología",
    descripcion: "Especialidad médica que se encarga del manejo perioperatorio del paciente, incluyendo anestesia general, regional y cuidados intensivos."
  },

  // Áreas de la Fundación Cardiovascular de Colombia - FCV
  {
    _id: 220,
    nombre: "Cardiología Intervencionista",
    descripcion: "Subespecialidad de cardiología que utiliza técnicas mínimamente invasivas para el tratamiento de enfermedades cardiovasculares mediante cateterismo cardíaco."
  },
  {
    _id: 221,
    nombre: "Cirugía Cardiovascular",
    descripcion: "Especialidad quirúrgica de alta complejidad dedicada a intervenciones del corazón y grandes vasos, incluyendo bypass coronario, reemplazo valvular y cirugía de aorta."
  },
  {
    _id: 222,
    nombre: "Electrofisiología Cardíaca",
    descripcion: "Subespecialidad que se encarga del estudio y tratamiento de arritmias cardíacas mediante técnicas de mapeo y ablación por radiofrecuencia."
  },
  {
    _id: 223,
    nombre: "Hemodinamia",
    descripcion: "Área especializada en el estudio de la función circulatoria mediante técnicas invasivas y no invasivas para el diagnóstico de patologías cardiovasculares."
  },
  {
    _id: 224,
    nombre: "Cirugía Vascular y Angiología",
    descripcion: "Especialidad que trata las enfermedades del sistema vascular periférico, incluyendo arterias, venas y sistema linfático."
  },
  {
    _id: 225,
    nombre: "Oncología",
    descripcion: "Especialidad médica dedicada al diagnóstico, tratamiento y seguimiento integral de pacientes con cáncer mediante quimioterapia, radioterapia y terapias dirigidas."
  },
  {
    _id: 226,
    nombre: "Neurocirugía",
    descripcion: "Especialidad quirúrgica que trata patologías del sistema nervioso central, incluyendo tumores cerebrales, aneurismas y traumatismo craneoencefálico."
  },
  {
    _id: 227,
    nombre: "Nefrología",
    descripcion: "Especialidad médica que se encarga del diagnóstico y tratamiento de enfermedades renales, incluyendo insuficiencia renal y diálisis."
  },
  {
    _id: 228,
    nombre: "Neumología",
    descripcion: "Especialidad médica enfocada en el diagnóstico y tratamiento de enfermedades del sistema respiratorio, incluyendo asma, EPOC y enfermedades intersticiales."
  },
  {
    _id: 229,
    nombre: "Gastroenterología",
    descripcion: "Especialidad médica que estudia y trata las enfermedades del aparato digestivo, incluyendo esófago, estómago, intestinos, hígado y páncreas."
  },

  // Áreas del Hospital Internacional de Colombia - HIC
  {
    _id: 240,
    nombre: "Urología",
    descripcion: "Especialidad médico-quirúrgica dedicada al diagnóstico y tratamiento de enfermedades del sistema genitourinario masculino y urinario femenino."
  },
  {
    _id: 241,
    nombre: "Oftalmología",
    descripcion: "Especialidad médico-quirúrgica que se encarga del diagnóstico y tratamiento de enfermedades de los ojos y del sistema visual."
  },
  {
    _id: 242,
    nombre: "Otorrinolaringología",
    descripcion: "Especialidad médico-quirúrgica que trata enfermedades del oído, nariz, garganta y estructuras relacionadas de cabeza y cuello."
  },
  {
    _id: 243,
    nombre: "Dermatología",
    descripcion: "Especialidad médica que se encarga del diagnóstico y tratamiento de enfermedades de la piel, cabello, uñas y mucosas."
  },
  {
    _id: 244,
    nombre: "Psiquiatría",
    descripcion: "Especialidad médica que se encarga del diagnóstico, tratamiento y prevención de trastornos mentales y del comportamiento."
  },
  {
    _id: 245,
    nombre: "Medicina Nuclear",
    descripcion: "Especialidad que utiliza radioisótopos para el diagnóstico y tratamiento de diversas enfermedades, especialmente oncológicas y cardíacas."
  },
  {
    _id: 246,
    nombre: "Patología",
    descripcion: "Especialidad médica que estudia las causas, desarrollo y consecuencias de las enfermedades mediante el análisis de tejidos y fluidos corporales."
  },

  // Áreas del Hospital Los Comuneros
  {
    _id: 250,
    nombre: "Radiología e Imágenes Diagnósticas",
    descripcion: "Especialidad médica que utiliza técnicas de imagen como rayos X, TAC, resonancia magnética y ecografía para el diagnóstico de enfermedades."
  },
  {
    _id: 251,
    nombre: "Medicina Interna - Los Comuneros",
    descripcion: "Especialidad médica integral para el manejo de adultos con patologías complejas y multisistémicas en el ámbito hospitalario y ambulatorio."
  },
  {
    _id: 252,
    nombre: "Cirugía Plástica y Reconstructiva",
    descripcion: "Especialidad quirúrgica que se encarga de la reconstrucción de defectos congénitos o adquiridos y procedimientos estéticos."
  },
  {
    _id: 253,
    nombre: "Medicina Física y Rehabilitación",
    descripcion: "Especialidad médica que se encarga de la prevención, diagnóstico y tratamiento de la discapacidad mediante técnicas de rehabilitación."
  },
  {
    _id: 254,
    nombre: "Hematología",
    descripcion: "Especialidad médica que estudia y trata las enfermedades de la sangre y órganos hematopoyéticos como médula ósea, ganglios linfáticos y bazo."
  },

  // Áreas del Hospital Local del Norte
  {
    _id: 260,
    nombre: "Medicina General",
    descripcion: "Atención médica primaria integral que aborda problemas de salud comunes y deriva casos complejos a especialistas cuando es necesario."
  },
  {
    _id: 261,
    nombre: "Urgencias",
    descripcion: "Servicio médico de atención inmediata para situaciones de emergencia y urgencia médica que requieren intervención rápida y oportuna."
  },
  {
    _id: 262,
    nombre: "Medicina Familiar",
    descripcion: "Especialidad médica que proporciona cuidados continuos e integrales al individuo y la familia, combinando ciencias biológicas, clínicas y sociales."
  },
  {
    _id: 263,
    nombre: "Consulta Externa",
    descripcion: "Servicio de atención médica ambulatoria para seguimiento y control de patologías crónicas y consultas especializadas básicas."
  },

  // Áreas adicionales comunes en hospitales de Bucaramanga
  {
    _id: 270,
    nombre: "Unidad de Cuidados Intensivos (UCI)",
    descripcion: "Área especializada en el cuidado de pacientes críticos que requieren monitoreo continuo y soporte vital avanzado."
  },
  {
    _id: 271,
    nombre: "Neonatología",
    descripcion: "Subespecialidad de pediatría que se encarga del cuidado médico de recién nacidos, especialmente prematuros o con problemas de salud."
  },
  {
    _id: 272,
    nombre: "Psicología Clínica",
    descripcion: "Área que brinda atención psicológica para el diagnóstico y tratamiento de trastornos emocionales y del comportamiento."
  },
  {
    _id: 273,
    nombre: "Nutrición y Dietética",
    descripcion: "Especialidad que se encarga de la evaluación nutricional y diseño de planes alimentarios terapéuticos para pacientes hospitalizados y ambulatorios."
  },
  {
    _id: 274,
    nombre: "Trabajo Social",
    descripcion: "Área que brinda apoyo psicosocial a pacientes y familias, facilitando el acceso a servicios de salud y recursos comunitarios."
  },
  {
    _id: 275,
    nombre: "Laboratorio Clínico",
    descripcion: "Servicio de apoyo diagnóstico que realiza análisis de muestras biológicas para el diagnóstico, seguimiento y control de enfermedades."
  }
]);

// 3. Especialidad
db.Especialidad.insertMany([
  // Especialidades Quirúrgicas
  { _id: 1, nombre: "Cirugía General" },
  { _id: 2, nombre: "Cirugía Cardiovascular" },
  { _id: 3, nombre: "Cirugía Vascular y Angiología" },
  { _id: 4, nombre: "Neurocirugía" },
  { _id: 5, nombre: "Ortopedia y Traumatología" },
  { _id: 6, nombre: "Cirugía Plástica y Reconstructiva" },
  { _id: 7, nombre: "Urología" },
  { _id: 8, nombre: "Oftalmología" },
  { _id: 9, nombre: "Otorrinolaringología" },
  { _id: 10, nombre: "Ginecología y Obstetricia" },
  { _id: 11, nombre: "Anestesiología" },

  // Especialidades Médicas
  { _id: 20, nombre: "Medicina Interna" },
  { _id: 21, nombre: "Cardiología" },
  { _id: 22, nombre: "Cardiología Intervencionista" },
  { _id: 23, nombre: "Electrofisiología Cardíaca" },
  { _id: 24, nombre: "Neurología" },
  { _id: 25, nombre: "Endocrinología" },
  { _id: 26, nombre: "Gastroenterología" },
  { _id: 27, nombre: "Neumología" },
  { _id: 28, nombre: "Nefrología" },
  { _id: 29, nombre: "Hematología" },
  { _id: 30, nombre: "Oncología" },
  { _id: 31, nombre: "Dermatología" },
  { _id: 32, nombre: "Psiquiatría" },
  { _id: 33, nombre: "Medicina Nuclear" },
  { _id: 34, nombre: "Patología" },

  // Especialidades Pediátricas
  { _id: 40, nombre: "Pediatría" },
  { _id: 41, nombre: "Neonatología" },

  // Especialidades de Apoyo Diagnóstico
  { _id: 50, nombre: "Radiología e Imágenes Diagnósticas" },
  { _id: 51, nombre: "Laboratorio Clínico" },
  { _id: 52, nombre: "Hemodinamia" },

  // Especialidades de Rehabilitación y Apoyo
  { _id: 60, nombre: "Medicina Física y Rehabilitación" },
  { _id: 61, nombre: "Psicología Clínica" },
  { _id: 62, nombre: "Nutrición y Dietética" },
  { _id: 63, nombre: "Trabajo Social" },

  // Medicina General y Atención Primaria
  { _id: 70, nombre: "Medicina General" },
  { _id: 71, nombre: "Medicina Familiar" },
  { _id: 72, nombre: "Medicina de Urgencias" },

  // Unidades Especializadas
  { _id: 80, nombre: "Cuidados Intensivos" },
  { _id: 81, nombre: "Consulta Externa" }
]);

// 4. Seguros_Medicos
db.Seguros_Medicos.insertMany([
  // ========================================
  // EPS (Entidades Promotoras de Salud)
  // ========================================
  
  // EPS Contributivo
  { _id: 1, nombre: "EPS Sanitas" },
  { _id: 2, nombre: "Nueva EPS" },
  { _id: 3, nombre: "Compensar EPS" },
  { _id: 4, nombre: "EPS Sura" },
  { _id: 5, nombre: "Salud Total EPS" },
  { _id: 6, nombre: "Famisanar EPS" },
  { _id: 7, nombre: "EPS Coomeva" },
  { _id: 8, nombre: "Coosalud EPS" },
  { _id: 9, nombre: "Medimás EPS" },
  { _id: 10, nombre: "Golden Group EPS" },

  // EPS Subsidiado
  { _id: 11, nombre: "Mutual SER EPS" },
  { _id: 12, nombre: "Comparta EPS" },
  { _id: 13, nombre: "Capital Salud EPS-S" },
  { _id: 14, nombre: "Ecoopsos EPS-S" },
  { _id: 15, nombre: "Asmet Salud EPS" },

  // ========================================
  // RÉGIMEN ESPECIAL
  // ========================================
  
  { _id: 20, nombre: "Magisterio (Fomag)" },
  { _id: 21, nombre: "Policía Nacional" },
  { _id: 22, nombre: "Fuerzas Militares" },
  { _id: 23, nombre: "Ecopetrol" },
  { _id: 24, nombre: "Universidad Nacional" },

  // ========================================
  // MEDICINA PREPAGADA
  // ========================================
  
  { _id: 30, nombre: "Colsanitas Medicina Prepagada" },
  { _id: 31, nombre: "Coomeva Medicina Prepagada" },
  { _id: 32, nombre: "Sura Medicina Prepagada" },
  { _id: 33, nombre: "Compensar Medicina Prepagada" },
  { _id: 34, nombre: "Cruz Blanca EPS" },
  { _id: 35, nombre: "Medisanitas Internacional" },

  // ========================================
  // ASEGURADORAS DE RIESGOS LABORALES (ARL)
  // ========================================
  
  { _id: 40, nombre: "ARL Sura" },
  { _id: 41, nombre: "Positiva ARL" },
  { _id: 42, nombre: "Colmena ARL" },
  { _id: 43, nombre: "Mapfre ARL" },
  { _id: 44, nombre: "Liberty ARL" },

  // ========================================
  // CASOS ESPECIALES
  // ========================================
  
  { _id: 50, nombre: "SOAT (Seguro Obligatorio de Accidentes de Tránsito)" },
  { _id: 51, nombre: "Víctimas del Conflicto Armado" },
  { _id: 52, nombre: "Población Migrante (Regularizada)" },
  { _id: 53, nombre: "Particulares (Pago Directo)" },
  { _id: 54, nombre: "Pólizas de Accidentes Personales" },

  // ========================================
  // EPS REGIONALES ESPECÍFICAS DE SANTANDER
  // ========================================
  
  { _id: 60, nombre: "Saludvida EPS" },
  { _id: 61, nombre: "Calisalud EPS" },
  { _id: 62, nombre: "Servicio Occidental de Salud EPS" }
]);

// 5. Direcciones
db.Direccion.insertMany([
  // Direcciones en Bucaramanga - Zona Norte
  { _id: 1001, calle: "Carrera 15 # 45-23", ciudad: "Bucaramanga", codigo_postal: "680001" },
  { _id: 1002, calle: "Calle 56 # 27-18", ciudad: "Bucaramanga", codigo_postal: "680001" },
  { _id: 1003, calle: "Carrera 33 # 52-07", ciudad: "Bucaramanga", codigo_postal: "680002" },
  { _id: 1004, calle: "Calle 48 # 19-15", ciudad: "Bucaramanga", codigo_postal: "680002" },
  { _id: 1005, calle: "Carrera 27 # 59-31", ciudad: "Bucaramanga", codigo_postal: "680003" },
  { _id: 1006, calle: "Calle 61 # 25-42", ciudad: "Bucaramanga", codigo_postal: "680003" },
  { _id: 1007, calle: "Carrera 21 # 54-16", ciudad: "Bucaramanga", codigo_postal: "680003" },
  { _id: 1008, calle: "Calle 57 # 32-09", ciudad: "Bucaramanga", codigo_postal: "680004" },
  { _id: 1009, calle: "Carrera 35 # 49-28", ciudad: "Bucaramanga", codigo_postal: "680004" },
  { _id: 1010, calle: "Calle 51 # 28-35", ciudad: "Bucaramanga", codigo_postal: "680005" },

  // Direcciones en Bucaramanga - Centro
  { _id: 1011, calle: "Carrera 19 # 34-12", ciudad: "Bucaramanga", codigo_postal: "680006" },
  { _id: 1012, calle: "Calle 36 # 16-24", ciudad: "Bucaramanga", codigo_postal: "680006" },
  { _id: 1013, calle: "Carrera 17 # 39-08", ciudad: "Bucaramanga", codigo_postal: "680007" },
  { _id: 1014, calle: "Calle 41 # 22-17", ciudad: "Bucaramanga", codigo_postal: "680007" },
  { _id: 1015, calle: "Carrera 20 # 35-29", ciudad: "Bucaramanga", codigo_postal: "680008" },
  { _id: 1016, calle: "Calle 38 # 18-14", ciudad: "Bucaramanga", codigo_postal: "680008" },
  { _id: 1017, calle: "Carrera 16 # 42-06", ciudad: "Bucaramanga", codigo_postal: "680009" },
  { _id: 1018, calle: "Calle 44 # 21-33", ciudad: "Bucaramanga", codigo_postal: "680009" },
  { _id: 1019, calle: "Carrera 23 # 37-25", ciudad: "Bucaramanga", codigo_postal: "680010" },
  { _id: 1020, calle: "Calle 40 # 19-11", ciudad: "Bucaramanga", codigo_postal: "680010" },

  // Direcciones en Bucaramanga - Sur
  { _id: 1021, calle: "Carrera 29 # 28-19", ciudad: "Bucaramanga", codigo_postal: "680011" },
  { _id: 1022, calle: "Calle 32 # 31-07", ciudad: "Bucaramanga", codigo_postal: "680011" },
  { _id: 1023, calle: "Carrera 26 # 25-13", ciudad: "Bucaramanga", codigo_postal: "680012" },
  { _id: 1024, calle: "Calle 27 # 28-21", ciudad: "Bucaramanga", codigo_postal: "680012" },
  { _id: 1025, calle: "Carrera 32 # 30-15", ciudad: "Bucaramanga", codigo_postal: "680013" },
  { _id: 1026, calle: "Calle 29 # 27-08", ciudad: "Bucaramanga", codigo_postal: "680013" },
  { _id: 1027, calle: "Carrera 24 # 26-34", ciudad: "Bucaramanga", codigo_postal: "680014" },
  { _id: 1028, calle: "Calle 31 # 30-12", ciudad: "Bucaramanga", codigo_postal: "680014" },
  { _id: 1029, calle: "Carrera 28 # 24-18", ciudad: "Bucaramanga", codigo_postal: "680015" },
  { _id: 1030, calle: "Calle 26 # 29-26", ciudad: "Bucaramanga", codigo_postal: "680015" },

  // Direcciones en Bucaramanga - Oriente
  { _id: 1031, calle: "Carrera 37 # 47-14", ciudad: "Bucaramanga", codigo_postal: "680016" },
  { _id: 1032, calle: "Calle 50 # 41-22", ciudad: "Bucaramanga", codigo_postal: "680016" },
  { _id: 1033, calle: "Carrera 43 # 45-09", ciudad: "Bucaramanga", codigo_postal: "680017" },
  { _id: 1034, calle: "Calle 46 # 38-16", ciudad: "Bucaramanga", codigo_postal: "680017" },
  { _id: 1035, calle: "Carrera 39 # 48-28", ciudad: "Bucaramanga", codigo_postal: "680018" },
  { _id: 1036, calle: "Calle 49 # 42-11", ciudad: "Bucaramanga", codigo_postal: "680018" },
  { _id: 1037, calle: "Carrera 41 # 44-17", ciudad: "Bucaramanga", codigo_postal: "680019" },
  { _id: 1038, calle: "Calle 47 # 40-23", ciudad: "Bucaramanga", codigo_postal: "680019" },
  { _id: 1039, calle: "Carrera 36 # 43-05", ciudad: "Bucaramanga", codigo_postal: "680020" },
  { _id: 1040, calle: "Calle 45 # 37-29", ciudad: "Bucaramanga", codigo_postal: "680020" },

  // Direcciones en Floridablanca
  { _id: 1041, calle: "Carrera 7 # 15-18", ciudad: "Floridablanca", codigo_postal: "681001" },
  { _id: 1042, calle: "Calle 12 # 9-24", ciudad: "Floridablanca", codigo_postal: "681001" },
  { _id: 1043, calle: "Carrera 5 # 18-06", ciudad: "Floridablanca", codigo_postal: "681002" },
  { _id: 1044, calle: "Calle 16 # 8-13", ciudad: "Floridablanca", codigo_postal: "681002" },
  { _id: 1045, calle: "Carrera 11 # 14-21", ciudad: "Floridablanca", codigo_postal: "681003" },
  { _id: 1046, calle: "Calle 13 # 6-17", ciudad: "Floridablanca", codigo_postal: "681003" },
  { _id: 1047, calle: "Carrera 9 # 17-09", ciudad: "Floridablanca", codigo_postal: "681004" },
  { _id: 1048, calle: "Calle 19 # 10-25", ciudad: "Floridablanca", codigo_postal: "681004" },
  { _id: 1049, calle: "Carrera 6 # 11-14", ciudad: "Floridablanca", codigo_postal: "681005" },
  { _id: 1050, calle: "Calle 15 # 7-32", ciudad: "Floridablanca", codigo_postal: "681005" },

  // Direcciones en Girón
  { _id: 1051, calle: "Carrera 25 # 28-16", ciudad: "Girón", codigo_postal: "681030" },
  { _id: 1052, calle: "Calle 30 # 23-08", ciudad: "Girón", codigo_postal: "681030" },
  { _id: 1053, calle: "Carrera 27 # 25-12", ciudad: "Girón", codigo_postal: "681031" },
  { _id: 1054, calle: "Calle 26 # 29-19", ciudad: "Girón", codigo_postal: "681031" },
  { _id: 1055, calle: "Carrera 24 # 31-07", ciudad: "Girón", codigo_postal: "681032" },
  { _id: 1056, calle: "Calle 29 # 26-23", ciudad: "Girón", codigo_postal: "681032" },
  { _id: 1057, calle: "Carrera 28 # 27-15", ciudad: "Girón", codigo_postal: "681033" },
  { _id: 1058, calle: "Calle 32 # 25-31", ciudad: "Girón", codigo_postal: "681033" },
  { _id: 1059, calle: "Carrera 26 # 30-04", ciudad: "Girón", codigo_postal: "681034" },
  { _id: 1060, calle: "Calle 28 # 27-20", ciudad: "Girón", codigo_postal: "681034" },

  // Direcciones en Piedecuesta
  { _id: 1061, calle: "Carrera 8 # 12-29", ciudad: "Piedecuesta", codigo_postal: "682001" },
  { _id: 1062, calle: "Calle 14 # 5-16", ciudad: "Piedecuesta", codigo_postal: "682001" },
  { _id: 1063, calle: "Carrera 6 # 16-08", ciudad: "Piedecuesta", codigo_postal: "682002" },
  { _id: 1064, calle: "Calle 11 # 9-22", ciudad: "Piedecuesta", codigo_postal: "682002" },
  { _id: 1065, calle: "Carrera 10 # 13-14", ciudad: "Piedecuesta", codigo_postal: "682003" },
  { _id: 1066, calle: "Calle 15 # 7-06", ciudad: "Piedecuesta", codigo_postal: "682003" },
  { _id: 1067, calle: "Carrera 4 # 18-25", ciudad: "Piedecuesta", codigo_postal: "682004" },
  { _id: 1068, calle: "Calle 17 # 8-13", ciudad: "Piedecuesta", codigo_postal: "682004" },
  { _id: 1069, calle: "Carrera 12 # 10-19", ciudad: "Piedecuesta", codigo_postal: "682005" },
  { _id: 1070, calle: "Calle 9 # 11-27", ciudad: "Piedecuesta", codigo_postal: "682005" },

  // Direcciones adicionales Bucaramanga - Barrios populares
  { _id: 1071, calle: "Carrera 14 # 72-18", ciudad: "Bucaramanga", codigo_postal: "680021" },
  { _id: 1072, calle: "Calle 75 # 12-26", ciudad: "Bucaramanga", codigo_postal: "680021" },
  { _id: 1073, calle: "Carrera 18 # 68-14", ciudad: "Bucaramanga", codigo_postal: "680022" },
  { _id: 1074, calle: "Calle 70 # 16-09", ciudad: "Bucaramanga", codigo_postal: "680022" },
  { _id: 1075, calle: "Carrera 22 # 65-31", ciudad: "Bucaramanga", codigo_postal: "680023" },
  { _id: 1076, calle: "Calle 67 # 20-17", ciudad: "Bucaramanga", codigo_postal: "680023" },
  { _id: 1077, calle: "Carrera 13 # 74-08", ciudad: "Bucaramanga", codigo_postal: "680024" },
  { _id: 1078, calle: "Calle 76 # 15-23", ciudad: "Bucaramanga", codigo_postal: "680024" },
  { _id: 1079, calle: "Carrera 17 # 69-12", ciudad: "Bucaramanga", codigo_postal: "680025" },
  { _id: 1080, calle: "Calle 71 # 19-28", ciudad: "Bucaramanga", codigo_postal: "680025" },

  // Direcciones en barrios específicos de Bucaramanga
  { _id: 1081, calle: "Carrera 33 # 42-15", ciudad: "Bucaramanga", codigo_postal: "680026" },
  { _id: 1082, calle: "Calle 45 # 35-07", ciudad: "Bucaramanga", codigo_postal: "680026" },
  { _id: 1083, calle: "Carrera 29 # 38-22", ciudad: "Bucaramanga", codigo_postal: "680027" },
  { _id: 1084, calle: "Calle 41 # 31-16", ciudad: "Bucaramanga", codigo_postal: "680027" },
  { _id: 1085, calle: "Carrera 31 # 36-09", ciudad: "Bucaramanga", codigo_postal: "680028" },
  { _id: 1086, calle: "Calle 39 # 33-24", ciudad: "Bucaramanga", codigo_postal: "680028" },
  { _id: 1087, calle: "Carrera 25 # 44-18", ciudad: "Bucaramanga", codigo_postal: "680029" },
  { _id: 1088, calle: "Calle 46 # 27-11", ciudad: "Bucaramanga", codigo_postal: "680029" },
  { _id: 1089, calle: "Carrera 34 # 40-26", ciudad: "Bucaramanga", codigo_postal: "680030" },
  { _id: 1090, calle: "Calle 43 # 36-13", ciudad: "Bucaramanga", codigo_postal: "680030" },

  // Direcciones rurales y municipios cercanos
  { _id: 1091, calle: "Vereda El Carmen Km 5", ciudad: "Bucaramanga", codigo_postal: "680050" },
  { _id: 1092, calle: "Vereda La Esperanza Km 8", ciudad: "Bucaramanga", codigo_postal: "680051" },
  { _id: 1093, calle: "Corregimiento de Bocas", ciudad: "Bucaramanga", codigo_postal: "680052" },
  { _id: 1094, calle: "Vereda El Porvenir Km 12", ciudad: "Piedecuesta", codigo_postal: "682050" },
  { _id: 1095, calle: "Vereda San Rafael Km 15", ciudad: "Floridablanca", codigo_postal: "681050" },
  { _id: 1096, calle: "Corregimiento Palmas del Socorro", ciudad: "Girón", codigo_postal: "681070" },
  { _id: 1097, calle: "Vereda Mensulí Km 7", ciudad: "Floridablanca", codigo_postal: "681051" },
  { _id: 1098, calle: "Vereda Buenos Aires Km 10", ciudad: "Piedecuesta", codigo_postal: "682051" },
  { _id: 1099, calle: "Vereda Cristales Km 18", ciudad: "Girón", codigo_postal: "681071" },
  { _id: 1100, calle: "Vereda El Tabacal Km 14", ciudad: "Bucaramanga", codigo_postal: "680053" }
]);

// 6. Diagnostico

db.Diagnostico.insertMany([
  { _id: 1, descripcion: "Gripe común" },
  { _id: 2, descripcion: "Resfriado común" },
  { _id: 3, descripcion: "Amigdalitis aguda" },
  { _id: 4, descripcion: "Bronquitis crónica" },
  { _id: 5, descripcion: "Asma leve" },
  { _id: 6, descripcion: "Neumonía atípica" },
  { _id: 7, descripcion: "Infección urinaria" },
  { _id: 8, descripcion: "Cistitis" },
  { _id: 9, descripcion: "Pielonefritis" },
  { _id: 10, descripcion: "Gastritis aguda" },
  { _id: 11, descripcion: "Úlcera péptica" },
  { _id: 12, descripcion: "Diverticulitis" },
  { _id: 13, descripcion: "Apendicitis" },
  { _id: 14, descripcion: "Colecistitis" },
  { _id: 15, descripcion: "Hernia inguinal" },
  { _id: 16, descripcion: "Diabetes tipo 1" },
  { _id: 17, descripcion: "Diabetes tipo 2" },
  { _id: 18, descripcion: "Hipertensión esencial" },
  { _id: 19, descripcion: "Hipotiroidismo" },
  { _id: 20, descripcion: "Hipertiroidismo" },
  { _id: 21, descripcion: "Artritis reumatoide" },
  { _id: 22, descripcion: "Osteoartritis" },
  { _id: 23, descripcion: "Esclerosis múltiple" },
  { _id: 24, descripcion: "Parkinson" },
  { _id: 25, descripcion: "Alzheimer" },
  { _id: 26, descripcion: "Migraña crónica" },
  { _id: 27, descripcion: "Ansiedad generalizada" },
  { _id: 28, descripcion: "Depresión mayor" },
  { _id: 29, descripcion: "Fractura de tibia" },
  { _id: 30, descripcion: "Esguince de tobillo" }
]);

// 7. Fabricante

db.Fabricante.insertMany([
  { _id: 1, nombre: "Pfizer" },
  { _id: 2, nombre: "Johnson & Johnson" },
  { _id: 3, nombre: "Novartis" },
  { _id: 4, nombre: "Roche" },
  { _id: 5, nombre: "Merck & Co." },
  { _id: 6, nombre: "AbbVie" },
  { _id: 7, nombre: "Sanofi" },
  { _id: 8, nombre: "AstraZeneca" },
  { _id: 9, nombre: "GlaxoSmithKline (GSK)" },
  { _id: 10, nombre: "Eli Lilly and Company" },
  { _id: 11, nombre: "Bristol Myers Squibb" },
  { _id: 12, nombre: "Gilead Sciences" },
  { _id: 13, nombre: "Bayer" },
  { _id: 14, nombre: "Amgen" },
  { _id: 15, nombre: "Teva Pharmaceutical Industries" },
  { _id: 16, nombre: "Moderna" },
  { _id: 17, nombre: "BioNTech" },
  { _id: 18, nombre: "Grifols" },
  { _id: 19, nombre: "Takeda Pharmaceutical Company" },
  { _id: 20, nombre: "Boehringer Ingelheim" },
  { _id: 21, nombre: "Novo Nordisk" },
  { _id: 22, nombre: "Regeneron Pharmaceuticals" },
  { _id: 23, nombre: "Daiichi Sankyo" },
  { _id: 24, nombre: "Viatris (antes Mylan y Upjohn)" },
  { _id: 25, nombre: "Dr. Reddy's Laboratories" }
]);

// 8. Tipo_Medicamento

db.Tipo_Medicamento.insertMany([
  { _id: 1, nombre: "Analgésico" },
  { _id: 2, nombre: "Antibiótico" },
  { _id: 3, nombre: "Antiinflamatorio" },
  { _id: 4, nombre: "Antipirético" },
  { _id: 5, nombre: "Antihipertensivo" },
  { _id: 6, nombre: "Antidiabético" },
  { _id: 7, nombre: "Antihistamínico" },
  { _id: 8, nombre: "Antiviral" },
  { _id: 9, nombre: "Vacuna" },
  { _id: 10, nombre: "Diurético" },
  { _id: 11, nombre: "Antidepresivo" },
  { _id: 12, nombre: "Ansiolítico" },
  { _id: 13, nombre: "Relajante muscular" },
  { _id: 14, nombre: "Anticoagulante" },
  { _id: 15, nombre: "Hipnótico/Sedante" },
  { _id: 16, nombre: "Broncodilatador" },
  { _id: 17, nombre: "Corticosteroide" },
  { _id: 18, nombre: "Anticonvulsivo" },
  { _id: 19, nombre: "Estatinas" },
  { _id: 20, nombre: "Gastroprotector" },
  { _id: 21, nombre: "Laxante" },
  { _id: 22, nombre: "Antiácido" },
  { _id: 23, nombre: "Antifúngico" },
  { _id: 24, nombre: "Hormona" },
  { _id: 25, nombre: "Quimioterapéutico" }
]);

// 9. Tipo_Tratamiento

db.Tipo_Tratamiento.insertMany([
  { _id: 1, nombre: "Farmacológico", costo_base: 50.00 },
  { _id: 2, nombre: "Terapia Física", costo_base: 75.00 },
  { _id: 3, nombre: "Cirugía Menor", costo_base: 500.00 },
  { _id: 4, nombre: "Cirugía Mayor", costo_base: 2500.00 },
  { _id: 5, nombre: "Rehabilitación", costo_base: 100.00 },
  { _id: 6, nombre: "Quimioterapia", costo_base: 1500.00 },
  { _id: 7, nombre: "Radioterapia", costo_base: 1200.00 },
  { _id: 8, nombre: "Dieta y Nutrición", costo_base: 60.00 },
  { _id: 9, nombre: "Psicoterapia", costo_base: 80.00 },
  { _id: 10, nombre: "Vacunación", costo_base: 30.00 },
  { _id: 11, nombre: "Fisioterapia Respiratoria", costo_base: 90.00 },
  { _id: 12, nombre: "Terapia Ocupacional", costo_base: 85.00 },
  { _id: 13, nombre: "Terapia del Lenguaje", costo_base: 95.00 },
  { _id: 14, nombre: "Hemodiálisis", costo_base: 400.00 },
  { _id: 15, nombre: "Transfusión Sanguínea", costo_base: 300.00 },
  { _id: 16, nombre: "Endoscopia", costo_base: 600.00 },
  { _id: 17, nombre: "Colonoscopia", costo_base: 700.00 },
  { _id: 18, nombre: "Electrocardiograma (ECG)", costo_base: 40.00 },
  { _id: 19, nombre: "Resonancia Magnética (RM)", costo_base: 900.00 },
  { _id: 20, nombre: "Tomografía Computarizada (TC)", costo_base: 750.00 },
  { _id: 21, nombre: "Ecografía", costo_base: 120.00 },
  { _id: 22, nombre: "Drenaje de Absceso", costo_base: 350.00 },
  { _id: 23, nombre: "Sutura de Herida", costo_base: 150.00 },
  { _id: 24, nombre: "Inmovilización de Fractura", costo_base: 200.00 },
  { _id: 25, nombre: "Ventilación Mecánica", costo_base: 1000.00 }
]);

// 10. Ubicacion

db.Ubicacion.insertMany([
  { _id: 1, edificio: "Principal", piso: "1", estante: "A1" },
  { _id: 2, edificio: "Principal", piso: "1", estante: "A2" },
  { _id: 3, edificio: "Anexo", piso: "Planta Baja", estante: "S10" },
  { _id: 4, edificio: "Principal", piso: "3", estante: "UCI_01" },
  { _id: 5, edificio: "Quirófanos", piso: "2", estante: "Q_Gabinete" },
  { _id: 6, edificio: "Principal", piso: "2", estante: "Laboratorio_R1" },
  { _id: 7, edificio: "Emergencias", piso: "Planta Baja", estante: "EM_Armario" },
  { _id: 8, edificio: "Anexo", piso: "1", estante: "Cons_201" },
  { _id: 9, edificio: "Principal", piso: "1", estante: "Refrigerador_Vacunas" },
  { _id: 10, edificio: "Almacén Externo", piso: "Único", estante: "Principal_01" },
  { _id: 11, edificio: "Farmacia", piso: "1", estante: "Sección Analgésicos" },
  { _id: 12, edificio: "Farmacia", piso: "1", estante: "Sección Antibióticos" },
  { _id: 13, edificio: "Almacén Central", piso: "2", estante: "Controles_Especiales" },
  { _id: 14, edificio: "Unidad Cardiología", piso: "5", estante: "UCC_Caja_Medicamentos" },
  { _id: 15, edificio: "Pediatría", piso: "4", estante: "Pedi_Farmacia_A" },
  { _id: 16, edificio: "Laboratorio Clínico", piso: "1", estante: "Reactivos_Fríos" },
  { _id: 17, edificio: "Maternidad", piso: "3", estante: "Mat_Suministros" },
  { _id: 18, edificio: "Oncología", piso: "6", estante: "Onco_Farmacia" },
  { _id: 19, edificio: "Unidad de Quemados", piso: "7", estante: "UQ_Botiquín" },
  { _id: 20, edificio: "Farmacia de Urgencias", piso: "Planta Baja", estante: "Emerg_Rápido" },
  { _id: 21, edificio: "Edificio de Investigación", piso: "8", estante: "Lab_Experimental_F" },
  { _id: 22, edificio: "Fisioterapia", piso: "2", estante: "Materiales_Terapia" },
  { _id: 23, edificio: "Anestesiología", piso: "2", estante: "Anest_Carro_B" },
  { _id: 24, edificio: "Consultorios Externos", piso: "Planta Baja", estante: "Mostrador_Medicamentos" },
  { _id: 25, edificio: "Radiología", piso: "1", estante: "Contrastes_Radiologicos" }
]);

// 11. Hospital_Area

db.Hospital_Area.insertMany([
  // Hospital Universitario de Santander - HUS (_id: 1, director_id: 101)
  { _id: 1, area_id: 201, director_id: 101 }, // Cirugía General
  { _id: 2, area_id: 202, director_id: 101 }, // Medicina Interna
  { _id: 3, area_id: 203, director_id: 101 }, // Neurología
  { _id: 4, area_id: 204, director_id: 101 }, // Ortopedia y Traumatología
  { _id: 5, area_id: 205, director_id: 101 }, // Endocrinología
  { _id: 6, area_id: 206, director_id: 101 }, // Radiología
  { _id: 7, area_id: 207, director_id: 101 }, // Cardiología
  { _id: 8, area_id: 208, director_id: 101 }, // Ginecología y Obstetricia
  { _id: 9, area_id: 209, director_id: 101 }, // Pediatría
  { _id: 10, area_id: 210, director_id: 101 }, // Anestesiología

  // Fundación Cardiovascular de Colombia - FCV (_id: 2, director_id: 102)
  { _id: 11, area_id: 220, director_id: 102 }, // Cardiología Intervencionista
  { _id: 12, area_id: 221, director_id: 102 }, // Cirugía Cardiovascular
  { _id: 13, area_id: 222, director_id: 102 }, // Electrofisiología Cardíaca
  { _id: 14, area_id: 223, director_id: 102 }, // Hemodinamia
  { _id: 15, area_id: 224, director_id: 102 }, // Cirugía Vascular y Angiología

  // Hospital Internacional de Colombia - HIC (_id: 3, director_id: 103)
  { _id: 16, area_id: 240, director_id: 103 }, // Urología
  { _id: 17, area_id: 241, director_id: 103 }, // Oftalmología
  { _id: 18, area_id: 242, director_id: 103 }, // Otorrinolaringología
  { _id: 19, area_id: 225, director_id: 103 }, // Oncología (También presente en FCV, pero es común en HIC)
  { _id: 20, area_id: 226, director_id: 103 }  // Neurocirugía (También presente en FCV, pero es común en HIC)
]);

// 12. MedicosYPersonal



db.MedicosYPersonal.insertMany([

  // Hospital ID: 1 (HUS) - Bloque 1/5



  // Director General (1)

  { numero_colegiatura: "001001", nombre: "Director A HUS", salario: new Double("20000000.00"), telefono: "3001000001", hospital_id: 1, especialidad_id: 70 }, // Medicina General



  // Médicos Especialistas (33)

  { numero_colegiatura: "0020001", nombre: "Dr. Ana Medina", salario: new Double("8500000.00"), telefono: "3011000001", hospital_id: 1, especialidad_id: 1 }, // Cirugía General

  { numero_colegiatura: "0020002", nombre: "Dra. Luis Fuentes", salario: new Double("7800000.00"), telefono: "3011000002", hospital_id: 1, especialidad_id: 20 }, // Medicina Interna

  { numero_colegiatura: "0020003", nombre: "Dr. Carla Soto", salario: new Double("9200000.00"), telefono: "3011000003", hospital_id: 1, especialidad_id: 24 }, // Neurología

  { numero_colegiatura: "0020004", nombre: "Dra. Pedro Vera", salario: new Double("8800000.00"), telefono: "3011000004", hospital_id: 1, especialidad_id: 5 }, // Ortopedia y Traumatología

  { numero_colegiatura: "0020005", nombre: "Dr. Sofia Castro", salario: new Double("7500000.00"), telefono: "3011000005", hospital_id: 1, especialidad_id: 25 }, // Endocrinología

  { numero_colegiatura: "0020006", nombre: "Dra. Javier Ruiz", salario: new Double("8900000.00"), telefono: "3011000006", hospital_id: 1, especialidad_id: 7 }, // Urología

  { numero_colegiatura: "0020007", nombre: "Dr. Elena Blanco", salario: new Double("7900000.00"), telefono: "3011000007", hospital_id: 1, especialidad_id: 8 }, // Oftalmología

  { numero_colegiatura: "0020008", nombre: "Dra. Miguel Torres", salario: new Double("8600000.00"), telefono: "3011000008", hospital_id: 1, especialidad_id: 9 }, // Otorrinolaringología

  { numero_colegiatura: "0020009", nombre: "Dr. Laura Pérez", salario: new Double("9000000.00"), telefono: "3011000009", hospital_id: 1, especialidad_id: 30 }, // Oncología

  { numero_colegiatura: "0020010", nombre: "Dra. David Ortiz", salario: new Double("8200000.00"), telefono: "3011000010", hospital_id: 1, especialidad_id: 4 }, // Neurocirugía

  { numero_colegiatura: "0020011", nombre: "Dr. Andrea Rojas", salario: new Double("7700000.00"), telefono: "3011000011", hospital_id: 1, especialidad_id: 10 }, // Pediatría

  { numero_colegiatura: "0020012", nombre: "Dra. Carlos Gil", salario: new Double("9100000.00"), telefono: "3011000012", hospital_id: 1, especialidad_id: 11 }, // Ginecología y Obstetricia

  { numero_colegiatura: "0020013", nombre: "Dr. Sara Díaz", salario: new Double("8000000.00"), telefono: "3011000013", hospital_id: 1, especialidad_id: 40 }, // Dermatología

  { numero_colegiatura: "0020014", nombre: "Dra. Jorge Pardo", salario: new Double("8400000.00"), telefono: "3011000014", hospital_id: 1, especialidad_id: 41 }, // Alergología

  { numero_colegiatura: "0020015", nombre: "Dr. Valeria Vargas", salario: new Double("7600000.00"), telefono: "3011000015", hospital_id: 1, especialidad_id: 21 }, // Gastroenterología

  { numero_colegiatura: "0020016", nombre: "Dra. Ricardo Vega", salario: new Double("8700000.00"), telefono: "3011000016", hospital_id: 1, especialidad_id: 50 }, // Radiología

  { numero_colegiatura: "0020017", nombre: "Dr. Isabel Flores", salario: new Double("8100000.00"), telefono: "3011000017", hospital_id: 1, especialidad_id: 51 }, // Anestesiología

  { numero_colegiatura: "0020018", nombre: "Dra. Daniel Ramos", salario: new Double("8300000.00"), telefono: "3011000018", hospital_id: 1, especialidad_id: 52 }, // Hemodinamia

  { numero_colegiatura: "0020019", nombre: "Dr. Patricia Herrera", salario: new Double("7950000.00"), telefono: "3011000019", hospital_id: 1, especialidad_id: 72 }, // Medicina del Deporte

  { numero_colegiatura: "0020020", nombre: "Dra. Gabriel Núñez", salario: new Double("9050000.00"), telefono: "3011000020", hospital_id: 1, especialidad_id: 80 }, // Cuidados Paliativos

  { numero_colegiatura: "0020021", nombre: "Dr. Mariana Acosta", salario: new Double("8250000.00"), telefono: "3011000021", hospital_id: 1, especialidad_id: 81 }, // Geriatría

  { numero_colegiatura: "0020022", nombre: "Dra. Esteban Romero", salario: new Double("7900000.00"), telefono: "3011000022", hospital_id: 1, especialidad_id: 1 }, // Cirugía General

  { numero_colegiatura: "0020023", nombre: "Dr. Sofia Morales", salario: new Double("8800000.00"), telefono: "3011000023", hospital_id: 1, especialidad_id: 20 }, // Medicina Interna

  { numero_colegiatura: "0020024", nombre: "Dra. Juan Camargo", salario: new Double("9000000.00"), telefono: "3011000024", hospital_id: 1, especialidad_id: 24 }, // Neurología

  { numero_colegiatura: "0020025", nombre: "Dr. Luisa Peña", salario: new Double("7750000.00"), telefono: "3011000025", hospital_id: 1, especialidad_id: 5 }, // Ortopedia y Traumatología

  { numero_colegiatura: "0020026", nombre: "Dra. Felipe Suárez", salario: new Double("8150000.00"), telefono: "3011000026", hospital_id: 1, especialidad_id: 25 }, // Endocrinología

  { numero_colegiatura: "0020027", nombre: "Dr. Natalia Guzmán", salario: new Double("8550000.00"), telefono: "3011000027", hospital_id: 1, especialidad_id: 7 }, // Urología

  { numero_colegiatura: "0020028", nombre: "Dra. Roberto Castro", salario: new Double("7850000.00"), telefono: "3011000028", hospital_id: 1, especialidad_id: 8 }, // Oftalmología

  { numero_colegiatura: "0020029", nombre: "Dr. Valeria Gómez", salario: new Double("8950000.00"), telefono: "3011000029", hospital_id: 1, especialidad_id: 9 }, // Otorrinolaringología

  { numero_colegiatura: "0020030", nombre: "Dra. Andrés Pinto", salario: new Double("9150000.00"), telefono: "3011000030", hospital_id: 1, especialidad_id: 30 }, // Oncología

  { numero_colegiatura: "0020031", nombre: "Dr. Carolina Mesa", salario: new Double("8350000.00"), telefono: "3011000031", hospital_id: 1, especialidad_id: 4 }, // Neurocirugía

  { numero_colegiatura: "0020032", nombre: "Dra. Fernando Durán", salario: new Double("7650000.00"), telefono: "3011000032", hospital_id: 1, especialidad_id: 10 }, // Pediatría

  { numero_colegiatura: "0020033", nombre: "Dr. Julián Quintero", salario: new Double("8050000.00"), telefono: "3011000033", hospital_id: 1, especialidad_id: 11 }, // Ginecología y Obstetricia





  // Enfermeros/as (8)

  { numero_colegiatura: "003001", nombre: "Enf. María Silva", salario: new Double("3200000.00"), telefono: "3021000001", hospital_id: 1, especialidad_id: 70 },

  { numero_colegiatura: "003002", nombre: "Enf. Juan Cortés", salario: new Double("2800000.00"), telefono: "3021000002", hospital_id: 1, especialidad_id: 70 },

  { numero_colegiatura: "003003", nombre: "Enf. Ana Beltrán", salario: new Double("3500000.00"), telefono: "3021000003", hospital_id: 1, especialidad_id: 70 },

  { numero_colegiatura: "003004", nombre: "Enf. Pedro Rojas", salario: new Double("3000000.00"), telefono: "3021000004", hospital_id: 1, especialidad_id: 70 },

  { numero_colegiatura: "003005", nombre: "Enf. Sofía Lima", salario: new Double("3300000.00"), telefono: "3021000005", hospital_id: 1, especialidad_id: 70 },

  { numero_colegiatura: "003006", nombre: "Enf. Luis Morales", salario: new Double("2900000.00"), telefono: "3021000006", hospital_id: 1, especialidad_id: 70 },

  { numero_colegiatura: "003007", nombre: "Enf. Valeria Ortiz", salario: new Double("3100000.00"), telefono: "3021000007", hospital_id: 1, especialidad_id: 70 },

  { numero_colegiatura: "003008", nombre: "Enf. David Rivas", salario: new Double("3400000.00"), telefono: "3021000008", hospital_id: 1, especialidad_id: 70 },



  // Personal Administrativo (5)

  { numero_colegiatura: "004001", nombre: "Adm. Claudia Paz", salario: new Double("2200000.00"), telefono: "3031000001", hospital_id: 1, especialidad_id: 63 }, // Trabajo Social

  { numero_colegiatura: "004002", nombre: "Adm. Héctor Vega", salario: new Double("1900000.00"), telefono: "3031000002", hospital_id: 1, especialidad_id: 63 },

  { numero_colegiatura: "004003", nombre: "Adm. Gina Castro", salario: new Double("2500000.00"), telefono: "3031000003", hospital_id: 1, especialidad_id: 63 },

  { numero_colegiatura: "004004", nombre: "Adm. Raúl Torres", salario: new Double("2000000.00"), telefono: "3031000004", hospital_id: 1, especialidad_id: 63 },

  { numero_colegiatura: "004005", nombre: "Adm. Brenda Arias", salario: new Double("2300000.00"), telefono: "3031000005", hospital_id: 1, especialidad_id: 63 },



  // Personal de Mantenimiento (3)

  { numero_colegiatura: "00501", nombre: "Mant. Jorge Polo", salario: new Double("1500000.00"), telefono: "3041000001", hospital_id: 1, especialidad_id: 70 },

  { numero_colegiatura: "00502", nombre: "Mant. Martha Cruz", salario: new Double("1300000.00"), telefono: "3041000002", hospital_id: 1, especialidad_id: 70 },

  { numero_colegiatura: "00503", nombre: "Mant. Diego Peña", salario: new Double("1600000.00"), telefono: "3041000003", hospital_id: 1, especialidad_id: 70 }

]);



print("Se han insertado 50 documentos para el Hospital ID 1 en MedicosYPersonal.");






db.MedicosYPersonal.insertMany([

  // Hospital ID: 2 (FCV) - Bloque 2/5



  // Director General (1)

  { numero_colegiatura: "001002", nombre: "Director B FCV", salario: new Double("22000000.00"), telefono: "3001000002", hospital_id: 2, especialidad_id: 70 }, // Medicina General



  // Médicos Especialistas (33)

  { numero_colegiatura: "0020034", nombre: "Dr. Roberto Casas", salario: new Double("10500000.00"), telefono: "3011000034", hospital_id: 2, especialidad_id: 22 }, // Cardiología Intervencionista

  { numero_colegiatura: "0020035", nombre: "Dra. Eliana López", salario: new Double("11000000.00"), telefono: "3011000035", hospital_id: 2, especialidad_id: 2 }, // Cirugía Cardiovascular

  { numero_colegiatura: "0020036", nombre: "Dr. Martín Sotomayor", salario: new Double("9800000.00"), telefono: "3011000036", hospital_id: 2, especialidad_id: 23 }, // Electrofisiología Cardíaca

  { numero_colegiatura: "0020037", nombre: "Dra. Camila Ferrer", salario: new Double("9500000.00"), telefono: "3011000037", hospital_id: 2, especialidad_id: 52 }, // Hemodinamia

  { numero_colegiatura: "0020038", nombre: "Dr. Alejandro Vidal", salario: new Double("10200000.00"), telefono: "3011000038", hospital_id: 2, especialidad_id: 3 }, // Cirugía Vascular y Angiología

  { numero_colegiatura: "0020039", nombre: "Dra. Valeria Salas", salario: new Double("9700000.00"), telefono: "3011000039", hospital_id: 2, especialidad_id: 22 },

  { numero_colegiatura: "0020040", nombre: "Dr. Sebastián Prada", salario: new Double("10800000.00"), telefono: "3011000040", hospital_id: 2, especialidad_id: 2 },

  { numero_colegiatura: "0020041", nombre: "Dra. Jimena León", salario: new Double("9900000.00"), telefono: "3011000041", hospital_id: 2, especialidad_id: 23 },

  { numero_colegiatura: "0020042", nombre: "Dr. Cristian Morales", salario: new Double("9600000.00"), telefono: "3011000042", hospital_id: 2, especialidad_id: 52 },

  { numero_colegiatura: "0020043", nombre: "Dra. Sofía Rincón", salario: new Double("10300000.00"), telefono: "3011000043", hospital_id: 2, especialidad_id: 3 },

  { numero_colegiatura: "0020044", nombre: "Dr. Fabián Vargas", salario: new Double("10400000.00"), telefono: "3011000044", hospital_id: 2, especialidad_id: 22 },

  { numero_colegiatura: "0020045", nombre: "Dra. Luz Marina Solano", salario: new Double("10900000.00"), telefono: "3011000045", hospital_id: 2, especialidad_id: 2 },

  { numero_colegiatura: "0020046", nombre: "Dr. Camilo Giraldo", salario: new Double("9750000.00"), telefono: "3011000046", hospital_id: 2, especialidad_id: 23 },

  { numero_colegiatura: "0020047", nombre: "Dra. Victoria Gómez", salario: new Double("9450000.00"), telefono: "3011000047", hospital_id: 2, especialidad_id: 52 },

  { numero_colegiatura: "0020048", nombre: "Dr. Esteban Cárdenas", salario: new Double("10150000.00"), telefono: "3011000048", hospital_id: 2, especialidad_id: 3 },

  { numero_colegiatura: "0020049", nombre: "Dra. Gabriela Parra", salario: new Double("10600000.00"), telefono: "3011000049", hospital_id: 2, especialidad_id: 22 },

  { numero_colegiatura: "0020050", nombre: "Dr. Diego Quintero", salario: new Double("11200000.00"), telefono: "3011000050", hospital_id: 2, especialidad_id: 2 },

  { numero_colegiatura: "0020051", nombre: "Dra. Laura Morales", salario: new Double("10000000.00"), telefono: "3011000051", hospital_id: 2, especialidad_id: 23 },

  { numero_colegiatura: "0020052", nombre: "Dr. Felipe Soto", salario: new Double("9550000.00"), telefono: "3011000052", hospital_id: 2, especialidad_id: 52 },

  { numero_colegiatura: "0020053", nombre: "Dra. Carolina Vargas", salario: new Double("10250000.00"), telefono: "3011000053", hospital_id: 2, especialidad_id: 3 },

  { numero_colegiatura: "0020054", nombre: "Dr. Andrés Beltrán", salario: new Double("10700000.00"), telefono: "3011000054", hospital_id: 2, especialidad_id: 22 },

  { numero_colegiatura: "0020055", nombre: "Dra. Natalia Ruiz", salario: new Double("11100000.00"), telefono: "3011000055", hospital_id: 2, especialidad_id: 2 },

  { numero_colegiatura: "0020056", nombre: "Dr. Julián Martínez", salario: new Double("9950000.00"), telefono: "3011000056", hospital_id: 2, especialidad_id: 23 },

  { numero_colegiatura: "0020057", nombre: "Dra. Silvia Giraldo", salario: new Double("9650000.00"), telefono: "3011000057", hospital_id: 2, especialidad_id: 52 },

  { numero_colegiatura: "0020058", nombre: "Dr. Juan Pablo Herrera", salario: new Double("10350000.00"), telefono: "3011000058", hospital_id: 2, especialidad_id: 3 },

  { numero_colegiatura: "0020059", nombre: "Dra. Andrea Reyes", salario: new Double("10850000.00"), telefono: "3011000059", hospital_id: 2, especialidad_id: 22 },

  { numero_colegiatura: "0020060", nombre: "Dr. Pablo Estrada", salario: new Double("11300000.00"), telefono: "3011000060", hospital_id: 2, especialidad_id: 2 },

  { numero_colegiatura: "0020061", nombre: "Dra. Marcela Londoño", salario: new Double("10050000.00"), telefono: "3011000061", hospital_id: 2, especialidad_id: 23 },

  { numero_colegiatura: "0020062", nombre: "Dr. Daniel Jiménez", salario: new Double("9700000.00"), telefono: "3011000062", hospital_id: 2, especialidad_id: 52 },

  { numero_colegiatura: "0020063", nombre: "Dra. Paula Andrea Pinto", salario: new Double("10450000.00"), telefono: "3011000063", hospital_id: 2, especialidad_id: 3 },

  { numero_colegiatura: "0020064", nombre: "Dr. Mario Bustamante", salario: new Double("10950000.00"), telefono: "3011000064", hospital_id: 2, especialidad_id: 22 },

  { numero_colegiatura: "0020065", nombre: "Dra. Luisa Fernanda Diaz", salario: new Double("11400000.00"), telefono: "3011000065", hospital_id: 2, especialidad_id: 2 },

  { numero_colegiatura: "0020066", nombre: "Dr. Juan Esteban Gomez", salario: new Double("10100000.00"), telefono: "3011000066", hospital_id: 2, especialidad_id: 23 },



  // Enfermeros/as (8)

  { numero_colegiatura: "003009", nombre: "Enf. Camilo Soto", salario: new Double("3150000.00"), telefono: "3021000009", hospital_id: 2, especialidad_id: 70 },

  { numero_colegiatura: "003010", nombre: "Enf. Daniela Quintero", salario: new Double("3450000.00"), telefono: "3021000010", hospital_id: 2, especialidad_id: 70 },

  { numero_colegiatura: "003011", nombre: "Enf. Oscar Mesa", salario: new Double("3050000.00"), telefono: "3021000011", hospital_id: 2, especialidad_id: 70 },

  { numero_colegiatura: "003012", nombre: "Enf. Laura Bernal", salario: new Double("3600000.00"), telefono: "3021000012", hospital_id: 2, especialidad_id: 70 },

  { numero_colegiatura: "003013", nombre: "Enf. Andrés Castro", salario: new Double("2950000.00"), telefono: "3021000013", hospital_id: 2, especialidad_id: 70 },

  { numero_colegiatura: "003014", nombre: "Enf. Luisa Vargas", salario: new Double("3250000.00"), telefono: "3021000014", hospital_id: 2, especialidad_id: 70 },

  { numero_colegiatura: "003015", nombre: "Enf. Ricardo Pérez", salario: new Double("3550000.00"), telefono: "3021000015", hospital_id: 2, especialidad_id: 70 },

  { numero_colegiatura: "003016", nombre: "Enf. Paula Torres", salario: new Double("3000000.00"), telefono: "3021000016", hospital_id: 2, especialidad_id: 70 },



  // Personal Administrativo (5)

  { numero_colegiatura: "004006", nombre: "Adm. Mauricio Ríos", salario: new Double("2100000.00"), telefono: "3031000006", hospital_id: 2, especialidad_id: 63 },

  { numero_colegiatura: "004007", nombre: "Adm. Viviana Suárez", salario: new Double("2400000.00"), telefono: "3031000007", hospital_id: 2, especialidad_id: 63 },

  { numero_colegiatura: "004008", nombre: "Adm. Fernando Ortiz", salario: new Double("1800000.00"), telefono: "3031000008", hospital_id: 2, especialidad_id: 63 },

  { numero_colegiatura: "004009", nombre: "Adm. Carolina Luna", salario: new Double("2050000.00"), telefono: "3031000009", hospital_id: 2, especialidad_id: 63 },

  { numero_colegiatura: "004010", nombre: "Adm. Alex Montoya", salario: new Double("2350000.00"), telefono: "3031000010", hospital_id: 2, especialidad_id: 63 },



  // Personal de Mantenimiento (3)

  { numero_colegiatura: "00504", nombre: "Mant. Sandra Soto", salario: new Double("1450000.00"), telefono: "3041000004", hospital_id: 2, especialidad_id: 70 },

  { numero_colegiatura: "00505", nombre: "Mant. Carlos López", salario: new Double("1650000.00"), telefono: "3041000005", hospital_id: 2, especialidad_id: 70 },

  { numero_colegiatura: "00506", nombre: "Mant. Luisa Perdomo", salario: new Double("1250000.00"), telefono: "3041000006", hospital_id: 2, especialidad_id: 70 }

]);



print("Se han insertado 50 documentos para el Hospital ID 2 en MedicosYPersonal.");




db.MedicosYPersonal.insertMany([

  // Hospital ID: 3 (FOSCAL) - Bloque 3/5



  // Director General (1)

  { numero_colegiatura: "001003", nombre: "Director C FOSCAL", salario: new Double("18000000.00"), telefono: "3001000003", hospital_id: 3, especialidad_id: 70 }, // Medicina General



  // Médicos Especialistas (33)

  { numero_colegiatura: "0020067", nombre: "Dr. Julio Bernal", salario: new Double("9000000.00"), telefono: "3011000067", hospital_id: 3, especialidad_id: 6 }, // Pediatría

  { numero_colegiatura: "0020068", nombre: "Dra. Pilar Méndez", salario: new Double("8500000.00"), telefono: "3011000068", hospital_id: 3, especialidad_id: 7 }, // Urología

  { numero_colegiatura: "0020069", nombre: "Dr. Juan Carlos Daza", salario: new Double("9800000.00"), telefono: "3011000069", hospital_id: 3, especialidad_id: 8 }, // Oftalmología

  { numero_colegiatura: "0020070", nombre: "Dra. Adriana Silva", salario: new Double("9200000.00"), telefono: "3011000070", hospital_id: 3, especialidad_id: 9 }, // Otorrinolaringología

  { numero_colegiatura: "0020071", nombre: "Dr. Gonzalo Torres", salario: new Double("8700000.00"), telefono: "3011000071", hospital_id: 3, especialidad_id: 10 }, // Ginecología y Obstetricia

  { numero_colegiatura: "0020072", nombre: "Dra. Viviana Herrera", salario: new Double("9100000.00"), telefono: "3011000072", hospital_id: 3, especialidad_id: 11 }, // Cirugía Plástica

  { numero_colegiatura: "0020073", nombre: "Dr. Ricardo Pérez", salario: new Double("8600000.00"), telefono: "3011000073", hospital_id: 3, especialidad_id: 20 }, // Medicina Interna

  { numero_colegiatura: "0020074", nombre: "Dra. Sofía Jiménez", salario: new Double("9900000.00"), telefono: "3011000074", hospital_id: 3, especialidad_id: 21 }, // Gastroenterología

  { numero_colegiatura: "0020075", nombre: "Dr. Camilo Giraldo", salario: new Double("9300000.00"), telefono: "3011000075", hospital_id: 3, especialidad_id: 22 }, // Cardiología Intervencionista

  { numero_colegiatura: "0020076", nombre: "Dra. Claudia Vargas", salario: new Double("8800000.00"), telefono: "3011000076", hospital_id: 3, especialidad_id: 23 }, // Electrofisiología Cardíaca

  { numero_colegiatura: "0020077", nombre: "Dr. Nicolás Botero", salario: new Double("9250000.00"), telefono: "3011000077", hospital_id: 3, especialidad_id: 24 }, // Neurología

  { numero_colegiatura: "0020078", nombre: "Dra. Elena Quintero", salario: new Double("8750000.00"), telefono: "3011000078", hospital_id: 3, especialidad_id: 25 }, // Endocrinología

  { numero_colegiatura: "0020079", nombre: "Dr. Juan José López", salario: new Double("9400000.00"), telefono: "3011000079", hospital_id: 3, especialidad_id: 26 }, // Neumología

  { numero_colegiatura: "0020080", nombre: "Dra. Laura Mesa", salario: new Double("8900000.00"), telefono: "3011000080", hospital_id: 3, especialidad_id: 27 }, // Nefrología

  { numero_colegiatura: "0020081", nombre: "Dr. Andrés Camargo", salario: new Double("9600000.00"), telefono: "3011000081", hospital_id: 3, especialidad_id: 28 }, // Reumatología

  { numero_colegiatura: "0020082", nombre: "Dra. Valentina Suárez", salario: new Double("9050000.00"), telefono: "3011000082", hospital_id: 3, especialidad_id: 29 }, // Hematología

  { numero_colegiatura: "0020083", nombre: "Dr. Daniel Rincón", salario: new Double("9700000.00"), telefono: "3011000083", hospital_id: 3, especialidad_id: 30 }, // Oncología

  { numero_colegiatura: "0020084", nombre: "Dra. Sara Díaz", salario: new Double("9150000.00"), telefono: "3011000084", hospital_id: 3, especialidad_id: 31 }, // Geriatría

  { numero_colegiatura: "0020085", nombre: "Dr. Felipe Martínez", salario: new Double("9350000.00"), telefono: "3011000085", hospital_id: 3, especialidad_id: 32 }, // Infectología

  { numero_colegiatura: "0020086", nombre: "Dra. María Paz", salario: new Double("8850000.00"), telefono: "3011000086", hospital_id: 3, especialidad_id: 33 }, // Medicina Intensiva

  { numero_colegiatura: "0020087", nombre: "Dr. Esteban Guzmán", salario: new Double("9550000.00"), telefono: "3011000087", hospital_id: 3, especialidad_id: 34 }, // Medicina Nuclear

  { numero_colegiatura: "0020088", nombre: "Dra. Carolina Vargas", salario: new Double("8950000.00"), telefono: "3011000088", hospital_id: 3, especialidad_id: 40 }, // Dermatología

  { numero_colegiatura: "0020089", nombre: "Dr. Alejandro Restrepo", salario: new Double("9750000.00"), telefono: "3011000089", hospital_id: 3, especialidad_id: 41 }, // Alergología

  { numero_colegiatura: "0020090", nombre: "Dra. Natalia Morales", salario: new Double("9200000.00"), telefono: "3011000090", hospital_id: 3, especialidad_id: 50 }, // Radiología

  { numero_colegiatura: "0020091", nombre: "Dr. Miguel Ángel Sierra", salario: new Double("8700000.00"), telefono: "3011000091", hospital_id: 3, especialidad_id: 51 }, // Anestesiología

  { numero_colegiatura: "0020092", nombre: "Dra. Diana Carolina Soto", salario: new Double("9000000.00"), telefono: "3011000092", hospital_id: 3, especialidad_id: 52 }, // Hemodinamia

  { numero_colegiatura: "0020093", nombre: "Dr. Christian Gómez", salario: new Double("9450000.00"), telefono: "3011000093", hospital_id: 3, especialidad_id: 72 }, // Medicina del Deporte

  { numero_colegiatura: "0020094", nombre: "Dra. Luisa Fernanda López", salario: new Double("8800000.00"), telefono: "3011000094", hospital_id: 3, especialidad_id: 80 }, // Cuidados Paliativos

  { numero_colegiatura: "0020095", nombre: "Dr. Carlos Eduardo Ortiz", salario: new Double("9650000.00"), telefono: "3011000095", hospital_id: 3, especialidad_id: 81 }, // Geriatría

  { numero_colegiatura: "0020096", nombre: "Dra. Ana Milena Rojas", salario: new Double("9100000.00"), telefono: "3011000096", hospital_id: 3, especialidad_id: 6 }, // Pediatría

  { numero_colegiatura: "0020097", nombre: "Dr. Santiago Duque", salario: new Double("8600000.00"), telefono: "3011000097", hospital_id: 3, especialidad_id: 7 }, // Urología

  { numero_colegiatura: "0020098", nombre: "Dra. Isabella García", salario: new Double("9900000.00"), telefono: "3011000098", hospital_id: 3, especialidad_id: 8 }, // Oftalmología

  { numero_colegiatura: "0020099", nombre: "Dr. Miguel Ángel Quintero", salario: new Double("9300000.00"), telefono: "3011000099", hospital_id: 3, especialidad_id: 9 }, // Otorrinolaringología



  // Enfermeros/as (8)

  { numero_colegiatura: "003017", nombre: "Enf. Paola Daza", salario: new Double("3300000.00"), telefono: "3021000017", hospital_id: 3, especialidad_id: 70 },

  { numero_colegiatura: "003018", nombre: "Enf. Sergio Ochoa", salario: new Double("2900000.00"), telefono: "3021000018", hospital_id: 3, especialidad_id: 70 },

  { numero_colegiatura: "003019", nombre: "Enf. Gabriela Soto", salario: new Double("3500000.00"), telefono: "3021000019", hospital_id: 3, especialidad_id: 70 },

  { numero_colegiatura: "003020", nombre: "Enf. Esteban Niño", salario: new Double("3100000.00"), telefono: "3021000020", hospital_id: 3, especialidad_id: 70 },

  { numero_colegiatura: "003021", nombre: "Enf. Valeria Marín", salario: new Double("3400000.00"), telefono: "3021000021", hospital_id: 3, especialidad_id: 70 },

  { numero_colegiatura: "003022", nombre: "Enf. Felipe Vega", salario: new Double("3000000.00"), telefono: "3021000022", hospital_id: 3, especialidad_id: 70 },

  { numero_colegiatura: "003023", nombre: "Enf. Antonia Rivera", salario: new Double("3200000.00"), telefono: "3021000023", hospital_id: 3, especialidad_id: 70 },

  { numero_colegiatura: "003024", nombre: "Enf. Juan David Ortiz", salario: new Double("3600000.00"), telefono: "3021000024", hospital_id: 3, especialidad_id: 70 },



  // Personal Administrativo (5)

  { numero_colegiatura: "004011", nombre: "Adm. Patricia Castro", salario: new Double("2300000.00"), telefono: "3031000011", hospital_id: 3, especialidad_id: 63 },

  { numero_colegiatura: "004012", nombre: "Adm. Camilo Gómez", salario: new Double("2000000.00"), telefono: "3031000012", hospital_id: 3, especialidad_id: 63 },

  { numero_colegiatura: "004013", nombre: "Adm. Daniela Pérez", salario: new Double("2400000.00"), telefono: "3031000013", hospital_id: 3, especialidad_id: 63 },

  { numero_colegiatura: "004014", nombre: "Adm. Gabriel Díaz", salario: new Double("1950000.00"), telefono: "3031000014", hospital_id: 3, especialidad_id: 63 },

  { numero_colegiatura: "004015", nombre: "Adm. Marcela Soto", salario: new Double("2250000.00"), telefono: "3031000015", hospital_id: 3, especialidad_id: 63 },



  // Personal de Mantenimiento (3)

  { numero_colegiatura: "00507", nombre: "Mant. Carlos Ruiz", salario: new Double("1550000.00"), telefono: "3041000007", hospital_id: 3, especialidad_id: 70 },

  { numero_colegiatura: "00508", nombre: "Mant. Sara Herrera", salario: new Double("1350000.00"), telefono: "3041000008", hospital_id: 3, especialidad_id: 70 },

  { numero_colegiatura: "00509", nombre: "Mant. Andrés Cárdenas", salario: new Double("1700000.00"), telefono: "3041000009", hospital_id: 3, especialidad_id: 70 }

]);



print("Se han insertado 50 documentos para el Hospital ID 3 en MedicosYPersonal.");



use Sistema_Hospitalario

db.MedicosYPersonal.insertMany([
  // Hospital ID: 4 (HIC) - Bloque 4/5

  // Director General (1)
  { numero_colegiatura: "001004", nombre: "Director D HIC", salario: new Double("21000000.00"), telefono: "3001000004", hospital_id: 4, especialidad_id: 70 }, // Medicina General

  // Médicos Especialistas (33)
  { numero_colegiatura: "0020100", nombre: "Dr. Andrea Rojas", salario: new Double("10000000.00"), telefono: "3011000100", hospital_id: 4, especialidad_id: 1 }, // Cirugía General
  { numero_colegiatura: "0020101", nombre: "Dra. Carlos Castro", salario: new Double("9500000.00"), telefono: "3011000101", hospital_id: 4, especialidad_id: 2 }, // Cirugía Cardiovascular
  { numero_colegiatura: "0020102", nombre: "Dr. Isabella Pardo", salario: new Double("10200000.00"), telefono: "3011000102", hospital_id: 4, especialidad_id: 3 }, // Cirugía Vascular
  { numero_colegiatura: "0020103", nombre: "Dra. Daniel Ramos", salario: new Double("9800000.00"), telefono: "3011000103", hospital_id: 4, especialidad_id: 4 }, // Neurocirugía
  { numero_colegiatura: "0020104", nombre: "Dr. Sofia Morales", salario: new Double("9300000.00"), telefono: "3011000104", hospital_id: 4, especialidad_id: 5 }, // Ortopedia
  { numero_colegiatura: "0020105", nombre: "Dra. Jorge Ortiz", salario: new Double("9900000.00"), telefono: "3011000105", hospital_id: 4, especialidad_id: 6 }, // Pediatría
  { numero_colegiatura: "0020106", nombre: "Dr. Laura Pérez", salario: new Double("9400000.00"), telefono: "3011000106", hospital_id: 4, especialidad_id: 7 }, // Urología
  { numero_colegiatura: "0020107", nombre: "Dra. Ricardo Vega", salario: new Double("10100000.00"), telefono: "3011000107", hospital_id: 4, especialidad_id: 8 }, // Oftalmología
  { numero_colegiatura: "0020108", nombre: "Dr. Valeria Gómez", salario: new Double("9600000.00"), telefono: "3011000108", hospital_id: 4, especialidad_id: 9 }, // Otorrinolaringología
  { numero_colegiatura: "0020109", nombre: "Dra. Andrés Pinto", salario: new Double("10300000.00"), telefono: "3011000109", hospital_id: 4, especialidad_id: 10 }, // Ginecología
  { numero_colegiatura: "0020110", nombre: "Dr. Patricia Herrera", salario: new Double("9700000.00"), telefono: "3011000110", hospital_id: 4, especialidad_id: 11 }, // Cirugía Plástica
  { numero_colegiatura: "0020111", nombre: "Dra. Gabriel Núñez", salario: new Double("9200000.00"), telefono: "3011000111", hospital_id: 4, especialidad_id: 20 }, // Medicina Interna
  { numero_colegiatura: "0020112", nombre: "Dr. Mariana Acosta", salario: new Double("9850000.00"), telefono: "3011000112", hospital_id: 4, especialidad_id: 21 }, // Gastroenterología
  { numero_colegiatura: "0020113", nombre: "Dra. Esteban Romero", salario: new Double("10050000.00"), telefono: "3011000113", hospital_id: 4, especialidad_id: 22 }, // Cardiología
  { numero_colegiatura: "0020114", nombre: "Dr. Juan Camargo", salario: new Double("9450000.00"), telefono: "3011000114", hospital_id: 4, especialidad_id: 23 }, // Electrofisiología Cardíaca
  { numero_colegiatura: "0020115", nombre: "Dra. Luisa Peña", salario: new Double("9950000.00"), telefono: "3011000115", hospital_id: 4, especialidad_id: 24 }, // Neurología
  { numero_colegiatura: "0020116", nombre: "Dr. Felipe Suárez", salario: new Double("9550000.00"), telefono: "3011000116", hospital_id: 4, especialidad_id: 25 }, // Endocrinología
  { numero_colegiatura: "0020117", nombre: "Dra. Natalia Guzmán", salario: new Double("10150000.00"), telefono: "3011000117", hospital_id: 4, especialidad_id: 26 }, // Neumología
  { numero_colegiatura: "0020118", nombre: "Dr. Roberto Castro", salario: new Double("9650000.00"), telefono: "3011000118", hospital_id: 4, especialidad_id: 27 }, // Nefrología
  { numero_colegiatura: "0020119", nombre: "Dra. Valeria Gómez", salario: new Double("10350000.00"), telefono: "3011000119", hospital_id: 4, especialidad_id: 28 }, // Reumatología
  { numero_colegiatura: "0020120", nombre: "Dr. Andrés Pinto", salario: new Double("9750000.00"), telefono: "3011000120", hospital_id: 4, especialidad_id: 29 }, // Hematología
  { numero_colegiatura: "0020121", nombre: "Dra. Marcela Londoño", salario: new Double("9250000.00"), telefono: "3011000121", hospital_id: 4, especialidad_id: 30 }, // Oncología
  { numero_colegiatura: "0020122", nombre: "Dr. Daniel Jiménez", salario: new Double("9800000.00"), telefono: "3011000122", hospital_id: 4, especialidad_id: 31 }, // Geriatría
  { numero_colegiatura: "0020123", nombre: "Dra. Paula Andrea Pinto", salario: new Double("10000000.00"), telefono: "3011000123", hospital_id: 4, especialidad_id: 32 }, // Infectología
  { numero_colegiatura: "0020124", nombre: "Dr. Mario Bustamante", salario: new Double("9400000.00"), telefono: "3011000124", hospital_id: 4, especialidad_id: 33 }, // Medicina Intensiva
  { numero_colegiatura: "0020125", nombre: "Dra. Luisa Fernanda Díaz", salario: new Double("9900000.00"), telefono: "3011000125", hospital_id: 4, especialidad_id: 34 }, // Medicina Nuclear
  { numero_colegiatura: "0020126", nombre: "Dr. Juan Esteban Gómez", salario: new Double("9500000.00"), telefono: "3011000126", hospital_id: 4, especialidad_id: 40 }, // Dermatología
  { numero_colegiatura: "0020127", nombre: "Dra. Ana Milena Rojas", salario: new Double("10100000.00"), telefono: "3011000127", hospital_id: 4, especialidad_id: 41 }, // Alergología
  { numero_colegiatura: "0020128", nombre: "Dr. Santiago Duque", salario: new Double("9600000.00"), telefono: "3011000128", hospital_id: 4, especialidad_id: 50 }, // Radiología
  { numero_colegiatura: "0020129", nombre: "Dra. Isabella García", salario: new Double("10300000.00"), telefono: "3011000129", hospital_id: 4, especialidad_id: 51 }, // Anestesiología
  { numero_colegiatura: "0020130", nombre: "Dr. Miguel Ángel Quintero", salario: new Double("9700000.00"), telefono: "3011000130", hospital_id: 4, especialidad_id: 52 }, // Hemodinamia
  { numero_colegiatura: "0020131", nombre: "Dra. Andrea Reyes", salario: new Double("9200000.00"), telefono: "3011000131", hospital_id: 4, especialidad_id: 72 }, // Medicina del Deporte
  { numero_colegiatura: "0020132", nombre: "Dr. Pablo Estrada", salario: new Double("9850000.00"), telefono: "3011000132", hospital_id: 4, especialidad_id: 80 }, // Cuidados Paliativos

  // Enfermeros/as (8)
  { numero_colegiatura: "003025", nombre: "Enf. Felipe Vega", salario: new Double("3150000.00"), telefono: "3021000025", hospital_id: 4, especialidad_id: 70 },
  { numero_colegiatura: "003026", nombre: "Enf. Antonia Rivera", salario: new Double("3450000.00"), telefono: "3021000026", hospital_id: 4, especialidad_id: 70 },
  { numero_colegiatura: "003027", nombre: "Enf. Juan David Ortiz", salario: new Double("3050000.00"), telefono: "3021000027", hospital_id: 4, especialidad_id: 70 },
  { numero_colegiatura: "003028", nombre: "Enf. Paula Daza", salario: new Double("3600000.00"), telefono: "3021000028", hospital_id: 4, especialidad_id: 70 },
  { numero_colegiatura: "003029", nombre: "Enf. Sergio Ochoa", salario: new Double("2950000.00"), telefono: "3021000029", hospital_id: 4, especialidad_id: 70 },
  { numero_colegiatura: "003030", nombre: "Enf. Gabriela Soto", salario: new Double("3250000.00"), telefono: "3021000030", hospital_id: 4, especialidad_id: 70 },
  { numero_colegiatura: "003031", nombre: "Enf. Esteban Niño", salario: new Double("3550000.00"), telefono: "3021000031", hospital_id: 4, especialidad_id: 70 },
  { numero_colegiatura: "003032", nombre: "Enf. Valeria Marín", salario: new Double("3000000.00"), telefono: "3021000032", hospital_id: 4, especialidad_id: 70 },

  // Personal Administrativo (5)
  { numero_colegiatura: "004016", nombre: "Adm. Claudia Paz", salario: new Double("2100000.00"), telefono: "3031000016", hospital_id: 4, especialidad_id: 63 },
  { numero_colegiatura: "004017", nombre: "Adm. Héctor Vega", salario: new Double("2400000.00"), telefono: "3031000017", hospital_id: 4, especialidad_id: 63 },
  { numero_colegiatura: "004018", nombre: "Adm. Gina Castro", salario: new Double("1800000.00"), telefono: "3031000018", hospital_id: 4, especialidad_id: 63 },
  { numero_colegiatura: "004019", nombre: "Adm. Raúl Torres", salario: new Double("2050000.00"), telefono: "3031000019", hospital_id: 4, especialidad_id: 63 },
  { numero_colegiatura: "004020", nombre: "Adm. Brenda Arias", salario: new Double("2350000.00"), telefono: "3031000020", hospital_id: 4, especialidad_id: 63 },

  // Personal de Mantenimiento (3)
  { numero_colegiatura: "00510", nombre: "Mant. Jorge Polo", salario: new Double("1450000.00"), telefono: "3041000010", hospital_id: 4, especialidad_id: 70 },
  { numero_colegiatura: "00511", nombre: "Mant. Martha Cruz", salario: new Double("1650000.00"), telefono: "3041000011", hospital_id: 4, especialidad_id: 70 },
  { numero_colegiatura: "00512", nombre: "Mant. Diego Peña", salario: new Double("1250000.00"), telefono: "3041000012", hospital_id: 4, especialidad_id: 70 }
]);

print("Se han insertado 50 documentos para el Hospital ID 4 en MedicosYPersonal.");

db.MedicosYPersonal.insertMany([
  // Hospital ID: 5 (Hospital Internacional de Colombia) - Bloque 5/5

  // Director General (1)
  { numero_colegiatura: "001005", nombre: "Director E HIC Intern.", salario: new Double("25000000.00"), telefono: "3001000005", hospital_id: 5, especialidad_id: 70 }, // Medicina General

  // Médicos Especialistas (33)
  { numero_colegiatura: "0020133", nombre: "Dr. Ana Sofía Pérez", salario: new Double("11500000.00"), telefono: "3011000133", hospital_id: 5, especialidad_id: 1 }, // Cirugía General
  { numero_colegiatura: "0020134", nombre: "Dra. Luis Fernando Soto", salario: new Double("10800000.00"), telefono: "3011000134", hospital_id: 5, especialidad_id: 20 }, // Medicina Interna
  { numero_colegiatura: "0020135", nombre: "Dr. Laura Victoria Díaz", salario: new Double("12000000.00"), telefono: "3011000135", hospital_id: 5, especialidad_id: 24 }, // Neurología
  { numero_colegiatura: "0020136", nombre: "Dra. Pedro José Ramírez", salario: new Double("11200000.00"), telefono: "3011000136", hospital_id: 5, especialidad_id: 5 }, // Ortopedia y Traumatología
  { numero_colegiatura: "0020137", nombre: "Dr. María Fernanda Gómez", salario: new Double("10500000.00"), telefono: "3011000137", hospital_id: 5, especialidad_id: 25 }, // Endocrinología
  { numero_colegiatura: "0020138", nombre: "Dra. Juan Esteban López", salario: new Double("11800000.00"), telefono: "3011000138", hospital_id: 5, especialidad_id: 7 }, // Urología
  { numero_colegiatura: "0020139", nombre: "Dr. Natalia Andrea Giraldo", salario: new Double("10900000.00"), telefono: "3011000139", hospital_id: 5, especialidad_id: 8 }, // Oftalmología
  { numero_colegiatura: "0020140", nombre: "Dra. Sebastián Ruiz", salario: new Double("11600000.00"), telefono: "3011000140", hospital_id: 5, especialidad_id: 9 }, // Otorrinolaringología
  { numero_colegiatura: "0020141", nombre: "Dr. Valentina Marín", salario: new Double("10600000.00"), telefono: "3011000141", hospital_id: 5, especialidad_id: 30 }, // Oncología
  { numero_colegiatura: "0020142", nombre: "Dra. Miguel Ángel García", salario: new Double("11100000.00"), telefono: "3011000142", hospital_id: 5, especialidad_id: 4 }, // Neurocirugía
  { numero_colegiatura: "0020143", nombre: "Dr. Sofía Alejandra Torres", salario: new Double("10400000.00"), telefono: "3011000143", hospital_id: 5, especialidad_id: 10 }, // Pediatría
  { numero_colegiatura: "0020144", nombre: "Dra. Andrés Felipe Castro", salario: new Double("11900000.00"), telefono: "3011000144", hospital_id: 5, especialidad_id: 11 }, // Ginecología y Obstetricia
  { numero_colegiatura: "0020145", nombre: "Dr. Daniela Camila Rojas", salario: new Double("10700000.00"), telefono: "3011000145", hospital_id: 5, especialidad_id: 40 }, // Dermatología
  { numero_colegiatura: "0020146", nombre: "Dra. Camilo Andrés Salazar", salario: new Double("11400000.00"), telefono: "3011000146", hospital_id: 5, especialidad_id: 41 }, // Alergología
  { numero_colegiatura: "0020147", nombre: "Dr. Estefanía Carolina Morales", salario: new Double("10300000.00"), telefono: "3011000147", hospital_id: 5, especialidad_id: 21 }, // Gastroenterología
  { numero_colegiatura: "0020148", nombre: "Dra. Ricardo Javier Suárez", salario: new Double("11700000.00"), telefono: "3011000148", hospital_id: 5, especialidad_id: 50 }, // Radiología
  { numero_colegiatura: "0020149", nombre: "Dr. Catalina Andrea Ramos", salario: new Double("11000000.00"), telefono: "3011000149", hospital_id: 5, especialidad_id: 51 }, // Anestesiología
  { numero_colegiatura: "0020150", nombre: "Dra. Diego Alejandro Rincón", salario: new Double("11300000.00"), telefono: "3011000150", hospital_id: 5, especialidad_id: 52 }, // Hemodinamia
  { numero_colegiatura: "0020151", nombre: "Dr. Paula Cristina Varela", salario: new Double("10950000.00"), telefono: "3011000151", hospital_id: 5, especialidad_id: 72 }, // Medicina del Deporte
  { numero_colegiatura: "0020152", nombre: "Dra. José Daniel Rojas", salario: new Double("11550000.00"), telefono: "3011000152", hospital_id: 5, especialidad_id: 80 }, // Cuidados Paliativos
  { numero_colegiatura: "0020153", nombre: "Dr. María Camila Pineda", salario: new Double("10850000.00"), telefono: "3011000153", hospital_id: 5, especialidad_id: 81 }, // Geriatría
  { numero_colegiatura: "0020154", nombre: "Dra. Santiago Felipe Guzmán", salario: new Double("11750000.00"), telefono: "3011000154", hospital_id: 5, especialidad_id: 1 }, // Cirugía General
  { numero_colegiatura: "0020155", nombre: "Dr. Sara Melissa Vélez", salario: new Double("11050000.00"), telefono: "3011000155", hospital_id: 5, especialidad_id: 20 }, // Medicina Interna
  { numero_colegiatura: "0020156", nombre: "Dra. Julián Eduardo Sánchez", salario: new Double("11950000.00"), telefono: "3011000156", hospital_id: 5, especialidad_id: 24 }, // Neurología
  { numero_colegiatura: "0020157", nombre: "Dr. Natalia Carolina Rivera", salario: new Double("10750000.00"), telefono: "3011000157", hospital_id: 5, especialidad_id: 5 }, // Ortopedia y Traumatología
  { numero_colegiatura: "0020158", nombre: "Dra. Esteban Alejandro Torres", salario: new Double("11450000.00"), telefono: "3011000158", hospital_id: 5, especialidad_id: 25 }, // Endocrinología
  { numero_colegiatura: "0020159", nombre: "Dr. Alejandra María Estrada", salario: new Double("10900000.00"), telefono: "3011000159", hospital_id: 5, especialidad_id: 7 }, // Urología
  { numero_colegiatura: "0020160", nombre: "Dra. Camilo Andrés Restrepo", salario: new Double("11650000.00"), telefono: "3011000160", hospital_id: 5, especialidad_id: 8 }, // Oftalmología
  { numero_colegiatura: "0020161", nombre: "Dr. Sofía Isabel Salazar", salario: new Double("10650000.00"), telefono: "3011000161", hospital_id: 5, especialidad_id: 9 }, // Otorrinolaringología
  { numero_colegiatura: "0020162", nombre: "Dra. Daniel Sebastián Cárdenas", salario: new Double("11150000.00"), telefono: "3011000162", hospital_id: 5, especialidad_id: 30 }, // Oncología
  { numero_colegiatura: "0020163", nombre: "Dr. Ana María Pardo", salario: new Double("10450000.00"), telefono: "3011000163", hospital_id: 5, especialidad_id: 4 }, // Neurocirugía
  { numero_colegiatura: "0020164", nombre: "Dra. Christian David Guzmán", salario: new Double("11350000.00"), telefono: "3011000164", hospital_id: 5, especialidad_id: 10 }, // Pediatría
  { numero_colegiatura: "0020165", nombre: "Dr. Laura Catalina Montoya", salario: new Double("10550000.00"), telefono: "3011000165", hospital_id: 5, especialidad_id: 11 }, // Ginecología y Obstetricia

  // Enfermeros/as (8)
  { numero_colegiatura: "003033", nombre: "Enf. Paola Andrea Ortiz", salario: new Double("3350000.00"), telefono: "3021000033", hospital_id: 5, especialidad_id: 70 },
  { numero_colegiatura: "003034", nombre: "Enf. Juan Sebastián Silva", salario: new Double("2950000.00"), telefono: "3021000034", hospital_id: 5, especialidad_id: 70 },
  { numero_colegiatura: "003035", nombre: "Enf. María Camila Herrera", salario: new Double("3550000.00"), telefono: "3021000035", hospital_id: 5, especialidad_id: 70 },
  { numero_colegiatura: "003036", nombre: "Enf. Daniel Felipe Bernal", salario: new Double("3150000.00"), telefono: "3021000036", hospital_id: 5, especialidad_id: 70 },
  { numero_colegiatura: "003037", nombre: "Enf. Ana María Quintero", salario: new Double("3450000.00"), telefono: "3021000037", hospital_id: 5, especialidad_id: 70 },
  { numero_colegiatura: "003038", nombre: "Enf. Luis Miguel Sotomayor", salario: new Double("3050000.00"), telefono: "3021000038", hospital_id: 5, especialidad_id: 70 },
  { numero_colegiatura: "003039", nombre: "Enf. Sofía Alejandra Vargas", salario: new Double("3250000.00"), telefono: "3021000039", hospital_id: 5, especialidad_id: 70 },
  { numero_colegiatura: "003040", nombre: "Enf. Carlos Alberto Mora", salario: new Double("3650000.00"), telefono: "3021000040", hospital_id: 5, especialidad_id: 70 },

  // Personal Administrativo (5)
  { numero_colegiatura: "004021", nombre: "Adm. Laura Sofía Ríos", salario: new Double("2250000.00"), telefono: "3031000021", hospital_id: 5, especialidad_id: 63 },
  { numero_colegiatura: "004022", nombre: "Adm. Fernando Andrés Duque", salario: new Double("1950000.00"), telefono: "3031000022", hospital_id: 5, especialidad_id: 63 },
  { numero_colegiatura: "004023", nombre: "Adm. Valeria Isabel Giraldo", salario: new Double("2550000.00"), telefono: "3031000023", hospital_id: 5, especialidad_id: 63 },
  { numero_colegiatura: "004024", nombre: "Adm. Santiago José López", salario: new Double("2100000.00"), telefono: "3031000024", hospital_id: 5, especialidad_id: 63 },
  { numero_colegiatura: "004025", nombre: "Adm. Gabriela Alexandra Blanco", salario: new Double("2450000.00"), telefono: "3031000025", hospital_id: 5, especialidad_id: 63 },

  // Personal de Mantenimiento (3)
  { numero_colegiatura: "00513", nombre: "Mant. Miguel Ángel Salas", salario: new Double("1500000.00"), telefono: "3041000013", hospital_id: 5, especialidad_id: 70 },
  { numero_colegiatura: "00514", nombre: "Mant. Carolina Estefanía Vélez", salario: new Double("1400000.00"), telefono: "3041000014", hospital_id: 5, especialidad_id: 70 },
  { numero_colegiatura: "00515", nombre: "Mant. Juan Felipe Acosta", salario: new Double("1700000.00"), telefono: "3041000015", hospital_id: 5, especialidad_id: 70 }
]);

// 13. 

// ========================================
// SCRIPT PARA CREAR 100 PACIENTES POR HOSPITAL
// ========================================

print("=== CREANDO 100 PACIENTES POR HOSPITAL ===");

// Arrays de nombres y apellidos colombianos
var nombresHombres = [
    "Juan Carlos", "Luis Fernando", "Carlos Andrés", "Miguel Ángel", "José Antonio",
    "Diego Alejandro", "Andrés Felipe", "Jorge Alberto", "Ricardo Antonio", "Francisco Javier",
    "Daniel Eduardo", "Sebastián", "Alejandro", "Fernando José", "Roberto Carlos",
    "Mauricio Alberto", "Javier Alejandro", "Eduardo Andrés", "Hernando José", "Álvaro Enrique",
    "Gabriel Fernando", "Oscar David", "Nelson", "Hector Manuel", "Iván Darío",
    "Pedro Pablo", "Raúl Eduardo", "Emilio", "Ramón", "César Augusto",
    "Julio César", "Fabián", "Gonzalo", "Armando", "Édgar",
    "Wilson", "Jairo", "Gustavo", "Alberto", "Gilberto"
];

var nombresMujeres = [
    "María Elena", "Ana Lucía", "Sandra Milena", "Patricia Isabel", "Gloria Esperanza",
    "Diana Carolina", "Claudia Patricia", "Esperanza del Carmen", "Luz Marina", "Martha Cecilia",
    "Rosa María", "Carmen Alicia", "Blanca Estela", "Teresa", "Amparo",
    "Olga Lucía", "Nancy", "Beatriz Elena", "Consuelo", "Nubia",
    "Marlén", "Dora Inés", "Alba Lucía", "Miriam", "Stella",
    "Flor María", "Yolanda", "Rocío", "Gladys", "Aura María",
    "Ligia", "Clara Inés", "Marta Lucía", "Fabiola", "Graciela",
    "Norma", "Pilar", "Cecilia", "Lucía", "Aurora"
];

var apellidos = [
    "García", "Rodríguez", "González", "Hernández", "López", "Martínez", "Pérez", "Sánchez",
    "Ramírez", "Torres", "Flores", "Rivera", "Gómez", "Díaz", "Reyes", "Morales",
    "Jiménez", "Ruiz", "Herrera", "Medina", "Castro", "Vargas", "Ortiz", "Romero",
    "Álvarez", "Vásquez", "Moreno", "Castillo", "Gutiérrez", "Ramos", "Silva", "Mendoza",
    "Rojas", "Delgado", "Guerrero", "Peña", "Cruz", "Vega", "León", "Cortés",
    "Aguilar", "Serrano", "Suárez", "Contreras", "Cárdenas", "Mejía", "Acosta", "Valencia",
    "Salazar", "Pinzón", "Neira", "Osorio", "Cáceres", "Villanueva", "Restrepo", "Montoya",
    "Quintero", "Arias", "Castaño", "Duarte", "Molina", "Zapata", "Bedoya", "Cardona"
];

var ciudadesSantander = [
    "Bucaramanga", "Floridablanca", "Girón", "Piedecuesta", "San Gil", "Barrancabermeja",
    "Socorro", "Barbosa", "Málaga", "Vélez", "Sabana de Torres", "Puerto Wilches"
];

var calles = [
    "Carrera", "Calle", "Avenida", "Diagonal", "Transversal", "Circular"
];

var segurosDistribucion = {
    1: [1, 2, 3, 6, 8], // Hospital Universitario - Públicos y mixtos
    2: [4, 5, 6, 7], // Fundación Cardiovascular - Prepagadas y privadas
    3: [4, 5, 7], // Hospital Internacional - Prepagadas y privadas
    4: [2, 3, 8], // Hospital Los Comuneros - Públicos
    5: [8, 3, 2] // Hospital Local del Norte - Públicos principalmente
};

var especialidadesPorHospital = {
    1: [1, 2, 3, 4, 5], // HUS: Cirugía, Medicina Interna, Neurología, Traumatología, Endocrinología
    2: [6, 7, 14, 15], // FCV: Cardiología, Pediatría, Oncología, Neurocirugía
    3: [8, 9, 10], // HIC: Ginecología, Urología, Neumología
    4: [11, 2], // Los Comuneros: Radiología, Medicina Interna
    5: [12, 13] // Local del Norte: Medicina General, Urgencias
};

// Función para generar número de teléfono colombiano
function generarTelefono() {
    var prefijos = ["300", "301", "302", "310", "311", "312", "313", "314", "315", "316", "317", "318", "319", "320", "321", "322", "350", "351"];
    var prefijo = prefijos[Math.floor(Math.random() * prefijos.length)];
    var numero = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
    return prefijo + numero;
}

// Función para generar email
function generarEmail(nombre, apellido1, apellido2) {
    var dominios = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "unab.edu.co", "udes.edu.co"];
    var nombreLimpio = nombre.toLowerCase().replace(/\s+/g, '.').replace(/[áàäâ]/g, 'a').replace(/[éèëê]/g, 'e').replace(/[íìïî]/g, 'i').replace(/[óòöô]/g, 'o').replace(/[úùüû]/g, 'u').replace(/ñ/g, 'n');
    var apellidoLimpio = apellido1.toLowerCase().replace(/[áàäâ]/g, 'a').replace(/[éèëê]/g, 'e').replace(/[íìïî]/g, 'i').replace(/[óòöô]/g, 'o').replace(/[úùüû]/g, 'u').replace(/ñ/g, 'n');
    var dominio = dominios[Math.floor(Math.random() * dominios.length)];
    return nombreLimpio + "." + apellidoLimpio + Math.floor(Math.random() * 999) + "@" + dominio;
}

// Función para generar dirección
function generarDireccion() {
    var tipoCalle = calles[Math.floor(Math.random() * calles.length)];
    var numero1 = Math.floor(Math.random() * 50) + 1;
    var numero2 = Math.floor(Math.random() * 99) + 1;
    var numero3 = Math.floor(Math.random() * 99) + 1;
    return tipoCalle + " " + numero1 + " # " + numero2 + "-" + numero3;
}

// Función para generar código postal
function generarCodigoPostal() {
    return "68" + Math.floor(Math.random() * 9000 + 1000).toString();
}

// Función para obtener seguro aleatorio por hospital
function obtenerSeguroAleatorio(hospitalId) {
    var segurosDisponibles = segurosDistribucion[hospitalId];
    return segurosDisponibles[Math.floor(Math.random() * segurosDisponibles.length)];
}

// Función para obtener especialidad aleatoria por hospital
function obtenerEspecialidadAleatoria(hospitalId) {
    var especialidadesDisponibles = especialidadesPorHospital[hospitalId];
    return especialidadesDisponibles[Math.floor(Math.random() * especialidadesDisponibles.length)];
}

// Función para generar paciente
function generarPaciente(id, hospitalId) {
    var esHombre = Math.random() < 0.5;
    var nombre = esHombre ? 
        nombresHombres[Math.floor(Math.random() * nombresHombres.length)] :
        nombresMujeres[Math.floor(Math.random() * nombresMujeres.length)];
    
    var apellido1 = apellidos[Math.floor(Math.random() * apellidos.length)];
    var apellido2 = apellidos[Math.floor(Math.random() * apellidos.length)];
    var nombreCompleto = nombre + " " + apellido1 + " " + apellido2;
    
    return {
        _id: id,
        nombre: nombreCompleto,
        correo: generarEmail(nombre, apellido1, apellido2),
        telefono: generarTelefono(),
        hospital_id: hospitalId,
        seguro_medico_id: obtenerSeguroAleatorio(hospitalId),
        direccion_id: id, // Usamos el mismo ID para la dirección
        especialidad_id: obtenerEspecialidadAleatoria(hospitalId)
    };
}

// Función para generar dirección correspondiente
function generarDireccionCompleta(id) {
    return {
        _id: id,
        calle: generarDireccion(),
        ciudad: ciudadesSantander[Math.floor(Math.random() * ciudadesSantander.length)],
        codigo_postal: generarCodigoPostal()
    };
}

// ========================================
// CREAR PACIENTES Y DIRECCIONES
// ========================================

var hospitales = [
    {id: 1, nombre: "Hospital Universitario de Santander - HUS"},
    {id: 2, nombre: "Fundación Cardiovascular de Colombia - FCV"},
    {id: 3, nombre: "Hospital Internacional de Colombia - HIC"},
    {id: 4, nombre: "Hospital Los Comuneros"},
    {id: 5, nombre: "Hospital Local del Norte"}
];

// Limpiar datos existentes (opcional)
print("¿Desea limpiar pacientes y direcciones existentes? (Comentar estas líneas si no)");
// db.Paciente.deleteMany({});
// db.Direccion.deleteMany({});

var contadorId = 10000; // Empezamos desde 10000 para evitar conflictos

hospitales.forEach(function(hospital) {
    print("\n=== CREANDO PACIENTES PARA " + hospital.nombre.toUpperCase() + " ===");
    
    var pacientes = [];
    var direcciones = [];
    
    for (var i = 0; i < 100; i++) {
        contadorId++;
        var paciente = generarPaciente(contadorId, hospital.id);
        var direccion = generarDireccionCompleta(contadorId);
        
        pacientes.push(paciente);
        direcciones.push(direccion);
    }
    
    // Insertar pacientes
    try {
        db.Paciente.insertMany(pacientes);
        print("✅ 100 pacientes creados para " + hospital.nombre);
    } catch (e) {
        print("❌ Error insertando pacientes para " + hospital.nombre + ": " + e.message);
    }
    
    // Insertar direcciones
    try {
        db.Direccion.insertMany(direcciones);
        print("✅ 100 direcciones creadas para pacientes de " + hospital.nombre);
    } catch (e) {
        print("❌ Error insertando direcciones para " + hospital.nombre + ": " + e.message);
    }
    
    print("Rango de IDs usado: " + (contadorId - 99) + " - " + contadorId);
});

// ========================================
// VERIFICACIÓN FINAL
// ========================================

print("\n=== VERIFICACIÓN FINAL ===");

hospitales.forEach(function(hospital) {
    var totalPacientes = db.Paciente.count({hospital_id: hospital.id});
    print("Hospital " + hospital.nombre + ": " + totalPacientes + " pacientes");
});

var totalPacientes = db.Paciente.count();
var totalDirecciones = db.Direccion.count();

print("\nRESUMEN FINAL:");
print("Total de pacientes en la base de datos: " + totalPacientes);
print("Total de direcciones en la base de datos: " + totalDirecciones);

// Verificar distribución por seguros
print("\nDistribución por seguros médicos:");
db.Paciente.aggregate([
    {
        $group: {
            _id: "$seguro_medico_id",
            total: { $sum: 1 }
        }
    },
    {
        $lookup: {
            from: "Seguros_Medicos",
            localField: "_id",
            foreignField: "_id",
            as: "seguro_info"
        }
    },
    {
        $sort: { _id: 1 }
    }
]).forEach(function(doc) {
    var nombreSeguro = doc.seguro_info.length > 0 ? doc.seguro_info[0].nombre : "Desconocido";
    print("Seguro ID " + doc._id + " (" + nombreSeguro + "): " + doc.total + " pacientes");
});

print("\n=== SCRIPT COMPLETADO EXITOSAMENTE ===");

