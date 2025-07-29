// 1. Hospital
db.Hospital.insertMany([
  {
    _id: 1,
    nombre: "Hospital Universitario de Santander - HUS",
    director_id: "001001"
  },
  {
    _id: 2,
    nombre: "Fundación Cardiovascular de Colombia - FCV",
    director_id: "001002"
  },
  {
    _id: 3,
    nombre: "Hospital Internacional de Colombia - HIC",
    director_id: "001003"
  },
  {
    _id: 4,
    nombre: "Hospital Los Comuneros",
    director_id: "001004"
  },
  {
    _id: 5,
    nombre: "Hospital Local del Norte",
    director_id: "001005"
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

// 13. Paciente

db.Paciente.insertMany([{
  "_id": 1,
  "nombre": "Juan Pablo Pérez Castro",
  "correo": "juan.pablo.perez.castro@email.com",
  "telefono": "555-001-0001",
  "hospital_id": 1,
  "especialidad_id": 74,
  "seguro_medico_id": 5,
  "direccion_id": 1001
},
{
  "_id": 2,
  "nombre": "Ana María Gómez Torres",
  "correo": "ana.maria.gomez.torres@email.com",
  "telefono": "555-002-0002",
  "hospital_id": 1,
  "especialidad_id": 3,
  "seguro_medico_id": 3,
  "direccion_id": 1002
},
{
  "_id": 3,
  "nombre": "Luis Fernando Sánchez Díaz",
  "correo": "luis.fernando.sanchez.diaz@email.com",
  "telefono": "555-003-0003",
  "hospital_id": 1,
  "especialidad_id": 28,
  "seguro_medico_id": 2,
  "direccion_id": 1003
},
{
  "_id": 4,
  "nombre": "Sofía Alejandra Ramírez Vargas",
  "correo": "sofia.alejandra.ramirez.vargas@email.com",
  "telefono": "555-004-0004",
  "hospital_id": 1,
  "especialidad_id": 74,
  "seguro_medico_id": 1,
  "direccion_id": 1004
},
{
  "_id": 5,
  "nombre": "Carlos Alberto Díaz Molina",
  "correo": "carlos.alberto.diaz.molina@email.com",
  "telefono": "555-005-0005",
  "hospital_id": 1,
  "especialidad_id": 41,
  "seguro_medico_id": 4,
  "direccion_id": 1005
},
{
  "_id": 6,
  "nombre": "Valeria Isabel Rojas Herrera",
  "correo": "valeria.isabel.rojas.herrera@email.com",
  "telefono": "555-006-0006",
  "hospital_id": 1,
  "especialidad_id": 35,
  "seguro_medico_id": 1,
  "direccion_id": 1006
},
{
  "_id": 7,
  "nombre": "David Santiago Mora Salazar",
  "correo": "david.santiago.mora.salazar@email.com",
  "telefono": "555-007-0007",
  "hospital_id": 1,
  "especialidad_id": 15,
  "seguro_medico_id": 2,
  "direccion_id": 1007
},
{
  "_id": 8,
  "nombre": "Laura Camila Duque Castro",
  "correo": "laura.camila.duque.castro@email.com",
  "telefono": "555-008-0008",
  "hospital_id": 1,
  "especialidad_id": 80,
  "seguro_medico_id": 5,
  "direccion_id": 1008
},
{
  "_id": 9,
  "nombre": "Gabriel Alejandro Rincón Pineda",
  "correo": "gabriel.alejandro.rincon.pineda@email.com",
  "telefono": "555-009-0009",
  "hospital_id": 1,
  "especialidad_id": 3,
  "seguro_medico_id": 1,
  "direccion_id": 1009
},
{
  "_id": 10,
  "nombre": "Daniela Fernanda Ruiz García",
  "correo": "daniela.fernanda.ruiz.garcia@email.com",
  "telefono": "555-010-0010",
  "hospital_id": 1,
  "especialidad_id": 33,
  "seguro_medico_id": 4,
  "direccion_id": 1010
},
{
  "_id": 11,
  "nombre": "Andrés Felipe Marín López",
  "correo": "andres.felipe.marin.lopez@email.com",
  "telefono": "555-011-0011",
  "hospital_id": 1,
  "especialidad_id": 36,
  "seguro_medico_id": 1,
  "direccion_id": 1011
},
{
  "_id": 12,
  "nombre": "Carolina Andrea Pinzón Ordoñez",
  "correo": "carolina.andrea.pinzon.ordonez@email.com",
  "telefono": "555-012-0012",
  "hospital_id": 1,
  "especialidad_id": 52,
  "seguro_medico_id": 3,
  "direccion_id": 1012
},
{
  "_id": 13,
  "nombre": "Esteban José Sierra Pardo",
  "correo": "esteban.jose.sierra.pardo@email.com",
  "telefono": "555-013-0013",
  "hospital_id": 1,
  "especialidad_id": 78,
  "seguro_medico_id": 5,
  "direccion_id": 1013
},
{
  "_id": 14,
  "nombre": "Camila Victoria Giraldo Torres",
  "correo": "camila.victoria.giraldo.torres@email.com",
  "telefono": "555-014-0014",
  "hospital_id": 1,
  "especialidad_id": 56,
  "seguro_medico_id": 3,
  "direccion_id": 1014
},
{
  "_id": 15,
  "nombre": "Miguel Ángel Vélez Suárez",
  "correo": "miguel.angel.velez.suarez@email.com",
  "telefono": "555-015-0015",
  "hospital_id": 1,
  "especialidad_id": 36,
  "seguro_medico_id": 5,
  "direccion_id": 1015
},
{
  "_id": 16,
  "nombre": "Alejandra Sofía Salazar Restrepo",
  "correo": "alejandra.sofia.salazar.restrepo@email.com",
  "telefono": "555-016-0016",
  "hospital_id": 1,
  "especialidad_id": 48,
  "seguro_medico_id": 1,
  "direccion_id": 1016
},
{
  "_id": 17,
  "nombre": "Sebastián Andrés Quintero Ortiz",
  "correo": "sebastian.andres.quintero.ortiz@email.com",
  "telefono": "555-017-0017",
  "hospital_id": 1,
  "especialidad_id": 37,
  "seguro_medico_id": 2,
  "direccion_id": 1017
},
{
  "_id": 18,
  "nombre": "Mariana Nicole Medina Morales",
  "correo": "mariana.nicole.medina.morales@email.com",
  "telefono": "555-018-0018",
  "hospital_id": 1,
  "especialidad_id": 1,
  "seguro_medico_id": 5,
  "direccion_id": 1018
},
{
  "_id": 19,
  "nombre": "Felipe Antonio Vargas González",
  "correo": "felipe.antonio.vargas.gonzalez@email.com",
  "telefono": "555-019-0019",
  "hospital_id": 1,
  "especialidad_id": 56,
  "seguro_medico_id": 5,
  "direccion_id": 1019
},
{
  "_id": 20,
  "nombre": "Gabriela Sofía Restrepo Cardona",
  "correo": "gabriela.sofia.restrepo.cardona@email.com",
  "telefono": "555-020-0020",
  "hospital_id": 1,
  "especialidad_id": 14,
  "seguro_medico_id": 3,
  "direccion_id": 1020
},
{
  "_id": 21,
  "nombre": "Santiago Nicolás Carmona Betancourt",
  "correo": "santiago.nicolas.carmona.betancourt@email.com",
  "telefono": "555-021-0021",
  "hospital_id": 1,
  "especialidad_id": 12,
  "seguro_medico_id": 4,
  "direccion_id": 1021
},
{
  "_id": 22,
  "nombre": "Natalia Andrea Escobar Roldán",
  "correo": "natalia.andrea.escobar.roldan@email.com",
  "telefono": "555-022-0022",
  "hospital_id": 1,
  "especialidad_id": 11,
  "seguro_medico_id": 1,
  "direccion_id": 1022
},
{
  "_id": 23,
  "nombre": "Juan Esteban Palacio Vélez",
  "correo": "juan.esteban.palacio.velez@email.com",
  "telefono": "555-023-0023",
  "hospital_id": 1,
  "especialidad_id": 76,
  "seguro_medico_id": 5,
  "direccion_id": 1023
},
{
  "_id": 24,
  "nombre": "Isabella Sofía Arango Patiño",
  "correo": "isabella.sofia.arango.patino@email.com",
  "telefono": "555-024-0024",
  "hospital_id": 1,
  "especialidad_id": 79,
  "seguro_medico_id": 1,
  "direccion_id": 1024
},
{
  "_id": 25,
  "nombre": "Diego Alejandro Osorio Rendón",
  "correo": "diego.alejandro.osorio.rendon@email.com",
  "telefono": "555-025-0025",
  "hospital_id": 1,
  "especialidad_id": 7,
  "seguro_medico_id": 1,
  "direccion_id": 1025
},
{
  "_id": 26,
  "nombre": "Manuela Camila Castro Palacio",
  "correo": "manuela.camila.castro.palacio@email.com",
  "telefono": "555-026-0026",
  "hospital_id": 1,
  "especialidad_id": 31,
  "seguro_medico_id": 3,
  "direccion_id": 1026
},
{
  "_id": 27,
  "nombre": "José Manuel Valencia Arias",
  "correo": "jose.manuel.valencia.arias@email.com",
  "telefono": "555-027-0027",
  "hospital_id": 1,
  "especialidad_id": 48,
  "seguro_medico_id": 4,
  "direccion_id": 1027
},
{
  "_id": 28,
  "nombre": "Valentina Andrea Yepes Marín",
  "correo": "valentina.andrea.yepes.marin@email.com",
  "telefono": "555-028-0028",
  "hospital_id": 1,
  "especialidad_id": 30,
  "seguro_medico_id": 5,
  "direccion_id": 1028
},
{
  "_id": 29,
  "nombre": "Ricardo Antonio Agudelo Franco",
  "correo": "ricardo.antonio.agudelo.franco@email.com",
  "telefono": "555-029-0029",
  "hospital_id": 1,
  "especialidad_id": 80,
  "seguro_medico_id": 4,
  "direccion_id": 1029
},
{
  "_id": 30,
  "nombre": "Paula Andrea Soto Mejía",
  "correo": "paula.andrea.soto.mejia@email.com",
  "telefono": "555-030-0030",
  "hospital_id": 1,
  "especialidad_id": 23,
  "seguro_medico_id": 1,
  "direccion_id": 1030
},
{
  "_id": 31,
  "nombre": "Juan David Cárdenas Rojas",
  "correo": "juan.david.cardenas.rojas@email.com",
  "telefono": "555-031-0031",
  "hospital_id": 1,
  "especialidad_id": 63,
  "seguro_medico_id": 1,
  "direccion_id": 1031
},
{
  "_id": 32,
  "nombre": "María Fernanda Alzate Toro",
  "correo": "maria.fernanda.alzate.toro@email.com",
  "telefono": "555-032-0032",
  "hospital_id": 1,
  "especialidad_id": 13,
  "seguro_medico_id": 1,
  "direccion_id": 1032
},
{
  "_id": 33,
  "nombre": "Santiago José Londoño Alzate",
  "correo": "santiago.jose.londono.alzate@email.com",
  "telefono": "555-033-0033",
  "hospital_id": 1,
  "especialidad_id": 61,
  "seguro_medico_id": 4,
  "direccion_id": 1033
},
{
  "_id": 34,
  "nombre": "Laura Sofía Tamayo Betancur",
  "correo": "laura.sofia.tamayo.betancur@email.com",
  "telefono": "555-034-0034",
  "hospital_id": 1,
  "especialidad_id": 67,
  "seguro_medico_id": 1,
  "direccion_id": 1034
},
{
  "_id": 35,
  "nombre": "Felipe Alejandro Ríos Cano",
  "correo": "felipe.alejandro.rios.cano@email.com",
  "telefono": "555-035-0035",
  "hospital_id": 1,
  "especialidad_id": 64,
  "seguro_medico_id": 5,
  "direccion_id": 1035
},
{
  "_id": 36,
  "nombre": "María Paula Orozco Serna",
  "correo": "maria.paula.orozco.serna@email.com",
  "telefono": "555-036-0036",
  "hospital_id": 1,
  "especialidad_id": 77,
  "seguro_medico_id": 1,
  "direccion_id": 1036
},
{
  "_id": 37,
  "nombre": "Daniel Sebastián Mesa Bedoya",
  "correo": "daniel.sebastian.mesa.bedoya@email.com",
  "telefono": "555-037-0037",
  "hospital_id": 1,
  "especialidad_id": 17,
  "seguro_medico_id": 1,
  "direccion_id": 1037
},
{
  "_id": 38,
  "nombre": "Andrea Catalina Sierra Palacio",
  "correo": "andrea.catalina.sierra.palacio@email.com",
  "telefono": "555-038-0038",
  "hospital_id": 1,
  "especialidad_id": 58,
  "seguro_medico_id": 3,
  "direccion_id": 1038
},
{
  "_id": 39,
  "nombre": "Julián David Quintero Montoya",
  "correo": "julian.david.quintero.montoya@email.com",
  "telefono": "555-039-0039",
  "hospital_id": 1,
  "especialidad_id": 39,
  "seguro_medico_id": 5,
  "direccion_id": 1039
},
{
  "_id": 40,
  "nombre": "Sara Cristina Castaño Giraldo",
  "correo": "sara.cristina.castano.giraldo@email.com",
  "telefono": "555-040-0040",
  "hospital_id": 1,
  "especialidad_id": 18,
  "seguro_medico_id": 2,
  "direccion_id": 1040
},
{
  "_id": 41,
  "nombre": "Emmanuel Alejandro Henao Perea",
  "correo": "emmanuel.alejandro.henao.perea@email.com",
  "telefono": "555-041-0041",
  "hospital_id": 1,
  "especialidad_id": 79,
  "seguro_medico_id": 4,
  "direccion_id": 1041
},
{
  "_id": 42,
  "nombre": "Valentina Sofía Montoya Cardona",
  "correo": "valentina.sofia.montoya.cardona@email.com",
  "telefono": "555-042-0042",
  "hospital_id": 1,
  "especialidad_id": 78,
  "seguro_medico_id": 2,
  "direccion_id": 1042
},
{
  "_id": 43,
  "nombre": "Pablo Andrés Posada Vélez",
  "correo": "pablo.andres.posada.velez@email.com",
  "telefono": "555-043-0043",
  "hospital_id": 1,
  "especialidad_id": 40,
  "seguro_medico_id": 4,
  "direccion_id": 1043
},
{
  "_id": 44,
  "nombre": "Isabella María Marín Sánchez",
  "correo": "isabella.maria.marin.sanchez@email.com",
  "telefono": "555-044-0044",
  "hospital_id": 1,
  "especialidad_id": 28,
  "seguro_medico_id": 3,
  "direccion_id": 1044
},
{
  "_id": 45,
  "nombre": "Juan Camilo Botero Mejía",
  "correo": "juan.camilo.botero.mejia@email.com",
  "telefono": "555-045-0045",
  "hospital_id": 1,
  "especialidad_id": 19,
  "seguro_medico_id": 3,
  "direccion_id": 1045
},
{
  "_id": 46,
  "nombre": "Natalia Carolina Franco Acevedo",
  "correo": "natalia.carolina.franco.acevedo@email.com",
  "telefono": "555-046-0046",
  "hospital_id": 1,
  "especialidad_id": 53,
  "seguro_medico_id": 1,
  "direccion_id": 1046
},
{
  "_id": 47,
  "nombre": "Miguel David Giraldo Pineda",
  "correo": "miguel.david.giraldo.pineda@email.com",
  "telefono": "555-047-0047",
  "hospital_id": 1,
  "especialidad_id": 68,
  "seguro_medico_id": 1,
  "direccion_id": 1047
},
{
  "_id": 48,
  "nombre": "Luciana Gabriela Alzate Restrepo",
  "correo": "luciana.gabriela.alzate.restrepo@email.com",
  "telefono": "555-048-0048",
  "hospital_id": 1,
  "especialidad_id": 49,
  "seguro_medico_id": 3,
  "direccion_id": 1048
},
{
  "_id": 49,
  "nombre": "Alejandro José Zuluaga Rivera",
  "correo": "alejandro.jose.zuluaga.rivera@email.com",
  "telefono": "555-049-0049",
  "hospital_id": 1,
  "especialidad_id": 40,
  "seguro_medico_id": 1,
  "direccion_id": 1049
},
{
  "_id": 50,
  "nombre": "Mariana Alejandra Mesa Herrera",
  "correo": "mariana.alejandra.mesa.herrera@email.com",
  "telefono": "555-050-0050",
  "hospital_id": 1,
  "especialidad_id": 13,
  "seguro_medico_id": 1,
  "direccion_id": 1050
},
{
  "_id": 51,
  "nombre": "Felipe Sebastián Ortiz Vélez",
  "correo": "felipe.sebastian.ortiz.velez@email.com",
  "telefono": "555-051-0051",
  "hospital_id": 1,
  "especialidad_id": 42,
  "seguro_medico_id": 2,
  "direccion_id": 1051
},
{
  "_id": 52,
  "nombre": "Laura Victoria Betancur Arcila",
  "correo": "laura.victoria.betancur.arcila@email.com",
  "telefono": "555-052-0052",
  "hospital_id": 1,
  "especialidad_id": 76,
  "seguro_medico_id": 4,
  "direccion_id": 1052
},
{
  "_id": 53,
  "nombre": "Andrés Mauricio Cano Lopera",
  "correo": "andres.mauricio.cano.lopera@email.com",
  "telefono": "555-053-0053",
  "hospital_id": 1,
  "especialidad_id": 54,
  "seguro_medico_id": 3,
  "direccion_id": 1053
},
{
  "_id": 54,
  "nombre": "Sofía Valentina Jaramillo Cardona",
  "correo": "sofia.valentina.jaramillo.cardona@email.com",
  "telefono": "555-054-0054",
  "hospital_id": 1,
  "especialidad_id": 1,
  "seguro_medico_id": 3,
  "direccion_id": 1054
},
{
  "_id": 55,
  "nombre": "Juan David Yepes Sierra",
  "correo": "juan.david.yepes.sierra@email.com",
  "telefono": "555-055-0055",
  "hospital_id": 1,
  "especialidad_id": 79,
  "seguro_medico_id": 4,
  "direccion_id": 1055
},
{
  "_id": 56,
  "nombre": "Valeria Sofía Gaviria Salazar",
  "correo": "valeria.sofia.gaviria.salazar@email.com",
  "telefono": "555-056-0056",
  "hospital_id": 1,
  "especialidad_id": 9,
  "seguro_medico_id": 2,
  "direccion_id": 1056
},
{
  "_id": 57,
  "nombre": "Daniel Felipe Monsalve Restrepo",
  "correo": "daniel.felipe.monsalve.restrepo@email.com",
  "telefono": "555-057-0057",
  "hospital_id": 1,
  "especialidad_id": 16,
  "seguro_medico_id": 3,
  "direccion_id": 1057
},
{
  "_id": 58,
  "nombre": "Andrea Sofía Arango Londoño",
  "correo": "andrea.sofia.arango.londono@email.com",
  "telefono": "555-058-0058",
  "hospital_id": 1,
  "especialidad_id": 49,
  "seguro_medico_id": 3,
  "direccion_id": 1058
},
{
  "_id": 59,
  "nombre": "Santiago Esteban Pardo Osorio",
  "correo": "santiago.esteban.pardo.osorio@email.com",
  "telefono": "555-059-0059",
  "hospital_id": 1,
  "especialidad_id": 14,
  "seguro_medico_id": 5,
  "direccion_id": 1059
},
{
  "_id": 60,
  "nombre": "Sara Marcela Toro Sánchez",
  "correo": "sara.marcela.toro.sanchez@email.com",
  "telefono": "555-060-0060",
  "hospital_id": 1,
  "especialidad_id": 42,
  "seguro_medico_id": 3,
  "direccion_id": 1060
},
{
  "_id": 61,
  "nombre": "Miguel Ángel Vélez Duque",
  "correo": "miguel.angel.velez.duque@email.com",
  "telefono": "555-061-0061",
  "hospital_id": 1,
  "especialidad_id": 14,
  "seguro_medico_id": 3,
  "direccion_id": 1061
},
{
  "_id": 62,
  "nombre": "Lucía Fernanda Zapata Mejía",
  "correo": "lucia.fernanda.zapata.mejia@email.com",
  "telefono": "555-062-0062",
  "hospital_id": 1,
  "especialidad_id": 78,
  "seguro_medico_id": 5,
  "direccion_id": 1062
},
{
  "_id": 63,
  "nombre": "José David Roldán Carmona",
  "correo": "jose.david.roldan.carmona@email.com",
  "telefono": "555-063-0063",
  "hospital_id": 1,
  "especialidad_id": 3,
  "seguro_medico_id": 2,
  "direccion_id": 1063
},
{
  "_id": 64,
  "nombre": "Valentina Isabel Pineda Betancur",
  "correo": "valentina.isabel.pineda.betancur@email.com",
  "telefono": "555-064-0064",
  "hospital_id": 1,
  "especialidad_id": 62,
  "seguro_medico_id": 5,
  "direccion_id": 1064
},
{
  "_id": 65,
  "nombre": "Carlos Daniel Quintero Álvarez",
  "correo": "carlos.daniel.quintero.alvarez@email.com",
  "telefono": "555-065-0065",
  "hospital_id": 1,
  "especialidad_id": 8,
  "seguro_medico_id": 5,
  "direccion_id": 1065
},
{
  "_id": 66,
  "nombre": "Andrea Camila Puerta Restrepo",
  "correo": "andrea.camila.puerta.restrepo@email.com",
  "telefono": "555-066-0066",
  "hospital_id": 1,
  "especialidad_id": 3,
  "seguro_medico_id": 1,
  "direccion_id": 1066
},
{
  "_id": 67,
  "nombre": "Julián Andrés Montoya Ceballos",
  "correo": "julian.andres.montoya.ceballos@email.com",
  "telefono": "555-067-0067",
  "hospital_id": 1,
  "especialidad_id": 78,
  "seguro_medico_id": 4,
  "direccion_id": 1067
},
{
  "_id": 68,
  "nombre": "Sara Sofía Mejía Franco",
  "correo": "sara.sofia.mejia.franco@email.com",
  "telefono": "555-068-0068",
  "hospital_id": 1,
  "especialidad_id": 60,
  "seguro_medico_id": 3,
  "direccion_id": 1068
},
{
  "_id": 69,
  "nombre": "Felipe Antonio Betancur Marín",
  "correo": "felipe.antonio.betancur.marin@email.com",
  "telefono": "555-069-0069",
  "hospital_id": 1,
  "especialidad_id": 66,
  "seguro_medico_id": 3,
  "direccion_id": 1069
},
{
  "_id": 70,
  "nombre": "Gabriela Alejandra Londoño Soto",
  "correo": "gabriela.alejandra.londono.soto@email.com",
  "telefono": "555-070-0070",
  "hospital_id": 1,
  "especialidad_id": 17,
  "seguro_medico_id": 2,
  "direccion_id": 1070
},
{
  "_id": 71,
  "nombre": "Santiago Nicolás Carmona Posada",
  "correo": "santiago.nicolas.carmona.posada@email.com",
  "telefono": "555-071-0071",
  "hospital_id": 1,
  "especialidad_id": 28,
  "seguro_medico_id": 3,
  "direccion_id": 1071
},
{
  "_id": 72,
  "nombre": "Natalia Andrea Escobar Ramírez",
  "correo": "natalia.andrea.escobar.ramirez@email.com",
  "telefono": "555-072-0072",
  "hospital_id": 1,
  "especialidad_id": 74,
  "seguro_medico_id": 5,
  "direccion_id": 1072
},
{
  "_id": 73,
  "nombre": "Juan Esteban Palacio Restrepo",
  "correo": "juan.esteban.palacio.restrepo@email.com",
  "telefono": "555-073-0073",
  "hospital_id": 1,
  "especialidad_id": 38,
  "seguro_medico_id": 1,
  "direccion_id": 1073
},
{
  "_id": 74,
  "nombre": "Isabella Sofía Arango Osorio",
  "correo": "isabella.sofia.arango.osorio@email.com",
  "telefono": "555-074-0074",
  "hospital_id": 1,
  "especialidad_id": 57,
  "seguro_medico_id": 3,
  "direccion_id": 1074
},
{
  "_id": 75,
  "nombre": "Diego Alejandro Osorio Sánchez",
  "correo": "diego.alejandro.osorio.sanchez@email.com",
  "telefono": "555-075-0075",
  "hospital_id": 1,
  "especialidad_id": 31,
  "seguro_medico_id": 3,
  "direccion_id": 1075
},
{
  "_id": 76,
  "nombre": "Manuela Camila Castro Vélez",
  "correo": "manuela.camila.castro.velez@email.com",
  "telefono": "555-076-0076",
  "hospital_id": 1,
  "especialidad_id": 44,
  "seguro_medico_id": 4,
  "direccion_id": 1076
},
{
  "_id": 77,
  "nombre": "José Manuel Valencia Díaz",
  "correo": "jose.manuel.valencia.diaz@email.com",
  "telefono": "555-077-0077",
  "hospital_id": 1,
  "especialidad_id": 71,
  "seguro_medico_id": 2,
  "direccion_id": 1077
},
{
  "_id": 78,
  "nombre": "Valentina Andrea Yepes Marín",
  "correo": "valentina.andrea.yepes.marin@email.com",
  "telefono": "555-078-0078",
  "hospital_id": 1,
  "especialidad_id": 30,
  "seguro_medico_id": 5,
  "direccion_id": 1078
},
{
  "_id": 79,
  "nombre": "Ricardo Antonio Agudelo Franco",
  "correo": "ricardo.antonio.agudelo.franco@email.com",
  "telefono": "555-079-0079",
  "hospital_id": 1,
  "especialidad_id": 17,
  "seguro_medico_id": 3,
  "direccion_id": 1079
},
{
  "_id": 80,
  "nombre": "Paula Andrea Soto Mejía",
  "correo": "paula.andrea.soto.mejia@email.com",
  "telefono": "555-080-0080",
  "hospital_id": 1,
  "especialidad_id": 47,
  "seguro_medico_id": 5,
  "direccion_id": 1080
},
{
  "_id": 81,
  "nombre": "Juan David Cárdenas Rojas",
  "correo": "juan.david.cardenas.rojas@email.com",
  "telefono": "555-081-0081",
  "hospital_id": 1,
  "especialidad_id": 5,
  "seguro_medico_id": 3,
  "direccion_id": 1081
},
{
  "_id": 82,
  "nombre": "María Fernanda Alzate Toro",
  "correo": "maria.fernanda.alzate.toro@email.com",
  "telefono": "555-082-0082",
  "hospital_id": 1,
  "especialidad_id": 78,
  "seguro_medico_id": 4,
  "direccion_id": 1082
},
{
  "_id": 83,
  "nombre": "Santiago José Londoño Alzate",
  "correo": "santiago.jose.londono.alzate@email.com",
  "telefono": "555-083-0083",
  "hospital_id": 1,
  "especialidad_id": 23,
  "seguro_medico_id": 3,
  "direccion_id": 1083
},
{
  "_id": 84,
  "nombre": "Laura Sofía Tamayo Betancur",
  "correo": "laura.sofia.tamayo.betancur@email.com",
  "telefono": "555-084-0084",
  "hospital_id": 1,
  "especialidad_id": 14,
  "seguro_medico_id": 1,
  "direccion_id": 1084
},
{
  "_id": 85,
  "nombre": "Felipe Alejandro Ríos Cano",
  "correo": "felipe.alejandro.rios.cano@email.com",
  "telefono": "555-085-0085",
  "hospital_id": 1,
  "especialidad_id": 17,
  "seguro_medico_id": 2,
  "direccion_id": 1085
},
{
  "_id": 86,
  "nombre": "María Paula Orozco Serna",
  "correo": "maria.paula.orozco.serna@email.com",
  "telefono": "555-086-0086",
  "hospital_id": 1,
  "especialidad_id": 16,
  "seguro_medico_id": 2,
  "direccion_id": 1086
},
{
  "_id": 87,
  "nombre": "Daniel Sebastián Mesa Bedoya",
  "correo": "daniel.sebastian.mesa.bedoya@email.com",
  "telefono": "555-087-0087",
  "hospital_id": 1,
  "especialidad_id": 55,
  "seguro_medico_id": 5,
  "direccion_id": 1087
},
{
  "_id": 88,
  "nombre": "Andrea Catalina Sierra Palacio",
  "correo": "andrea.catalina.sierra.palacio@email.com",
  "telefono": "555-088-0088",
  "hospital_id": 1,
  "especialidad_id": 74,
  "seguro_medico_id": 4,
  "direccion_id": 1088
},
{
  "_id": 89,
  "nombre": "Julián David Quintero Montoya",
  "correo": "julian.david.quintero.montoya@email.com",
  "telefono": "555-089-0089",
  "hospital_id": 1,
  "especialidad_id": 37,
  "seguro_medico_id": 1,
  "direccion_id": 1089
},
{
  "_id": 90,
  "nombre": "Sara Cristina Castaño Giraldo",
  "correo": "sara.cristina.castano.giraldo@email.com",
  "telefono": "555-090-0090",
  "hospital_id": 1,
  "especialidad_id": 26,
  "seguro_medico_id": 2,
  "direccion_id": 1090
},
{
  "_id": 91,
  "nombre": "Emmanuel Alejandro Henao Perea",
  "correo": "emmanuel.alejandro.henao.perea@email.com",
  "telefono": "555-091-0091",
  "hospital_id": 1,
  "especialidad_id": 70,
  "seguro_medico_id": 2,
  "direccion_id": 1091
},
{
  "_id": 92,
  "nombre": "Valentina Sofía Montoya Cardona",
  "correo": "valentina.sofia.montoya.cardona@email.com",
  "telefono": "555-092-0092",
  "hospital_id": 1,
  "especialidad_id": 19,
  "seguro_medico_id": 2,
  "direccion_id": 1092
},
{
  "_id": 93,
  "nombre": "Pablo Andrés Posada Vélez",
  "correo": "pablo.andres.posada.velez@email.com",
  "telefono": "555-093-0093",
  "hospital_id": 1,
  "especialidad_id": 72,
  "seguro_medico_id": 3,
  "direccion_id": 1093
},
{
  "_id": 94,
  "nombre": "Isabella María Marín Sánchez",
  "correo": "isabella.maria.marin.sanchez@email.com",
  "telefono": "555-094-0094",
  "hospital_id": 1,
  "especialidad_id": 35,
  "seguro_medico_id": 3,
  "direccion_id": 1094
},
{
  "_id": 95,
  "nombre": "Juan Camilo Botero Mejía",
  "correo": "juan.camilo.botero.mejia@email.com",
  "telefono": "555-095-0095",
  "hospital_id": 1,
  "especialidad_id": 36,
  "seguro_medico_id": 1,
  "direccion_id": 1095
},
{
  "_id": 96,
  "nombre": "Natalia Carolina Franco Acevedo",
  "correo": "natalia.carolina.franco.acevedo@email.com",
  "telefono": "555-096-0096",
  "hospital_id": 1,
  "especialidad_id": 21,
  "seguro_medico_id": 4,
  "direccion_id": 1096
},
{
  "_id": 97,
  "nombre": "Miguel David Giraldo Pineda",
  "correo": "miguel.david.giraldo.pineda@email.com",
  "telefono": "555-097-0097",
  "hospital_id": 1,
  "especialidad_id": 26,
  "seguro_medico_id": 3,
  "direccion_id": 1097
},
{
  "_id": 98,
  "nombre": "Luciana Gabriela Alzate Restrepo",
  "correo": "luciana.gabriela.alzate.restrepo@email.com",
  "telefono": "555-098-0098",
  "hospital_id": 1,
  "especialidad_id": 38,
  "seguro_medico_id": 4,
  "direccion_id": 1098
},
{
  "_id": 99,
  "nombre": "Alejandro José Zuluaga Rivera",
  "correo": "alejandro.jose.zuluaga.rivera@email.com",
  "telefono": "555-099-0099",
  "hospital_id": 1,
  "especialidad_id": 17,
  "seguro_medico_id": 4,
  "direccion_id": 1099
},
{
  "_id": 100,
  "nombre": "Mariana Alejandra Mesa Herrera",
  "correo": "mariana.alejandra.mesa.herrera@email.com",
  "telefono": "555-100-0100",
  "hospital_id": 1,
  "especialidad_id": 50,
  "seguro_medico_id": 1,
  "direccion_id": 1100
},
{
  "_id": 101,
  "nombre": "Pedro Antonio Vargas López",
  "correo": "pedro.antonio.vargas.lopez@email.com",
  "telefono": "555-101-0101",
  "hospital_id": 2,
  "especialidad_id": 79,
  "seguro_medico_id": 5,
  "direccion_id": 1101
},
{
  "_id": 102,
  "nombre": "Lucía Gabriela Mora Díaz",
  "correo": "lucia.gabriela.mora.diaz@email.com",
  "telefono": "555-102-0102",
  "hospital_id": 2,
  "especialidad_id": 13,
  "seguro_medico_id": 3,
  "direccion_id": 1102
},
{
  "_id": 103,
  "nombre": "Andrés Felipe Sánchez Reyes",
  "correo": "andres.felipe.sanchez.reyes@email.com",
  "telefono": "555-103-0103",
  "hospital_id": 2,
  "especialidad_id": 36,
  "seguro_medico_id": 5,
  "direccion_id": 1103
},
{
  "_id": 104,
  "nombre": "Sofía Valentina Ospina Blanco",
  "correo": "sofia.valentina.ospina.blanco@email.com",
  "telefono": "555-104-0104",
  "hospital_id": 2,
  "especialidad_id": 35,
  "seguro_medico_id": 5,
  "direccion_id": 1104
},
{
  "_id": 105,
  "nombre": "Diego Alejandro Ruiz Cardona",
  "correo": "diego.alejandro.ruiz.cardona@email.com",
  "telefono": "555-105-0105",
  "hospital_id": 2,
  "especialidad_id": 53,
  "seguro_medico_id": 2,
  "direccion_id": 1105
},
{
  "_id": 106,
  "nombre": "Mariana Catalina Giraldo Mejía",
  "correo": "mariana.catalina.giraldo.mejia@email.com",
  "telefono": "555-106-0106",
  "hospital_id": 2,
  "especialidad_id": 80,
  "seguro_medico_id": 2,
  "direccion_id": 1106
},
{
  "_id": 107,
  "nombre": "José Manuel Valencia Arias",
  "correo": "jose.manuel.valencia.arias@email.com",
  "telefono": "555-107-0107",
  "hospital_id": 2,
  "especialidad_id": 77,
  "seguro_medico_id": 3,
  "direccion_id": 1107
},
{
  "_id": 108,
  "nombre": "Gabriela Fernanda Duque Castro",
  "correo": "gabriela.fernanda.duque.castro@email.com",
  "telefono": "555-108-0108",
  "hospital_id": 2,
  "especialidad_id": 3,
  "seguro_medico_id": 2,
  "direccion_id": 1108
},
{
  "_id": 109,
  "nombre": "Daniel Santiago Rincón Pineda",
  "correo": "daniel.santiago.rincon.pineda@email.com",
  "telefono": "555-109-0109",
  "hospital_id": 2,
  "especialidad_id": 9,
  "seguro_medico_id": 4,
  "direccion_id": 1109
},
{
  "_id": 110,
  "nombre": "Valeria Isabel Rojas Herrera",
  "correo": "valeria.isabel.rojas.herrera@email.com",
  "telefono": "555-110-0110",
  "hospital_id": 2,
  "especialidad_id": 23,
  "seguro_medico_id": 5,
  "direccion_id": 1110
},
{
  "_id": 111,
  "nombre": "Juan Camilo Suárez Vélez",
  "correo": "juan.camilo.suarez.velez@email.com",
  "telefono": "555-111-0111",
  "hospital_id": 2,
  "especialidad_id": 10,
  "seguro_medico_id": 4,
  "direccion_id": 1111
},
{
  "_id": 112,
  "nombre": "Ana Sofía Patiño Cárdenas",
  "correo": "ana.sofia.patino.cardenas@email.com",
  "telefono": "555-112-0112",
  "hospital_id": 2,
  "especialidad_id": 15,
  "seguro_medico_id": 4,
  "direccion_id": 1112
},
{
  "_id": 113,
  "nombre": "Luis Miguel Betancur Ortiz",
  "correo": "luis.miguel.betancur.ortiz@email.com",
  "telefono": "555-113-0113",
  "hospital_id": 2,
  "especialidad_id": 53,
  "seguro_medico_id": 1,
  "direccion_id": 1113
},
{
  "_id": 114,
  "nombre": "Laura Cristina Quintero López",
  "correo": "laura.cristina.quintero.lopez@email.com",
  "telefono": "555-114-0114",
  "hospital_id": 2,
  "especialidad_id": 59,
  "seguro_medico_id": 3,
  "direccion_id": 1114
},
{
  "_id": 115,
  "nombre": "Carlos Eduardo Mesa Bedoya",
  "correo": "carlos.eduardo.mesa.bedoya@email.com",
  "telefono": "555-115-0115",
  "hospital_id": 2,
  "especialidad_id": 11,
  "seguro_medico_id": 4,
  "direccion_id": 1115
},
{
  "_id": 116,
  "nombre": "Sara Nicole Restrepo Montoya",
  "correo": "sara.nicole.restrepo.montoya@email.com",
  "telefono": "555-116-0116",
  "hospital_id": 2,
  "especialidad_id": 60,
  "seguro_medico_id": 4,
  "direccion_id": 1116
},
{
  "_id": 117,
  "nombre": "Sebastián José Ceballos Giraldo",
  "correo": "sebastian.jose.ceballos.giraldo@email.com",
  "telefono": "555-117-0117",
  "hospital_id": 2,
  "especialidad_id": 8,
  "seguro_medico_id": 2,
  "direccion_id": 1117
},
{
  "_id": 118,
  "nombre": "Carolina Andrea Pinzón Ordoñez",
  "correo": "carolina.andrea.pinzon.ordonez@email.com",
  "telefono": "555-118-0118",
  "hospital_id": 2,
  "especialidad_id": 30,
  "seguro_medico_id": 1,
  "direccion_id": 1118
},
{
  "_id": 119,
  "nombre": "Esteban David Sierra Pardo",
  "correo": "esteban.david.sierra.pardo@email.com",
  "telefono": "555-119-0119",
  "hospital_id": 2,
  "especialidad_id": 31,
  "seguro_medico_id": 3,
  "direccion_id": 1119
},
{
  "_id": 120,
  "nombre": "Camila Victoria Valencia Sánchez",
  "correo": "camila.victoria.valencia.sanchez@email.com",
  "telefono": "555-120-0120",
  "hospital_id": 2,
  "especialidad_id": 8,
  "seguro_medico_id": 2,
  "direccion_id": 1120
},
{
  "_id": 121,
  "nombre": "Miguel Ángel Vélez Suárez",
  "correo": "miguel.angel.velez.suarez@email.com",
  "telefono": "555-121-0121",
  "hospital_id": 2,
  "especialidad_id": 43,
  "seguro_medico_id": 4,
  "direccion_id": 1121
},
{
  "_id": 122,
  "nombre": "Alejandra Sofía Salazar Restrepo",
  "correo": "alejandra.sofia.salazar.restrepo@email.com",
  "telefono": "555-122-0122",
  "hospital_id": 2,
  "especialidad_id": 51,
  "seguro_medico_id": 1,
  "direccion_id": 1122
},
{
  "_id": 123,
  "nombre": "Sebastián Andrés Quintero Ortiz",
  "correo": "sebastian.andres.quintero.ortiz@email.com",
  "telefono": "555-123-0123",
  "hospital_id": 2,
  "especialidad_id": 36,
  "seguro_medico_id": 2,
  "direccion_id": 1123
},
{
  "_id": 124,
  "nombre": "Mariana Nicole Medina Morales",
  "correo": "mariana.nicole.medina.morales@email.com",
  "telefono": "555-124-0124",
  "hospital_id": 2,
  "especialidad_id": 72,
  "seguro_medico_id": 1,
  "direccion_id": 1124
},
{
  "_id": 125,
  "nombre": "Felipe Antonio Vargas González",
  "correo": "felipe.antonio.vargas.gonzalez@email.com",
  "telefono": "555-125-0125",
  "hospital_id": 2,
  "especialidad_id": 56,
  "seguro_medico_id": 3,
  "direccion_id": 1125
},
{
  "_id": 126,
  "nombre": "Gabriela Sofía Restrepo Cardona",
  "correo": "gabriela.sofia.restrepo.cardona@email.com",
  "telefono": "555-126-0126",
  "hospital_id": 2,
  "especialidad_id": 6,
  "seguro_medico_id": 5,
  "direccion_id": 1126
},
{
  "_id": 127,
  "nombre": "Santiago Nicolás Carmona Betancourt",
  "correo": "santiago.nicolas.carmona.betancourt@email.com",
  "telefono": "555-127-0127",
  "hospital_id": 2,
  "especialidad_id": 34,
  "seguro_medico_id": 2,
  "direccion_id": 1127
},
{
  "_id": 128,
  "nombre": "Natalia Andrea Escobar Roldán",
  "correo": "natalia.andrea.escobar.roldan@email.com",
  "telefono": "555-128-0128",
  "hospital_id": 2,
  "especialidad_id": 75,
  "seguro_medico_id": 1,
  "direccion_id": 1128
},
{
  "_id": 129,
  "nombre": "Juan Esteban Palacio Vélez",
  "correo": "juan.esteban.palacio.velez@email.com",
  "telefono": "555-129-0129",
  "hospital_id": 2,
  "especialidad_id": 42,
  "seguro_medico_id": 3,
  "direccion_id": 1129
},
{
  "_id": 130,
  "nombre": "Isabella Sofía Arango Patiño",
  "correo": "isabella.sofia.arango.patino@email.com",
  "telefono": "555-130-0130",
  "hospital_id": 2,
  "especialidad_id": 58,
  "seguro_medico_id": 3,
  "direccion_id": 1130
},
{
  "_id": 131,
  "nombre": "Diego Alejandro Osorio Rendón",
  "correo": "diego.alejandro.osorio.rendon@email.com",
  "telefono": "555-131-0131",
  "hospital_id": 2,
  "especialidad_id": 55,
  "seguro_medico_id": 3,
  "direccion_id": 1131
},
{
  "_id": 132,
  "nombre": "Manuela Camila Castro Palacio",
  "correo": "manuela.camila.castro.palacio@email.com",
  "telefono": "555-132-0132",
  "hospital_id": 2,
  "especialidad_id": 80,
  "seguro_medico_id": 3,
  "direccion_id": 1132
},
{
  "_id": 133,
  "nombre": "José Manuel Valencia Arias",
  "correo": "jose.manuel.valencia.arias@email.com",
  "telefono": "555-133-0133",
  "hospital_id": 2,
  "especialidad_id": 38,
  "seguro_medico_id": 2,
  "direccion_id": 1133
},
{
  "_id": 134,
  "nombre": "Valentina Andrea Yepes Marín",
  "correo": "valentina.andrea.yepes.marin@email.com",
  "telefono": "555-134-0134",
  "hospital_id": 2,
  "especialidad_id": 21,
  "seguro_medico_id": 3,
  "direccion_id": 1134
},
{
  "_id": 135,
  "nombre": "Ricardo Antonio Agudelo Franco",
  "correo": "ricardo.antonio.agudelo.franco@email.com",
  "telefono": "555-135-0135",
  "hospital_id": 2,
  "especialidad_id": 1,
  "seguro_medico_id": 4,
  "direccion_id": 1135
},
{
  "_id": 136,
  "nombre": "Paula Andrea Soto Mejía",
  "correo": "paula.andrea.soto.mejia@email.com",
  "telefono": "555-136-0136",
  "hospital_id": 2,
  "especialidad_id": 22,
  "seguro_medico_id": 1,
  "direccion_id": 1136
},
{
  "_id": 137,
  "nombre": "Juan David Cárdenas Rojas",
  "correo": "juan.david.cardenas.rojas@email.com",
  "telefono": "555-137-0137",
  "hospital_id": 2,
  "especialidad_id": 21,
  "seguro_medico_id": 1,
  "direccion_id": 1137
},
{
  "_id": 138,
  "nombre": "María Fernanda Alzate Toro",
  "correo": "maria.fernanda.alzate.toro@email.com",
  "telefono": "555-138-0138",
  "hospital_id": 2,
  "especialidad_id": 58,
  "seguro_medico_id": 2,
  "direccion_id": 1138
},
{
  "_id": 139,
  "nombre": "Santiago José Londoño Alzate",
  "correo": "santiago.jose.londono.alzate@email.com",
  "telefono": "555-139-0139",
  "hospital_id": 2,
  "especialidad_id": 10,
  "seguro_medico_id": 1,
  "direccion_id": 1139
},
{
  "_id": 140,
  "nombre": "Laura Sofía Tamayo Betancur",
  "correo": "laura.sofia.tamayo.betancur@email.com",
  "telefono": "555-140-0140",
  "hospital_id": 2,
  "especialidad_id": 13,
  "seguro_medico_id": 3,
  "direccion_id": 1140
},
{
  "_id": 141,
  "nombre": "Felipe Alejandro Ríos Cano",
  "correo": "felipe.alejandro.rios.cano@email.com",
  "telefono": "555-141-0141",
  "hospital_id": 2,
  "especialidad_id": 25,
  "seguro_medico_id": 2,
  "direccion_id": 1141
},
{
  "_id": 142,
  "nombre": "María Paula Orozco Serna",
  "correo": "maria.paula.orozco.serna@email.com",
  "telefono": "555-142-0142",
  "hospital_id": 2,
  "especialidad_id": 25,
  "seguro_medico_id": 2,
  "direccion_id": 1142
},
{
  "_id": 143,
  "nombre": "Daniel Sebastián Mesa Bedoya",
  "correo": "daniel.sebastian.mesa.bedoya@email.com",
  "telefono": "555-143-0143",
  "hospital_id": 2,
  "especialidad_id": 79,
  "seguro_medico_id": 3,
  "direccion_id": 1143
},
{
  "_id": 144,
  "nombre": "Andrea Catalina Sierra Palacio",
  "correo": "andrea.catalina.sierra.palacio@email.com",
  "telefono": "555-144-0144",
  "hospital_id": 2,
  "especialidad_id": 69,
  "seguro_medico_id": 4,
  "direccion_id": 1144
},
{
  "_id": 145,
  "nombre": "Julián David Quintero Montoya",
  "correo": "julian.david.quintero.montoya@email.com",
  "telefono": "555-145-0145",
  "hospital_id": 2,
  "especialidad_id": 63,
  "seguro_medico_id": 3,
  "direccion_id": 1145
},
{
  "_id": 146,
  "nombre": "Sara Cristina Castaño Giraldo",
  "correo": "sara.cristina.castano.giraldo@email.com",
  "telefono": "555-146-0146",
  "hospital_id": 2,
  "especialidad_id": 66,
  "seguro_medico_id": 5,
  "direccion_id": 1146
},
{
  "_id": 147,
  "nombre": "Emmanuel Alejandro Henao Perea",
  "correo": "emmanuel.alejandro.henao.perea@email.com",
  "telefono": "555-147-0147",
  "hospital_id": 2,
  "especialidad_id": 78,
  "seguro_medico_id": 5,
  "direccion_id": 1147
},
{
  "_id": 148,
  "nombre": "Valentina Sofía Montoya Cardona",
  "correo": "valentina.sofia.montoya.cardona@email.com",
  "telefono": "555-148-0148",
  "hospital_id": 2,
  "especialidad_id": 38,
  "seguro_medico_id": 2,
  "direccion_id": 1148
},
{
  "_id": 149,
  "nombre": "Pablo Andrés Posada Vélez",
  "correo": "pablo.andres.posada.velez@email.com",
  "telefono": "555-149-0149",
  "hospital_id": 2,
  "especialidad_id": 73,
  "seguro_medico_id": 4,
  "direccion_id": 1149
},
{
  "_id": 150,
  "nombre": "Isabella María Marín Sánchez",
  "correo": "isabella.maria.marin.sanchez@email.com",
  "telefono": "555-150-0150",
  "hospital_id": 2,
  "especialidad_id": 65,
  "seguro_medico_id": 3,
  "direccion_id": 1150
},
{
  "_id": 151,
  "nombre": "Juan Camilo Botero Mejía",
  "correo": "juan.camilo.botero.mejia@email.com",
  "telefono": "555-151-0151",
  "hospital_id": 2,
  "especialidad_id": 67,
  "seguro_medico_id": 4,
  "direccion_id": 1151
},
{
  "_id": 152,
  "nombre": "Natalia Carolina Franco Acevedo",
  "correo": "natalia.carolina.franco.acevedo@email.com",
  "telefono": "555-152-0152",
  "hospital_id": 2,
  "especialidad_id": 11,
  "seguro_medico_id": 3,
  "direccion_id": 1152
},
{
  "_id": 153,
  "nombre": "Miguel David Giraldo Pineda",
  "correo": "miguel.david.giraldo.pineda@email.com",
  "telefono": "555-153-0153",
  "hospital_id": 2,
  "especialidad_id": 17,
  "seguro_medico_id": 1,
  "direccion_id": 1153
},
{
  "_id": 154,
  "nombre": "Luciana Gabriela Alzate Restrepo",
  "correo": "luciana.gabriela.alzate.restrepo@email.com",
  "telefono": "555-154-0154",
  "hospital_id": 2,
  "especialidad_id": 60,
  "seguro_medico_id": 2,
  "direccion_id": 1154
},
{
  "_id": 155,
  "nombre": "Alejandro José Zuluaga Rivera",
  "correo": "alejandro.jose.zuluaga.rivera@email.com",
  "telefono": "555-155-0155",
  "hospital_id": 2,
  "especialidad_id": 44,
  "seguro_medico_id": 3,
  "direccion_id": 1155
},
{
  "_id": 156,
  "nombre": "Mariana Alejandra Mesa Herrera",
  "correo": "mariana.alejandra.mesa.herrera@email.com",
  "telefono": "555-156-0156",
  "hospital_id": 2,
  "especialidad_id": 45,
  "seguro_medico_id": 3,
  "direccion_id": 1156
},
{
  "_id": 157,
  "nombre": "Felipe Sebastián Ortiz Vélez",
  "correo": "felipe.sebastian.ortiz.velez@email.com",
  "telefono": "555-157-0157",
  "hospital_id": 2,
  "especialidad_id": 28,
  "seguro_medico_id": 4,
  "direccion_id": 1157
},
{
  "_id": 158,
  "nombre": "Laura Victoria Betancur Arcila",
  "correo": "laura.victoria.betancur.arcila@email.com",
  "telefono": "555-158-0158",
  "hospital_id": 2,
  "especialidad_id": 37,
  "seguro_medico_id": 3,
  "direccion_id": 1158
},
{
  "_id": 159,
  "nombre": "Andrés Mauricio Cano Lopera",
  "correo": "andres.mauricio.cano.lopera@email.com",
  "telefono": "555-159-0159",
  "hospital_id": 2,
  "especialidad_id": 34,
  "seguro_medico_id": 3,
  "direccion_id": 1159
},
{
  "_id": 160,
  "nombre": "Sofía Valentina Jaramillo Cardona",
  "correo": "sofia.valentina.jaramillo.cardona@email.com",
  "telefono": "555-160-0160",
  "hospital_id": 2,
  "especialidad_id": 65,
  "seguro_medico_id": 1,
  "direccion_id": 1160
},
{
  "_id": 161,
  "nombre": "Juan David Yepes Sierra",
  "correo": "juan.david.yepes.sierra@email.com",
  "telefono": "555-161-0161",
  "hospital_id": 2,
  "especialidad_id": 2,
  "seguro_medico_id": 1,
  "direccion_id": 1161
},
{
  "_id": 162,
  "nombre": "Valeria Sofía Gaviria Salazar",
  "correo": "valeria.sofia.gaviria.salazar@email.com",
  "telefono": "555-162-0162",
  "hospital_id": 2,
  "especialidad_id": 20,
  "seguro_medico_id": 4,
  "direccion_id": 1162
},
{
  "_id": 163,
  "nombre": "Daniel Felipe Monsalve Restrepo",
  "correo": "daniel.felipe.monsalve.restrepo@email.com",
  "telefono": "555-163-0163",
  "hospital_id": 2,
  "especialidad_id": 52,
  "seguro_medico_id": 4,
  "direccion_id": 1163
},
{
  "_id": 164,
  "nombre": "Andrea Sofía Arango Londoño",
  "correo": "andrea.sofia.arango.londono@email.com",
  "telefono": "555-164-0164",
  "hospital_id": 2,
  "especialidad_id": 57,
  "seguro_medico_id": 4,
  "direccion_id": 1164
},
{
  "_id": 165,
  "nombre": "Santiago Esteban Pardo Osorio",
  "correo": "santiago.esteban.pardo.osorio@email.com",
  "telefono": "555-165-0165",
  "hospital_id": 2,
  "especialidad_id": 44,
  "seguro_medico_id": 4,
  "direccion_id": 1165
},
{
  "_id": 166,
  "nombre": "Sara Marcela Toro Sánchez",
  "correo": "sara.marcela.toro.sanchez@email.com",
  "telefono": "555-166-0166",
  "hospital_id": 2,
  "especialidad_id": 21,
  "seguro_medico_id": 5,
  "direccion_id": 1166
},
{
  "_id": 167,
  "nombre": "Miguel Ángel Vélez Duque",
  "correo": "miguel.angel.velez.duque@email.com",
  "telefono": "555-167-0167",
  "hospital_id": 2,
  "especialidad_id": 9,
  "seguro_medico_id": 4,
  "direccion_id": 1167
},
{
  "_id": 168,
  "nombre": "Lucía Fernanda Zapata Mejía",
  "correo": "lucia.fernanda.zapata.mejia@email.com",
  "telefono": "555-168-0168",
  "hospital_id": 2,
  "especialidad_id": 24,
  "seguro_medico_id": 3,
  "direccion_id": 1168
},
{
  "_id": 169,
  "nombre": "José David Roldán Carmona",
  "correo": "jose.david.roldan.carmona@email.com",
  "telefono": "555-169-0169",
  "hospital_id": 2,
  "especialidad_id": 56,
  "seguro_medico_id": 1,
  "direccion_id": 1169
},
{
  "_id": 170,
  "nombre": "Valentina Isabel Pineda Betancur",
  "correo": "valentina.isabel.pineda.betancur@email.com",
  "telefono": "555-170-0170",
  "hospital_id": 2,
  "especialidad_id": 58,
  "seguro_medico_id": 5,
  "direccion_id": 1170
},
{
  "_id": 171,
  "nombre": "Carlos Daniel Quintero Álvarez",
  "correo": "carlos.daniel.quintero.alvarez@email.com",
  "telefono": "555-171-0171",
  "hospital_id": 2,
  "especialidad_id": 14,
  "seguro_medico_id": 5,
  "direccion_id": 1171
},
{
  "_id": 172,
  "nombre": "Andrea Camila Puerta Restrepo",
  "correo": "andrea.camila.puerta.restrepo@email.com",
  "telefono": "555-172-0172",
  "hospital_id": 2,
  "especialidad_id": 26,
  "seguro_medico_id": 5,
  "direccion_id": 1172
},
{
  "_id": 173,
  "nombre": "Julián Andrés Montoya Ceballos",
  "correo": "julian.andres.montoya.ceballos@email.com",
  "telefono": "555-173-0173",
  "hospital_id": 2,
  "especialidad_id": 60,
  "seguro_medico_id": 4,
  "direccion_id": 1173
},
{
  "_id": 174,
  "nombre": "Sara Sofía Mejía Franco",
  "correo": "sara.sofia.mejia.franco@email.com",
  "telefono": "555-174-0174",
  "hospital_id": 2,
  "especialidad_id": 9,
  "seguro_medico_id": 1,
  "direccion_id": 1174
},
{
  "_id": 175,
  "nombre": "Felipe Antonio Betancur Marín",
  "correo": "felipe.antonio.betancur.marin@email.com",
  "telefono": "555-175-0175",
  "hospital_id": 2,
  "especialidad_id": 38,
  "seguro_medico_id": 2,
  "direccion_id": 1175
},
{
  "_id": 176,
  "nombre": "Gabriela Alejandra Londoño Soto",
  "correo": "gabriela.alejandra.londono.soto@email.com",
  "telefono": "555-176-0176",
  "hospital_id": 2,
  "especialidad_id": 48,
  "seguro_medico_id": 4,
  "direccion_id": 1176
},
{
  "_id": 177,
  "nombre": "Santiago Nicolás Carmona Posada",
  "correo": "santiago.nicolas.carmona.posada@email.com",
  "telefono": "555-177-0177",
  "hospital_id": 2,
  "especialidad_id": 60,
  "seguro_medico_id": 1,
  "direccion_id": 1177
},
{
  "_id": 178,
  "nombre": "Natalia Andrea Escobar Ramírez",
  "correo": "natalia.andrea.escobar.ramirez@email.com",
  "telefono": "555-178-0178",
  "hospital_id": 2,
  "especialidad_id": 52,
  "seguro_medico_id": 1,
  "direccion_id": 1178
},
{
  "_id": 179,
  "nombre": "Juan Esteban Palacio Restrepo",
  "correo": "juan.esteban.palacio.restrepo@email.com",
  "telefono": "555-179-0179",
  "hospital_id": 2,
  "especialidad_id": 41,
  "seguro_medico_id": 3,
  "direccion_id": 1179
},
{
  "_id": 180,
  "nombre": "Isabella Sofía Arango Osorio",
  "correo": "isabella.sofia.arango.osorio@email.com",
  "telefono": "555-180-0180",
  "hospital_id": 2,
  "especialidad_id": 54,
  "seguro_medico_id": 3,
  "direccion_id": 1180
},
{
  "_id": 181,
  "nombre": "Diego Alejandro Osorio Sánchez",
  "correo": "diego.alejandro.osorio.sanchez@email.com",
  "telefono": "555-181-0181",
  "hospital_id": 2,
  "especialidad_id": 75,
  "seguro_medico_id": 2,
  "direccion_id": 1181
},
{
  "_id": 182,
  "nombre": "Manuela Camila Castro Vélez",
  "correo": "manuela.camila.castro.velez@email.com",
  "telefono": "555-182-0182",
  "hospital_id": 2,
  "especialidad_id": 26,
  "seguro_medico_id": 4,
  "direccion_id": 1182
},
{
  "_id": 183,
  "nombre": "José Manuel Valencia Díaz",
  "correo": "jose.manuel.valencia.diaz@email.com",
  "telefono": "555-183-0183",
  "hospital_id": 2,
  "especialidad_id": 25,
  "seguro_medico_id": 4,
  "direccion_id": 1183
},
{
  "_id": 184,
  "nombre": "Valentina Andrea Yepes Marín",
  "correo": "valentina.andrea.yepes.marin@email.com",
  "telefono": "555-184-0184",
  "hospital_id": 2,
  "especialidad_id": 25,
  "seguro_medico_id": 5,
  "direccion_id": 1184
},
{
  "_id": 185,
  "nombre": "Ricardo Antonio Agudelo Franco",
  "correo": "ricardo.antonio.agudelo.franco@email.com",
  "telefono": "555-185-0185",
  "hospital_id": 2,
  "especialidad_id": 59,
  "seguro_medico_id": 1,
  "direccion_id": 1185
},
{
  "_id": 186,
  "nombre": "Paula Andrea Soto Mejía",
  "correo": "paula.andrea.soto.mejia@email.com",
  "telefono": "555-186-0186",
  "hospital_id": 2,
  "especialidad_id": 37,
  "seguro_medico_id": 4,
  "direccion_id": 1186
},
{
  "_id": 187,
  "nombre": "Juan David Cárdenas Rojas",
  "correo": "juan.david.cardenas.rojas@email.com",
  "telefono": "555-187-0187",
  "hospital_id": 2,
  "especialidad_id": 56,
  "seguro_medico_id": 5,
  "direccion_id": 1187
},
{
  "_id": 188,
  "nombre": "María Fernanda Alzate Toro",
  "correo": "maria.fernanda.alzate.toro@email.com",
  "telefono": "555-188-0188",
  "hospital_id": 2,
  "especialidad_id": 14,
  "seguro_medico_id": 3,
  "direccion_id": 1188
},
{
  "_id": 189,
  "nombre": "Santiago José Londoño Alzate",
  "correo": "santiago.jose.londono.alzate@email.com",
  "telefono": "555-189-0189",
  "hospital_id": 2,
  "especialidad_id": 53,
  "seguro_medico_id": 1,
  "direccion_id": 1189
},
{
  "_id": 190,
  "nombre": "Laura Sofía Tamayo Betancur",
  "correo": "laura.sofia.tamayo.betancur@email.com",
  "telefono": "555-190-0190",
  "hospital_id": 2,
  "especialidad_id": 71,
  "seguro_medico_id": 1,
  "direccion_id": 1190
},
{
  "_id": 191,
  "nombre": "Felipe Alejandro Ríos Cano",
  "correo": "felipe.alejandro.rios.cano@email.com",
  "telefono": "555-191-0191",
  "hospital_id": 2,
  "especialidad_id": 59,
  "seguro_medico_id": 4,
  "direccion_id": 1191
},
{
  "_id": 192,
  "nombre": "María Paula Orozco Serna",
  "correo": "maria.paula.orozco.serna@email.com",
  "telefono": "555-192-0192",
  "hospital_id": 2,
  "especialidad_id": 56,
  "seguro_medico_id": 1,
  "direccion_id": 1192
},
{
  "_id": 193,
  "nombre": "Daniel Sebastián Mesa Bedoya",
  "correo": "daniel.sebastian.mesa.bedoya@email.com",
  "telefono": "555-193-0193",
  "hospital_id": 2,
  "especialidad_id": 80,
  "seguro_medico_id": 5,
  "direccion_id": 1193
},
{
  "_id": 194,
  "nombre": "Andrea Catalina Sierra Palacio",
  "correo": "andrea.catalina.sierra.palacio@email.com",
  "telefono": "555-194-0194",
  "hospital_id": 2,
  "especialidad_id": 45,
  "seguro_medico_id": 1,
  "direccion_id": 1194
},
{
  "_id": 195,
  "nombre": "Julián David Quintero Montoya",
  "correo": "julian.david.quintero.montoya@email.com",
  "telefono": "555-195-0195",
  "hospital_id": 2,
  "especialidad_id": 14,
  "seguro_medico_id": 1,
  "direccion_id": 1195
},
{
  "_id": 196,
  "nombre": "Sara Cristina Castaño Giraldo",
  "correo": "sara.cristina.castano.giraldo@email.com",
  "telefono": "555-196-0196",
  "hospital_id": 2,
  "especialidad_id": 71,
  "seguro_medico_id": 5,
  "direccion_id": 1196
},
{
  "_id": 197,
  "nombre": "Emmanuel Alejandro Henao Perea",
  "correo": "emmanuel.alejandro.henao.perea@email.com",
  "telefono": "555-197-0197",
  "hospital_id": 2,
  "especialidad_id": 64,
  "seguro_medico_id": 1,
  "direccion_id": 1197
},
{
  "_id": 198,
  "nombre": "Valentina Sofía Montoya Cardona",
  "correo": "valentina.sofia.montoya.cardona@email.com",
  "telefono": "555-198-0198",
  "hospital_id": 2,
  "especialidad_id": 61,
  "seguro_medico_id": 3,
  "direccion_id": 1198
},
{
  "_id": 199,
  "nombre": "Pablo Andrés Posada Vélez",
  "correo": "pablo.andres.posada.velez@email.com",
  "telefono": "555-199-0199",
  "hospital_id": 2,
  "especialidad_id": 17,
  "seguro_medico_id": 4,
  "direccion_id": 1199
},
{
  "_id": 200,
  "nombre": "Isabella María Marín Sánchez",
  "correo": "isabella.maria.marin.sanchez@email.com",
  "telefono": "555-200-0200",
  "hospital_id": 2,
  "especialidad_id": 6,
  "seguro_medico_id": 5,
  "direccion_id": 1200
},
{
  "_id": 201,
  "nombre": "Gabriel Antonio Soto Rojas",
  "correo": "gabriel.soto.rojas@email.com",
  "telefono": "555-201-0201",
  "hospital_id": 3,
  "especialidad_id": 63,
  "seguro_medico_id": 3,
  "direccion_id": 1201
},
{
  "_id": 202,
  "nombre": "Valeria Carolina Rincón Pérez",
  "correo": "valeria.rincon.perez@email.com",
  "telefono": "555-202-0202",
  "hospital_id": 3,
  "especialidad_id": 72,
  "seguro_medico_id": 5,
  "direccion_id": 1202
},
{
  "_id": 203,
  "nombre": "Pablo Andrés Jaramillo Vélez",
  "correo": "pablo.jaramillo.velez@email.com",
  "telefono": "555-203-0203",
  "hospital_id": 3,
  "especialidad_id": 15,
  "seguro_medico_id": 5,
  "direccion_id": 1203
},
{
  "_id": 204,
  "nombre": "Daniela Fernanda Ruiz Cárdenas",
  "correo": "daniela.ruiz.cardenas@email.com",
  "telefono": "555-204-0204",
  "hospital_id": 3,
  "especialidad_id": 66,
  "seguro_medico_id": 5,
  "direccion_id": 1204
},
{
  "_id": 205,
  "nombre": "Juan Esteban Castro López",
  "correo": "juan.castro.lopez@email.com",
  "telefono": "555-205-0205",
  "hospital_id": 3,
  "especialidad_id": 80,
  "seguro_medico_id": 1,
  "direccion_id": 1205
},
{
  "_id": 206,
  "nombre": "Sofía Valentina Vargas Sánchez",
  "correo": "sofia.vargas.sanchez@email.com",
  "telefono": "555-206-0206",
  "hospital_id": 3,
  "especialidad_id": 4,
  "seguro_medico_id": 2,
  "direccion_id": 1206
},
{
  "_id": 207,
  "nombre": "Miguel Ángel Londoño Patiño",
  "correo": "miguel.londono.patino@email.com",
  "telefono": "555-207-0207",
  "hospital_id": 3,
  "especialidad_id": 23,
  "seguro_medico_id": 1,
  "direccion_id": 1207
},
{
  "_id": 208,
  "nombre": "María Alejandra Morales Herrera",
  "correo": "maria.morales.herrera@email.com",
  "telefono": "555-208-0208",
  "hospital_id": 3,
  "especialidad_id": 54,
  "seguro_medico_id": 3,
  "direccion_id": 1208
},
{
  "_id": 209,
  "nombre": "Andrés Felipe Sierra Vélez",
  "correo": "andres.sierra.velez@email.com",
  "telefono": "555-209-0209",
  "hospital_id": 3,
  "especialidad_id": 13,
  "seguro_medico_id": 2,
  "direccion_id": 1209
},
{
  "_id": 210,
  "nombre": "Laura Cristina Orozco Zapata",
  "correo": "laura.orozco.zapata@email.com",
  "telefono": "555-210-0210",
  "hospital_id": 3,
  "especialidad_id": 10,
  "seguro_medico_id": 1,
  "direccion_id": 1210
},
{
  "_id": 211,
  "nombre": "Carlos Eduardo Giraldo Agudelo",
  "correo": "carlos.giraldo.agudelo@email.com",
  "telefono": "555-211-0211",
  "hospital_id": 3,
  "especialidad_id": 78,
  "seguro_medico_id": 1,
  "direccion_id": 1211
},
{
  "_id": 212,
  "nombre": "Isabella Sofía Restrepo Marín",
  "correo": "isabella.restrepo.marin@email.com",
  "telefono": "555-212-0212",
  "hospital_id": 3,
  "especialidad_id": 59,
  "seguro_medico_id": 4,
  "direccion_id": 1212
},
{
  "_id": 213,
  "nombre": "Diego Alejandro Betancur Posada",
  "correo": "diego.betancur.posada@email.com",
  "telefono": "555-213-0213",
  "hospital_id": 3,
  "especialidad_id": 18,
  "seguro_medico_id": 3,
  "direccion_id": 1213
},
{
  "_id": 214,
  "nombre": "Camila Victoria Pérez Soto",
  "correo": "camila.perez.soto@email.com",
  "telefono": "555-214-0214",
  "hospital_id": 3,
  "especialidad_id": 62,
  "seguro_medico_id": 4,
  "direccion_id": 1214
},
{
  "_id": 215,
  "nombre": "José Manuel Quintero Álvarez",
  "correo": "jose.quintero.alvarez@email.com",
  "telefono": "555-215-0215",
  "hospital_id": 3,
  "especialidad_id": 3,
  "seguro_medico_id": 1,
  "direccion_id": 1215
},
{
  "_id": 216,
  "nombre": "Ana Sofía Roldán Medina",
  "correo": "ana.roldan.medina@email.com",
  "telefono": "555-216-0216",
  "hospital_id": 3,
  "especialidad_id": 65,
  "seguro_medico_id": 2,
  "direccion_id": 1216
},
{
  "_id": 217,
  "nombre": "Sebastián José Gómez Castro",
  "correo": "sebastian.gomez.castro@email.com",
  "telefono": "555-217-0217",
  "hospital_id": 3,
  "especialidad_id": 76,
  "seguro_medico_id": 3,
  "direccion_id": 1217
},
{
  "_id": 218,
  "nombre": "Mariana Fernanda Suárez Vélez",
  "correo": "mariana.suarez.velez@email.com",
  "telefono": "555-218-0218",
  "hospital_id": 3,
  "especialidad_id": 32,
  "seguro_medico_id": 4,
  "direccion_id": 1218
},
{
  "_id": 219,
  "nombre": "Felipe Antonio Duque Ortiz",
  "correo": "felipe.duque.ortiz@email.com",
  "telefono": "555-219-0219",
  "hospital_id": 3,
  "especialidad_id": 38,
  "seguro_medico_id": 3,
  "direccion_id": 1219
},
{
  "_id": 220,
  "nombre": "Andrea Sofía Zapata Vélez",
  "correo": "andrea.zapata.velez@email.com",
  "telefono": "555-220-0220",
  "hospital_id": 3,
  "especialidad_id": 7,
  "seguro_medico_id": 3,
  "direccion_id": 1220
},
{
  "_id": 221,
  "nombre": "Nicolás David Carmona Toro",
  "correo": "nicolas.carmona.toro@email.com",
  "telefono": "555-221-0221",
  "hospital_id": 3,
  "especialidad_id": 18,
  "seguro_medico_id": 1,
  "direccion_id": 1221
},
{
  "_id": 222,
  "nombre": "Catalina María Alzate Mesa",
  "correo": "catalina.alzate.mesa@email.com",
  "telefono": "555-222-0222",
  "hospital_id": 3,
  "especialidad_id": 22,
  "seguro_medico_id": 5,
  "direccion_id": 1222
},
{
  "_id": 223,
  "nombre": "Ricardo Antonio Franco Restrepo",
  "correo": "ricardo.franco.restrepo@email.com",
  "telefono": "555-223-0223",
  "hospital_id": 3,
  "especialidad_id": 28,
  "seguro_medico_id": 2,
  "direccion_id": 1223
},
{
  "_id": 224,
  "nombre": "Paula Andrea Gaviria Yepes",
  "correo": "paula.gaviria.yepes@email.com",
  "telefono": "555-224-0224",
  "hospital_id": 3,
  "especialidad_id": 59,
  "seguro_medico_id": 3,
  "direccion_id": 1224
},
{
  "_id": 225,
  "nombre": "Luis Miguel Osorio Pineda",
  "correo": "luis.osorio.pineda@email.com",
  "telefono": "555-225-0225",
  "hospital_id": 3,
  "especialidad_id": 37,
  "seguro_medico_id": 2,
  "direccion_id": 1225
},
{
  "_id": 226,
  "nombre": "Natalia Carolina Botero Mejía",
  "correo": "natalia.botero.mejia@email.com",
  "telefono": "555-226-0226",
  "hospital_id": 3,
  "especialidad_id": 21,
  "seguro_medico_id": 4,
  "direccion_id": 1226
},
{
  "_id": 227,
  "nombre": "Santiago Esteban Ríos Cano",
  "correo": "santiago.rios.cano@email.com",
  "telefono": "555-227-0227",
  "hospital_id": 3,
  "especialidad_id": 44,
  "seguro_medico_id": 5,
  "direccion_id": 1227
},
{
  "_id": 228,
  "nombre": "Laura Sofía Serna Tamayo",
  "correo": "laura.serna.tamayo@email.com",
  "telefono": "555-228-0228",
  "hospital_id": 3,
  "especialidad_id": 31,
  "seguro_medico_id": 4,
  "direccion_id": 1228
},
{
  "_id": 229,
  "nombre": "Daniel Felipe Monsalve Arango",
  "correo": "daniel.monsalve.arango@email.com",
  "telefono": "555-229-0229",
  "hospital_id": 3,
  "especialidad_id": 4,
  "seguro_medico_id": 3,
  "direccion_id": 1229
},
{
  "_id": 230,
  "nombre": "Valentina Andrea Sierra Palacio",
  "correo": "valentina.sierra.palacio@email.com",
  "telefono": "555-230-0230",
  "hospital_id": 3,
  "especialidad_id": 38,
  "seguro_medico_id": 4,
  "direccion_id": 1230
},
{
  "_id": 231,
  "nombre": "Juan Camilo Quintero Montoya",
  "correo": "juan.quintero.montoya@email.com",
  "telefono": "555-231-0231",
  "hospital_id": 3,
  "especialidad_id": 77,
  "seguro_medico_id": 5,
  "direccion_id": 1231
},
{
  "_id": 232,
  "nombre": "Sara Cristina Castaño Duque",
  "correo": "sara.castano.duque@email.com",
  "telefono": "555-232-0232",
  "hospital_id": 3,
  "especialidad_id": 35,
  "seguro_medico_id": 1,
  "direccion_id": 1232
},
{
  "_id": 233,
  "nombre": "Emmanuel Alejandro Henao Zuluaga",
  "correo": "emmanuel.henao.zuluaga@email.com",
  "telefono": "555-233-0233",
  "hospital_id": 3,
  "especialidad_id": 41,
  "seguro_medico_id": 4,
  "direccion_id": 1233
},
{
  "_id": 234,
  "nombre": "Valentina Sofía Montoya Restrepo",
  "correo": "valentina.montoya.restrepo@email.com",
  "telefono": "555-234-0234",
  "hospital_id": 3,
  "especialidad_id": 27,
  "seguro_medico_id": 4,
  "direccion_id": 1234
},
{
  "_id": 235,
  "nombre": "Pablo Andrés Posada Ospina",
  "correo": "pablo.posada.ospina@email.com",
  "telefono": "555-235-0235",
  "hospital_id": 3,
  "especialidad_id": 65,
  "seguro_medico_id": 1,
  "direccion_id": 1235
},
{
  "_id": 236,
  "nombre": "Isabella María Marín Giraldo",
  "correo": "isabella.marin.giraldo@email.com",
  "telefono": "555-236-0236",
  "hospital_id": 3,
  "especialidad_id": 13,
  "seguro_medico_id": 4,
  "direccion_id": 1236
},
{
  "_id": 237,
  "nombre": "Sebastián Andrés Vélez Roldán",
  "correo": "sebastian.velez.roldan@email.com",
  "telefono": "555-237-0237",
  "hospital_id": 3,
  "especialidad_id": 59,
  "seguro_medico_id": 1,
  "direccion_id": 1237
},
{
  "_id": 238,
  "nombre": "Mariana Nicole Medina Patiño",
  "correo": "mariana.medina.patino@email.com",
  "telefono": "555-238-0238",
  "hospital_id": 3,
  "especialidad_id": 26,
  "seguro_medico_id": 2,
  "direccion_id": 1238
},
{
  "_id": 239,
  "nombre": "Felipe Antonio Vargas Mesa",
  "correo": "felipe.vargas.mesa@email.com",
  "telefono": "555-239-0239",
  "hospital_id": 3,
  "especialidad_id": 24,
  "seguro_medico_id": 4,
  "direccion_id": 1239
},
{
  "_id": 240,
  "nombre": "Gabriela Sofía Restrepo Cardona",
  "correo": "gabriela.restrepo.cardona@email.com",
  "telefono": "555-240-0240",
  "hospital_id": 3,
  "especialidad_id": 59,
  "seguro_medico_id": 1,
  "direccion_id": 1240
},
{
  "_id": 241,
  "nombre": "Santiago Nicolás Carmona Betancourt",
  "correo": "santiago.carmona.betancourt@email.com",
  "telefono": "555-241-0241",
  "hospital_id": 3,
  "especialidad_id": 62,
  "seguro_medico_id": 1,
  "direccion_id": 1241
},
{
  "_id": 242,
  "nombre": "Natalia Andrea Escobar Roldán",
  "correo": "natalia.escobar.roldan@email.com",
  "telefono": "555-242-0242",
  "hospital_id": 3,
  "especialidad_id": 61,
  "seguro_medico_id": 4,
  "direccion_id": 1242
},
{
  "_id": 243,
  "nombre": "Juan Esteban Palacio Vélez",
  "correo": "juan.palacio.velez@email.com",
  "telefono": "555-243-0243",
  "hospital_id": 3,
  "especialidad_id": 18,
  "seguro_medico_id": 1,
  "direccion_id": 1243
},
{
  "_id": 244,
  "nombre": "Isabella Sofía Arango Patiño",
  "correo": "isabella.arango.patino@email.com",
  "telefono": "555-244-0244",
  "hospital_id": 3,
  "especialidad_id": 75,
  "seguro_medico_id": 5,
  "direccion_id": 1244
},
{
  "_id": 245,
  "nombre": "Diego Alejandro Osorio Rendón",
  "correo": "diego.osorio.rendon@email.com",
  "telefono": "555-245-0245",
  "hospital_id": 3,
  "especialidad_id": 75,
  "seguro_medico_id": 1,
  "direccion_id": 1245
},
{
  "_id": 246,
  "nombre": "Manuela Camila Castro Palacio",
  "correo": "manuela.castro.palacio@email.com",
  "telefono": "555-246-0246",
  "hospital_id": 3,
  "especialidad_id": 78,
  "seguro_medico_id": 2,
  "direccion_id": 1246
},
{
  "_id": 247,
  "nombre": "José Manuel Valencia Arias",
  "correo": "jose.valencia.arias@email.com",
  "telefono": "555-247-0247",
  "hospital_id": 3,
  "especialidad_id": 18,
  "seguro_medico_id": 1,
  "direccion_id": 1247
},
{
  "_id": 248,
  "nombre": "Valentina Andrea Yepes Marín",
  "correo": "valentina.yepes.marin@email.com",
  "telefono": "555-248-0248",
  "hospital_id": 3,
  "especialidad_id": 20,
  "seguro_medico_id": 4,
  "direccion_id": 1248
},
{
  "_id": 249,
  "nombre": "Ricardo Antonio Agudelo Franco",
  "correo": "ricardo.agudelo.franco@email.com",
  "telefono": "555-249-0249",
  "hospital_id": 3,
  "especialidad_id": 39,
  "seguro_medico_id": 4,
  "direccion_id": 1249
},
{
  "_id": 250,
  "nombre": "Paula Andrea Soto Mejía",
  "correo": "paula.soto.mejia@email.com",
  "telefono": "555-250-0250",
  "hospital_id": 3,
  "especialidad_id": 51,
  "seguro_medico_id": 2,
  "direccion_id": 1250
},
{
  "_id": 251,
  "nombre": "Juan David Cárdenas Rojas",
  "correo": "juan.cardenas.rojas@email.com",
  "telefono": "555-251-0251",
  "hospital_id": 3,
  "especialidad_id": 65,
  "seguro_medico_id": 3,
  "direccion_id": 1251
},
{
  "_id": 252,
  "nombre": "María Fernanda Alzate Toro",
  "correo": "maria.alzate.toro@email.com",
  "telefono": "555-252-0252",
  "hospital_id": 3,
  "especialidad_id": 72,
  "seguro_medico_id": 4,
  "direccion_id": 1252
},
{
  "_id": 253,
  "nombre": "Santiago José Londoño Alzate",
  "correo": "santiago.londono.alzate@email.com",
  "telefono": "555-253-0253",
  "hospital_id": 3,
  "especialidad_id": 38,
  "seguro_medico_id": 2,
  "direccion_id": 1253
},
{
  "_id": 254,
  "nombre": "Laura Sofía Tamayo Betancur",
  "correo": "laura.tamayo.betancur@email.com",
  "telefono": "555-254-0254",
  "hospital_id": 3,
  "especialidad_id": 12,
  "seguro_medico_id": 5,
  "direccion_id": 1254
},
{
  "_id": 255,
  "nombre": "Felipe Alejandro Ríos Cano",
  "correo": "felipe.rios.cano@email.com",
  "telefono": "555-255-0255",
  "hospital_id": 3,
  "especialidad_id": 46,
  "seguro_medico_id": 4,
  "direccion_id": 1255
},
{
  "_id": 256,
  "nombre": "María Paula Orozco Serna",
  "correo": "maria.orozco.serna@email.com",
  "telefono": "555-256-0256",
  "hospital_id": 3,
  "especialidad_id": 25,
  "seguro_medico_id": 1,
  "direccion_id": 1256
},
{
  "_id": 257,
  "nombre": "Daniel Sebastián Mesa Bedoya",
  "correo": "daniel.mesa.bedoya@email.com",
  "telefono": "555-257-0257",
  "hospital_id": 3,
  "especialidad_id": 76,
  "seguro_medico_id": 1,
  "direccion_id": 1257
},
{
  "_id": 258,
  "nombre": "Andrea Catalina Sierra Palacio",
  "correo": "andrea.sierra.palacio@email.com",
  "telefono": "555-258-0258",
  "hospital_id": 3,
  "especialidad_id": 58,
  "seguro_medico_id": 2,
  "direccion_id": 1258
},
{
  "_id": 259,
  "nombre": "Julián David Quintero Montoya",
  "correo": "julian.quintero.montoya@email.com",
  "telefono": "555-259-0259",
  "hospital_id": 3,
  "especialidad_id": 33,
  "seguro_medico_id": 4,
  "direccion_id": 1259
},
{
  "_id": 260,
  "nombre": "Sara Cristina Castaño Giraldo",
  "correo": "sara.castano.giraldo@email.com",
  "telefono": "555-260-0260",
  "hospital_id": 3,
  "especialidad_id": 64,
  "seguro_medico_id": 1,
  "direccion_id": 1260
},
{
  "_id": 261,
  "nombre": "Emmanuel Alejandro Henao Perea",
  "correo": "emmanuel.henao.perea@email.com",
  "telefono": "555-261-0261",
  "hospital_id": 3,
  "especialidad_id": 47,
  "seguro_medico_id": 1,
  "direccion_id": 1261
},
{
  "_id": 262,
  "nombre": "Valentina Sofía Montoya Cardona",
  "correo": "valentina.montoya.cardona@email.com",
  "telefono": "555-262-0262",
  "hospital_id": 3,
  "especialidad_id": 79,
  "seguro_medico_id": 1,
  "direccion_id": 1262
},
{
  "_id": 263,
  "nombre": "Pablo Andrés Posada Vélez",
  "correo": "pablo.posada.velez@email.com",
  "telefono": "555-263-0263",
  "hospital_id": 3,
  "especialidad_id": 1,
  "seguro_medico_id": 3,
  "direccion_id": 1263
},
{
  "_id": 264,
  "nombre": "Isabella María Marín Sánchez",
  "correo": "isabella.marin.sanchez@email.com",
  "telefono": "555-264-0264",
  "hospital_id": 3,
  "especialidad_id": 80,
  "seguro_medico_id": 3,
  "direccion_id": 1264
},
{
  "_id": 265,
  "nombre": "Juan Camilo Botero Mejía",
  "correo": "juan.botero.mejia@email.com",
  "telefono": "555-265-0265",
  "hospital_id": 3,
  "especialidad_id": 66,
  "seguro_medico_id": 4,
  "direccion_id": 1265
},
{
  "_id": 266,
  "nombre": "Natalia Carolina Franco Acevedo",
  "correo": "natalia.franco.acevedo@email.com",
  "telefono": "555-266-0266",
  "hospital_id": 3,
  "especialidad_id": 79,
  "seguro_medico_id": 4,
  "direccion_id": 1266
},
{
  "_id": 267,
  "nombre": "Miguel David Giraldo Pineda",
  "correo": "miguel.giraldo.pineda@email.com",
  "telefono": "555-267-0267",
  "hospital_id": 3,
  "especialidad_id": 21,
  "seguro_medico_id": 2,
  "direccion_id": 1267
},
{
  "_id": 268,
  "nombre": "Luciana Gabriela Alzate Restrepo",
  "correo": "luciana.alzate.restrepo@email.com",
  "telefono": "555-268-0268",
  "hospital_id": 3,
  "especialidad_id": 30,
  "seguro_medico_id": 5,
  "direccion_id": 1268
},
{
  "_id": 269,
  "nombre": "Alejandro José Zuluaga Rivera",
  "correo": "alejandro.zuluaga.rivera@email.com",
  "telefono": "555-269-0269",
  "hospital_id": 3,
  "especialidad_id": 72,
  "seguro_medico_id": 1,
  "direccion_id": 1269
},
{
  "_id": 270,
  "nombre": "Mariana Alejandra Mesa Herrera",
  "correo": "mariana.mesa.herrera@email.com",
  "telefono": "555-270-0270",
  "hospital_id": 3,
  "especialidad_id": 28,
  "seguro_medico_id": 3,
  "direccion_id": 1270
},
{
  "_id": 271,
  "nombre": "Felipe Sebastián Ortiz Vélez",
  "correo": "felipe.ortiz.velez@email.com",
  "telefono": "555-271-0271",
  "hospital_id": 3,
  "especialidad_id": 43,
  "seguro_medico_id": 2,
  "direccion_id": 1271
},
{
  "_id": 272,
  "nombre": "Laura Victoria Betancur Arcila",
  "correo": "laura.betancur.arcila@email.com",
  "telefono": "555-272-0272",
  "hospital_id": 3,
  "especialidad_id": 33,
  "seguro_medico_id": 3,
  "direccion_id": 1272
},
{
  "_id": 273,
  "nombre": "Andrés Mauricio Cano Lopera",
  "correo": "andres.cano.lopera@email.com",
  "telefono": "555-273-0273",
  "hospital_id": 3,
  "especialidad_id": 8,
  "seguro_medico_id": 2,
  "direccion_id": 1273
},
{
  "_id": 274,
  "nombre": "Sofía Valentina Jaramillo Cardona",
  "correo": "sofia.jaramillo.cardona@email.com",
  "telefono": "555-274-0274",
  "hospital_id": 3,
  "especialidad_id": 18,
  "seguro_medico_id": 3,
  "direccion_id": 1274
},
{
  "_id": 275,
  "nombre": "Juan David Yepes Sierra",
  "correo": "juan.yepes.sierra@email.com",
  "telefono": "555-275-0275",
  "hospital_id": 3,
  "especialidad_id": 10,
  "seguro_medico_id": 4,
  "direccion_id": 1275
},
{
  "_id": 276,
  "nombre": "Valeria Sofía Gaviria Salazar",
  "correo": "valeria.gaviria.salazar@email.com",
  "telefono": "555-276-0276",
  "hospital_id": 3,
  "especialidad_id": 9,
  "seguro_medico_id": 1,
  "direccion_id": 1276
},
{
  "_id": 277,
  "nombre": "Daniel Felipe Monsalve Restrepo",
  "correo": "daniel.monsalve.restrepo@email.com",
  "telefono": "555-277-0277",
  "hospital_id": 3,
  "especialidad_id": 59,
  "seguro_medico_id": 1,
  "direccion_id": 1277
},
{
  "_id": 278,
  "nombre": "Andrea Sofía Arango Londoño",
  "correo": "andrea.arango.londono@email.com",
  "telefono": "555-278-0278",
  "hospital_id": 3,
  "especialidad_id": 67,
  "seguro_medico_id": 1,
  "direccion_id": 1278
},
{
  "_id": 279,
  "nombre": "Santiago Esteban Pardo Osorio",
  "correo": "santiago.pardo.osorio@email.com",
  "telefono": "555-279-0279",
  "hospital_id": 3,
  "especialidad_id": 61,
  "seguro_medico_id": 4,
  "direccion_id": 1279
},
{
  "_id": 280,
  "nombre": "Sara Marcela Toro Sánchez",
  "correo": "sara.toro.sanchez@email.com",
  "telefono": "555-280-0280",
  "hospital_id": 3,
  "especialidad_id": 50,
  "seguro_medico_id": 1,
  "direccion_id": 1280
},
{
  "_id": 281,
  "nombre": "Miguel Ángel Vélez Duque",
  "correo": "miguel.velez.duque@email.com",
  "telefono": "555-281-0281",
  "hospital_id": 3,
  "especialidad_id": 65,
  "seguro_medico_id": 2,
  "direccion_id": 1281
},
{
  "_id": 282,
  "nombre": "Lucía Fernanda Zapata Mejía",
  "correo": "lucia.zapata.mejia@email.com",
  "telefono": "555-282-0282",
  "hospital_id": 3,
  "especialidad_id": 46,
  "seguro_medico_id": 4,
  "direccion_id": 1282
},
{
  "_id": 283,
  "nombre": "José David Roldán Carmona",
  "correo": "jose.roldan.carmona@email.com",
  "telefono": "555-283-0283",
  "hospital_id": 3,
  "especialidad_id": 78,
  "seguro_medico_id": 2,
  "direccion_id": 1283
},
{
  "_id": 284,
  "nombre": "Valentina Isabel Pineda Betancur",
  "correo": "valentina.pineda.betancur@email.com",
  "telefono": "555-284-0284",
  "hospital_id": 3,
  "especialidad_id": 64,
  "seguro_medico_id": 5,
  "direccion_id": 1284
},
{
  "_id": 285,
  "nombre": "Carlos Daniel Quintero Álvarez",
  "correo": "carlos.quintero.alvarez@email.com",
  "telefono": "555-285-0285",
  "hospital_id": 3,
  "especialidad_id": 64,
  "seguro_medico_id": 3,
  "direccion_id": 1285
},
{
  "_id": 286,
  "nombre": "Andrea Camila Puerta Restrepo",
  "correo": "andrea.puerta.restrepo@email.com",
  "telefono": "555-286-0286",
  "hospital_id": 3,
  "especialidad_id": 79,
  "seguro_medico_id": 3,
  "direccion_id": 1286
},
{
  "_id": 287,
  "nombre": "Julián Andrés Montoya Ceballos",
  "correo": "julian.montoya.ceballos@email.com",
  "telefono": "555-287-0287",
  "hospital_id": 3,
  "especialidad_id": 60,
  "seguro_medico_id": 2,
  "direccion_id": 1287
},
{
  "_id": 288,
  "nombre": "Sara Sofía Mejía Franco",
  "correo": "sara.mejia.franco@email.com",
  "telefono": "555-288-0288",
  "hospital_id": 3,
  "especialidad_id": 50,
  "seguro_medico_id": 2,
  "direccion_id": 1288
},
{
  "_id": 289,
  "nombre": "Felipe Antonio Betancur Marín",
  "correo": "felipe.betancur.marin@email.com",
  "telefono": "555-289-0289",
  "hospital_id": 3,
  "especialidad_id": 39,
  "seguro_medico_id": 3,
  "direccion_id": 1289
},
{
  "_id": 290,
  "nombre": "Gabriela Alejandra Londoño Soto",
  "correo": "gabriela.londono.soto@email.com",
  "telefono": "555-290-0290",
  "hospital_id": 3,
  "especialidad_id": 31,
  "seguro_medico_id": 5,
  "direccion_id": 1290
},
{
  "_id": 291,
  "nombre": "Santiago Nicolás Carmona Posada",
  "correo": "santiago.carmona.posada@email.com",
  "telefono": "555-291-0291",
  "hospital_id": 3,
  "especialidad_id": 66,
  "seguro_medico_id": 2,
  "direccion_id": 1291
},
{
  "_id": 292,
  "nombre": "Natalia Andrea Escobar Ramírez",
  "correo": "natalia.escobar.ramirez@email.com",
  "telefono": "555-292-0292",
  "hospital_id": 3,
  "especialidad_id": 36,
  "seguro_medico_id": 3,
  "direccion_id": 1292
},
{
  "_id": 293,
  "nombre": "Juan Esteban Palacio Restrepo",
  "correo": "juan.palacio.restrepo@email.com",
  "telefono": "555-293-0293",
  "hospital_id": 3,
  "especialidad_id": 75,
  "seguro_medico_id": 4,
  "direccion_id": 1293
},
{
  "_id": 294,
  "nombre": "Isabella Sofía Arango Osorio",
  "correo": "isabella.arango.osorio@email.com",
  "telefono": "555-294-0294",
  "hospital_id": 3,
  "especialidad_id": 69,
  "seguro_medico_id": 4,
  "direccion_id": 1294
},
{
  "_id": 295,
  "nombre": "Diego Alejandro Osorio Sánchez",
  "correo": "diego.osorio.sanchez@email.com",
  "telefono": "555-295-0295",
  "hospital_id": 3,
  "especialidad_id": 54,
  "seguro_medico_id": 3,
  "direccion_id": 1295
},
{
  "_id": 296,
  "nombre": "Manuela Camila Castro Vélez",
  "correo": "manuela.castro.velez@email.com",
  "telefono": "555-296-0296",
  "hospital_id": 3,
  "especialidad_id": 18,
  "seguro_medico_id": 4,
  "direccion_id": 1296
},
{
  "_id": 297,
  "nombre": "José Manuel Valencia Díaz",
  "correo": "jose.valencia.diaz@email.com",
  "telefono": "555-297-0297",
  "hospital_id": 3,
  "especialidad_id": 31,
  "seguro_medico_id": 1,
  "direccion_id": 1297
},
{
  "_id": 298,
  "nombre": "Valentina Andrea Yepes Marín",
  "correo": "valentina.yepes.marin@email.com",
  "telefono": "555-298-0298",
  "hospital_id": 3,
  "especialidad_id": 58,
  "seguro_medico_id": 5,
  "direccion_id": 1298
},
{
  "_id": 299,
  "nombre": "Ricardo Antonio Agudelo Franco",
  "correo": "ricardo.agudelo.franco@email.com",
  "telefono": "555-299-0299",
  "hospital_id": 3,
  "especialidad_id": 55,
  "seguro_medico_id": 2,
  "direccion_id": 1299
},
{
  "_id": 300,
  "nombre": "Paula Andrea Soto Mejía",
  "correo": "paula.soto.mejia@email.com",
  "telefono": "555-300-0300",
  "hospital_id": 3,
  "especialidad_id": 37,
  "seguro_medico_id": 4,
  "direccion_id": 1300
},
{
  "_id": 301,
  "nombre": "Gabriel Antonio Soto Rojas",
  "correo": "gabriel.soto.rojas@email.com",
  "telefono": "555-301-0301",
  "hospital_id": 4,
  "especialidad_id": 52,
  "seguro_medico_id": 2,
  "direccion_id": 1301
},
{
  "_id": 302,
  "nombre": "Valeria Carolina Rincón Pérez",
  "correo": "valeria.rincon.perez@email.com",
  "telefono": "555-302-0302",
  "hospital_id": 4,
  "especialidad_id": 61,
  "seguro_medico_id": 3,
  "direccion_id": 1302
},
{
  "_id": 303,
  "nombre": "Pablo Andrés Jaramillo Vélez",
  "correo": "pablo.jaramillo.velez@email.com",
  "telefono": "555-303-0303",
  "hospital_id": 4,
  "especialidad_id": 24,
  "seguro_medico_id": 4,
  "direccion_id": 1303
},
{
  "_id": 304,
  "nombre": "Daniela Fernanda Ruiz Cárdenas",
  "correo": "daniela.ruiz.cardenas@email.com",
  "telefono": "555-304-0304",
  "hospital_id": 4,
  "especialidad_id": 23,
  "seguro_medico_id": 3,
  "direccion_id": 1304
},
{
  "_id": 305,
  "nombre": "Juan Esteban Castro López",
  "correo": "juan.castro.lopez@email.com",
  "telefono": "555-305-0305",
  "hospital_id": 4,
  "especialidad_id": 69,
  "seguro_medico_id": 5,
  "direccion_id": 1305
},
{
  "_id": 306,
  "nombre": "Sofía Valentina Vargas Sánchez",
  "correo": "sofia.vargas.sanchez@email.com",
  "telefono": "555-306-0306",
  "hospital_id": 4,
  "especialidad_id": 78,
  "seguro_medico_id": 1,
  "direccion_id": 1306
},
{
  "_id": 307,
  "nombre": "Miguel Ángel Londoño Patiño",
  "correo": "miguel.londono.patino@email.com",
  "telefono": "555-307-0307",
  "hospital_id": 4,
  "especialidad_id": 25,
  "seguro_medico_id": 2,
  "direccion_id": 1307
},
{
  "_id": 308,
  "nombre": "María Alejandra Morales Herrera",
  "correo": "maria.morales.herrera@email.com",
  "telefono": "555-308-0308",
  "hospital_id": 4,
  "especialidad_id": 4,
  "seguro_medico_id": 1,
  "direccion_id": 1308
},
{
  "_id": 309,
  "nombre": "Andrés Felipe Sierra Vélez",
  "correo": "andres.sierra.velez@email.com",
  "telefono": "555-309-0309",
  "hospital_id": 4,
  "especialidad_id": 5,
  "seguro_medico_id": 3,
  "direccion_id": 1309
},
{
  "_id": 310,
  "nombre": "Laura Cristina Orozco Zapata",
  "correo": "laura.orozco.zapata@email.com",
  "telefono": "555-310-0310",
  "hospital_id": 4,
  "especialidad_id": 30,
  "seguro_medico_id": 2,
  "direccion_id": 1310
},
{
  "_id": 311,
  "nombre": "Carlos Eduardo Giraldo Agudelo",
  "correo": "carlos.giraldo.agudelo@email.com",
  "telefono": "555-311-0311",
  "hospital_id": 4,
  "especialidad_id": 80,
  "seguro_medico_id": 2,
  "direccion_id": 1311
},
{
  "_id": 312,
  "nombre": "Isabella Sofía Restrepo Marín",
  "correo": "isabella.restrepo.marin@email.com",
  "telefono": "555-312-0312",
  "hospital_id": 4,
  "especialidad_id": 10,
  "seguro_medico_id": 1,
  "direccion_id": 1312
},
{
  "_id": 313,
  "nombre": "Diego Alejandro Betancur Posada",
  "correo": "diego.betancur.posada@email.com",
  "telefono": "555-313-0313",
  "hospital_id": 4,
  "especialidad_id": 33,
  "seguro_medico_id": 2,
  "direccion_id": 1313
},
{
  "_id": 314,
  "nombre": "Camila Victoria Pérez Soto",
  "correo": "camila.perez.soto@email.com",
  "telefono": "555-314-0314",
  "hospital_id": 4,
  "especialidad_id": 23,
  "seguro_medico_id": 2,
  "direccion_id": 1314
},
{
  "_id": 315,
  "nombre": "José Manuel Quintero Álvarez",
  "correo": "jose.quintero.alvarez@email.com",
  "telefono": "555-315-0315",
  "hospital_id": 4,
  "especialidad_id": 55,
  "seguro_medico_id": 3,
  "direccion_id": 1315
},
{
  "_id": 316,
  "nombre": "Ana Sofía Roldán Medina",
  "correo": "ana.roldan.medina@email.com",
  "telefono": "555-316-0316",
  "hospital_id": 4,
  "especialidad_id": 69,
  "seguro_medico_id": 4,
  "direccion_id": 1316
},
{
  "_id": 317,
  "nombre": "Sebastián José Gómez Castro",
  "correo": "sebastian.gomez.castro@email.com",
  "telefono": "555-317-0317",
  "hospital_id": 4,
  "especialidad_id": 9,
  "seguro_medico_id": 4,
  "direccion_id": 1317
},
{
  "_id": 318,
  "nombre": "Mariana Fernanda Suárez Vélez",
  "correo": "mariana.suarez.velez@email.com",
  "telefono": "555-318-0318",
  "hospital_id": 4,
  "especialidad_id": 29,
  "seguro_medico_id": 3,
  "direccion_id": 1318
},
{
  "_id": 319,
  "nombre": "Felipe Antonio Duque Ortiz",
  "correo": "felipe.duque.ortiz@email.com",
  "telefono": "555-319-0319",
  "hospital_id": 4,
  "especialidad_id": 29,
  "seguro_medico_id": 2,
  "direccion_id": 1319
},
{
  "_id": 320,
  "nombre": "Andrea Sofía Zapata Vélez",
  "correo": "andrea.zapata.velez@email.com",
  "telefono": "555-320-0320",
  "hospital_id": 4,
  "especialidad_id": 24,
  "seguro_medico_id": 4,
  "direccion_id": 1320
},
{
  "_id": 321,
  "nombre": "Nicolás David Carmona Toro",
  "correo": "nicolas.carmona.toro@email.com",
  "telefono": "555-321-0321",
  "hospital_id": 4,
  "especialidad_id": 52,
  "seguro_medico_id": 5,
  "direccion_id": 1321
},
{
  "_id": 322,
  "nombre": "Catalina María Alzate Mesa",
  "correo": "catalina.alzate.mesa@email.com",
  "telefono": "555-322-0322",
  "hospital_id": 4,
  "especialidad_id": 6,
  "seguro_medico_id": 5,
  "direccion_id": 1322
},
{
  "_id": 323,
  "nombre": "Ricardo Antonio Franco Restrepo",
  "correo": "ricardo.franco.restrepo@email.com",
  "telefono": "555-323-0323",
  "hospital_id": 4,
  "especialidad_id": 31,
  "seguro_medico_id": 5,
  "direccion_id": 1323
},
{
  "_id": 324,
  "nombre": "Paula Andrea Gaviria Yepes",
  "correo": "paula.gaviria.yepes@email.com",
  "telefono": "555-324-0324",
  "hospital_id": 4,
  "especialidad_id": 14,
  "seguro_medico_id": 4,
  "direccion_id": 1324
},
{
  "_id": 325,
  "nombre": "Luis Miguel Osorio Pineda",
  "correo": "luis.osorio.pineda@email.com",
  "telefono": "555-325-0325",
  "hospital_id": 4,
  "especialidad_id": 12,
  "seguro_medico_id": 5,
  "direccion_id": 1325
},
{
  "_id": 326,
  "nombre": "Natalia Carolina Botero Mejía",
  "correo": "natalia.botero.mejia@email.com",
  "telefono": "555-326-0326",
  "hospital_id": 4,
  "especialidad_id": 17,
  "seguro_medico_id": 5,
  "direccion_id": 1326
},
{
  "_id": 327,
  "nombre": "Santiago Esteban Ríos Cano",
  "correo": "santiago.rios.cano@email.com",
  "telefono": "555-327-0327",
  "hospital_id": 4,
  "especialidad_id": 79,
  "seguro_medico_id": 3,
  "direccion_id": 1327
},
{
  "_id": 328,
  "nombre": "Laura Sofía Serna Tamayo",
  "correo": "laura.serna.tamayo@email.com",
  "telefono": "555-328-0328",
  "hospital_id": 4,
  "especialidad_id": 23,
  "seguro_medico_id": 3,
  "direccion_id": 1328
},
{
  "_id": 329,
  "nombre": "Daniel Felipe Monsalve Arango",
  "correo": "daniel.monsalve.arango@email.com",
  "telefono": "555-329-0329",
  "hospital_id": 4,
  "especialidad_id": 38,
  "seguro_medico_id": 4,
  "direccion_id": 1329
},
{
  "_id": 330,
  "nombre": "Valentina Andrea Sierra Palacio",
  "correo": "valentina.sierra.palacio@email.com",
  "telefono": "555-330-0330",
  "hospital_id": 4,
  "especialidad_id": 47,
  "seguro_medico_id": 1,
  "direccion_id": 1330
},
{
  "_id": 331,
  "nombre": "Juan Camilo Quintero Montoya",
  "correo": "juan.quintero.montoya@email.com",
  "telefono": "555-331-0331",
  "hospital_id": 4,
  "especialidad_id": 61,
  "seguro_medico_id": 5,
  "direccion_id": 1331
},
{
  "_id": 332,
  "nombre": "Sara Cristina Castaño Duque",
  "correo": "sara.castano.duque@email.com",
  "telefono": "555-332-0332",
  "hospital_id": 4,
  "especialidad_id": 41,
  "seguro_medico_id": 1,
  "direccion_id": 1332
},
{
  "_id": 333,
  "nombre": "Emmanuel Alejandro Henao Zuluaga",
  "correo": "emmanuel.henao.zuluaga@email.com",
  "telefono": "555-333-0333",
  "hospital_id": 4,
  "especialidad_id": 67,
  "seguro_medico_id": 5,
  "direccion_id": 1333
},
{
  "_id": 334,
  "nombre": "Valentina Sofía Montoya Restrepo",
  "correo": "valentina.montoya.restrepo@email.com",
  "telefono": "555-334-0334",
  "hospital_id": 4,
  "especialidad_id": 57,
  "seguro_medico_id": 3,
  "direccion_id": 1334
},
{
  "_id": 335,
  "nombre": "Pablo Andrés Posada Ospina",
  "correo": "pablo.posada.ospina@email.com",
  "telefono": "555-335-0335",
  "hospital_id": 4,
  "especialidad_id": 21,
  "seguro_medico_id": 2,
  "direccion_id": 1335
},
{
  "_id": 336,
  "nombre": "Isabella María Marín Giraldo",
  "correo": "isabella.marin.giraldo@email.com",
  "telefono": "555-336-0336",
  "hospital_id": 4,
  "especialidad_id": 26,
  "seguro_medico_id": 2,
  "direccion_id": 1336
},
{
  "_id": 337,
  "nombre": "Sebastián Andrés Vélez Roldán",
  "correo": "sebastian.velez.roldan@email.com",
  "telefono": "555-337-0337",
  "hospital_id": 4,
  "especialidad_id": 31,
  "seguro_medico_id": 1,
  "direccion_id": 1337
},
{
  "_id": 338,
  "nombre": "Mariana Nicole Medina Patiño",
  "correo": "mariana.medina.patino@email.com",
  "telefono": "555-338-0338",
  "hospital_id": 4,
  "especialidad_id": 65,
  "seguro_medico_id": 5,
  "direccion_id": 1338
},
{
  "_id": 339,
  "nombre": "Felipe Antonio Vargas Mesa",
  "correo": "felipe.vargas.mesa@email.com",
  "telefono": "555-339-0339",
  "hospital_id": 4,
  "especialidad_id": 46,
  "seguro_medico_id": 1,
  "direccion_id": 1339
},
{
  "_id": 340,
  "nombre": "Gabriela Sofía Restrepo Cardona",
  "correo": "gabriela.restrepo.cardona@email.com",
  "telefono": "555-340-0340",
  "hospital_id": 4,
  "especialidad_id": 54,
  "seguro_medico_id": 5,
  "direccion_id": 1340
},
{
  "_id": 341,
  "nombre": "Santiago Nicolás Carmona Betancourt",
  "correo": "santiago.carmona.betancourt@email.com",
  "telefono": "555-341-0341",
  "hospital_id": 4,
  "especialidad_id": 75,
  "seguro_medico_id": 2,
  "direccion_id": 1341
},
{
  "_id": 342,
  "nombre": "Natalia Andrea Escobar Roldán",
  "correo": "natalia.escobar.roldan@email.com",
  "telefono": "555-342-0342",
  "hospital_id": 4,
  "especialidad_id": 56,
  "seguro_medico_id": 3,
  "direccion_id": 1342
},
{
  "_id": 343,
  "nombre": "Juan Esteban Palacio Vélez",
  "correo": "juan.palacio.velez@email.com",
  "telefono": "555-343-0343",
  "hospital_id": 4,
  "especialidad_id": 21,
  "seguro_medico_id": 1,
  "direccion_id": 1343
},
{
  "_id": 344,
  "nombre": "Isabella Sofía Arango Patiño",
  "correo": "isabella.arango.patino@email.com",
  "telefono": "555-344-0344",
  "hospital_id": 4,
  "especialidad_id": 69,
  "seguro_medico_id": 1,
  "direccion_id": 1344
},
{
  "_id": 345,
  "nombre": "Diego Alejandro Osorio Rendón",
  "correo": "diego.osorio.rendon@email.com",
  "telefono": "555-345-0345",
  "hospital_id": 4,
  "especialidad_id": 80,
  "seguro_medico_id": 4,
  "direccion_id": 1345
},
{
  "_id": 346,
  "nombre": "Manuela Camila Castro Palacio",
  "correo": "manuela.castro.palacio@email.com",
  "telefono": "555-346-0346",
  "hospital_id": 4,
  "especialidad_id": 73,
  "seguro_medico_id": 4,
  "direccion_id": 1346
},
{
  "_id": 347,
  "nombre": "José Manuel Valencia Arias",
  "correo": "jose.valencia.arias@email.com",
  "telefono": "555-347-0347",
  "hospital_id": 4,
  "especialidad_id": 69,
  "seguro_medico_id": 2,
  "direccion_id": 1347
},
{
  "_id": 348,
  "nombre": "Valentina Andrea Yepes Marín",
  "correo": "valentina.yepes.marin@email.com",
  "telefono": "555-348-0348",
  "hospital_id": 4,
  "especialidad_id": 53,
  "seguro_medico_id": 4,
  "direccion_id": 1348
},
{
  "_id": 349,
  "nombre": "Ricardo Antonio Agudelo Franco",
  "correo": "ricardo.agudelo.franco@email.com",
  "telefono": "555-349-0349",
  "hospital_id": 4,
  "especialidad_id": 73,
  "seguro_medico_id": 3,
  "direccion_id": 1349
},
{
  "_id": 350,
  "nombre": "Paula Andrea Soto Mejía",
  "correo": "paula.soto.mejia@email.com",
  "telefono": "555-350-0350",
  "hospital_id": 4,
  "especialidad_id": 76,
  "seguro_medico_id": 5,
  "direccion_id": 1350
},
{
  "_id": 351,
  "nombre": "Juan David Cárdenas Rojas",
  "correo": "juan.cardenas.rojas@email.com",
  "telefono": "555-351-0351",
  "hospital_id": 4,
  "especialidad_id": 56,
  "seguro_medico_id": 4,
  "direccion_id": 1351
},
{
  "_id": 352,
  "nombre": "María Fernanda Alzate Toro",
  "correo": "maria.alzate.toro@email.com",
  "telefono": "555-352-0352",
  "hospital_id": 4,
  "especialidad_id": 41,
  "seguro_medico_id": 3,
  "direccion_id": 1352
},
{
  "_id": 353,
  "nombre": "Santiago José Londoño Alzate",
  "correo": "santiago.londono.alzate@email.com",
  "telefono": "555-353-0353",
  "hospital_id": 4,
  "especialidad_id": 17,
  "seguro_medico_id": 3,
  "direccion_id": 1353
},
{
  "_id": 354,
  "nombre": "Laura Sofía Tamayo Betancur",
  "correo": "laura.tamayo.betancur@email.com",
  "telefono": "555-354-0354",
  "hospital_id": 4,
  "especialidad_id": 1,
  "seguro_medico_id": 4,
  "direccion_id": 1354
},
{
  "_id": 355,
  "nombre": "Felipe Alejandro Ríos Cano",
  "correo": "felipe.rios.cano@email.com",
  "telefono": "555-355-0355",
  "hospital_id": 4,
  "especialidad_id": 36,
  "seguro_medico_id": 4,
  "direccion_id": 1355
},
{
  "_id": 356,
  "nombre": "María Paula Orozco Serna",
  "correo": "maria.orozco.serna@email.com",
  "telefono": "555-356-0356",
  "hospital_id": 4,
  "especialidad_id": 63,
  "seguro_medico_id": 5,
  "direccion_id": 1356
},
{
  "_id": 357,
  "nombre": "Daniel Sebastián Mesa Bedoya",
  "correo": "daniel.mesa.bedoya@email.com",
  "telefono": "555-357-0357",
  "hospital_id": 4,
  "especialidad_id": 76,
  "seguro_medico_id": 5,
  "direccion_id": 1357
},
{
  "_id": 358,
  "nombre": "Andrea Catalina Sierra Palacio",
  "correo": "andrea.sierra.palacio@email.com",
  "telefono": "555-358-0358",
  "hospital_id": 4,
  "especialidad_id": 3,
  "seguro_medico_id": 2,
  "direccion_id": 1358
},
{
  "_id": 359,
  "nombre": "Julián David Quintero Montoya",
  "correo": "julian.quintero.montoya@email.com",
  "telefono": "555-359-0359",
  "hospital_id": 4,
  "especialidad_id": 22,
  "seguro_medico_id": 2,
  "direccion_id": 1359
},
{
  "_id": 360,
  "nombre": "Sara Cristina Castaño Giraldo",
  "correo": "sara.castano.giraldo@email.com",
  "telefono": "555-360-0360",
  "hospital_id": 4,
  "especialidad_id": 32,
  "seguro_medico_id": 5,
  "direccion_id": 1360
},
{
  "_id": 361,
  "nombre": "Emmanuel Alejandro Henao Perea",
  "correo": "emmanuel.henao.perea@email.com",
  "telefono": "555-361-0361",
  "hospital_id": 4,
  "especialidad_id": 17,
  "seguro_medico_id": 3,
  "direccion_id": 1361
},
{
  "_id": 362,
  "nombre": "Valentina Sofía Montoya Cardona",
  "correo": "valentina.montoya.cardona@email.com",
  "telefono": "555-362-0362",
  "hospital_id": 4,
  "especialidad_id": 44,
  "seguro_medico_id": 1,
  "direccion_id": 1362
},
{
  "_id": 363,
  "nombre": "Pablo Andrés Posada Vélez",
  "correo": "pablo.posada.velez@email.com",
  "telefono": "555-363-0363",
  "hospital_id": 4,
  "especialidad_id": 63,
  "seguro_medico_id": 5,
  "direccion_id": 1363
},
{
  "_id": 364,
  "nombre": "Isabella María Marín Sánchez",
  "correo": "isabella.marin.sanchez@email.com",
  "telefono": "555-364-0364",
  "hospital_id": 4,
  "especialidad_id": 77,
  "seguro_medico_id": 1,
  "direccion_id": 1364
},
{
  "_id": 365,
  "nombre": "Juan Camilo Botero Mejía",
  "correo": "juan.botero.mejia@email.com",
  "telefono": "555-365-0365",
  "hospital_id": 4,
  "especialidad_id": 67,
  "seguro_medico_id": 1,
  "direccion_id": 1365
},
{
  "_id": 366,
  "nombre": "Natalia Carolina Franco Acevedo",
  "correo": "natalia.franco.acevedo@email.com",
  "telefono": "555-366-0366",
  "hospital_id": 4,
  "especialidad_id": 63,
  "seguro_medico_id": 4,
  "direccion_id": 1366
},
{
  "_id": 367,
  "nombre": "Miguel David Giraldo Pineda",
  "correo": "miguel.giraldo.pineda@email.com",
  "telefono": "555-367-0367",
  "hospital_id": 4,
  "especialidad_id": 51,
  "seguro_medico_id": 3,
  "direccion_id": 1367
},
{
  "_id": 368,
  "nombre": "Luciana Gabriela Alzate Restrepo",
  "correo": "luciana.alzate.restrepo@email.com",
  "telefono": "555-368-0368",
  "hospital_id": 4,
  "especialidad_id": 49,
  "seguro_medico_id": 1,
  "direccion_id": 1368
},
{
  "_id": 369,
  "nombre": "Alejandro José Zuluaga Rivera",
  "correo": "alejandro.zuluaga.rivera@email.com",
  "telefono": "555-369-0369",
  "hospital_id": 4,
  "especialidad_id": 68,
  "seguro_medico_id": 1,
  "direccion_id": 1369
},
{
  "_id": 370,
  "nombre": "Mariana Alejandra Mesa Herrera",
  "correo": "mariana.mesa.herrera@email.com",
  "telefono": "555-370-0370",
  "hospital_id": 4,
  "especialidad_id": 12,
  "seguro_medico_id": 2,
  "direccion_id": 1370
},
{
  "_id": 371,
  "nombre": "Felipe Sebastián Ortiz Vélez",
  "correo": "felipe.ortiz.velez@email.com",
  "telefono": "555-371-0371",
  "hospital_id": 4,
  "especialidad_id": 37,
  "seguro_medico_id": 5,
  "direccion_id": 1371
},
{
  "_id": 372,
  "nombre": "Laura Victoria Betancur Arcila",
  "correo": "laura.betancur.arcila@email.com",
  "telefono": "555-372-0372",
  "hospital_id": 4,
  "especialidad_id": 79,
  "seguro_medico_id": 1,
  "direccion_id": 1372
},
{
  "_id": 373,
  "nombre": "Andrés Mauricio Cano Lopera",
  "correo": "andres.cano.lopera@email.com",
  "telefono": "555-373-0373",
  "hospital_id": 4,
  "especialidad_id": 64,
  "seguro_medico_id": 3,
  "direccion_id": 1373
},
{
  "_id": 374,
  "nombre": "Sofía Valentina Jaramillo Cardona",
  "correo": "sofia.jaramillo.cardona@email.com",
  "telefono": "555-374-0374",
  "hospital_id": 4,
  "especialidad_id": 48,
  "seguro_medico_id": 1,
  "direccion_id": 1374
},
{
  "_id": 375,
  "nombre": "Juan David Yepes Sierra",
  "correo": "juan.yepes.sierra@email.com",
  "telefono": "555-375-0375",
  "hospital_id": 4,
  "especialidad_id": 43,
  "seguro_medico_id": 2,
  "direccion_id": 1375
},
{
  "_id": 376,
  "nombre": "Valeria Sofía Gaviria Salazar",
  "correo": "valeria.gaviria.salazar@email.com",
  "telefono": "555-376-0376",
  "hospital_id": 4,
  "especialidad_id": 52,
  "seguro_medico_id": 4,
  "direccion_id": 1376
},
{
  "_id": 377,
  "nombre": "Daniel Felipe Monsalve Restrepo",
  "correo": "daniel.monsalve.restrepo@email.com",
  "telefono": "555-377-0377",
  "hospital_id": 4,
  "especialidad_id": 58,
  "seguro_medico_id": 2,
  "direccion_id": 1377
},
{
  "_id": 378,
  "nombre": "Andrea Sofía Arango Londoño",
  "correo": "andrea.arango.londono@email.com",
  "telefono": "555-378-0378",
  "hospital_id": 4,
  "especialidad_id": 38,
  "seguro_medico_id": 2,
  "direccion_id": 1378
},
{
  "_id": 379,
  "nombre": "Santiago Esteban Pardo Osorio",
  "correo": "santiago.pardo.osorio@email.com",
  "telefono": "555-379-0379",
  "hospital_id": 4,
  "especialidad_id": 30,
  "seguro_medico_id": 5,
  "direccion_id": 1379
},
{
  "_id": 380,
  "nombre": "Sara Marcela Toro Sánchez",
  "correo": "sara.toro.sanchez@email.com",
  "telefono": "555-380-0380",
  "hospital_id": 4,
  "especialidad_id": 74,
  "seguro_medico_id": 5,
  "direccion_id": 1380
},
{
  "_id": 381,
  "nombre": "Miguel Ángel Vélez Duque",
  "correo": "miguel.velez.duque@email.com",
  "telefono": "555-381-0381",
  "hospital_id": 4,
  "especialidad_id": 29,
  "seguro_medico_id": 4,
  "direccion_id": 1381
},
{
  "_id": 382,
  "nombre": "Lucía Fernanda Zapata Mejía",
  "correo": "lucia.zapata.mejia@email.com",
  "telefono": "555-382-0382",
  "hospital_id": 4,
  "especialidad_id": 75,
  "seguro_medico_id": 2,
  "direccion_id": 1382
},
{
  "_id": 383,
  "nombre": "José David Roldán Carmona",
  "correo": "jose.roldan.carmona@email.com",
  "telefono": "555-383-0383",
  "hospital_id": 4,
  "especialidad_id": 7,
  "seguro_medico_id": 4,
  "direccion_id": 1383
},
{
  "_id": 384,
  "nombre": "Valentina Isabel Pineda Betancur",
  "correo": "valentina.pineda.betancur@email.com",
  "telefono": "555-384-0384",
  "hospital_id": 4,
  "especialidad_id": 14,
  "seguro_medico_id": 5,
  "direccion_id": 1384
},
{
  "_id": 385,
  "nombre": "Carlos Daniel Quintero Álvarez",
  "correo": "carlos.quintero.alvarez@email.com",
  "telefono": "555-385-0385",
  "hospital_id": 4,
  "especialidad_id": 64,
  "seguro_medico_id": 3,
  "direccion_id": 1385
},
{
  "_id": 386,
  "nombre": "Andrea Camila Puerta Restrepo",
  "correo": "andrea.puerta.restrepo@email.com",
  "telefono": "555-386-0386",
  "hospital_id": 4,
  "especialidad_id": 27,
  "seguro_medico_id": 4,
  "direccion_id": 1386
},
{
  "_id": 387,
  "nombre": "Julián Andrés Montoya Ceballos",
  "correo": "julian.montoya.ceballos@email.com",
  "telefono": "555-387-0387",
  "hospital_id": 4,
  "especialidad_id": 63,
  "seguro_medico_id": 5,
  "direccion_id": 1387
},
{
  "_id": 388,
  "nombre": "Sara Sofía Mejía Franco",
  "correo": "sara.mejia.franco@email.com",
  "telefono": "555-388-0388",
  "hospital_id": 4,
  "especialidad_id": 55,
  "seguro_medico_id": 5,
  "direccion_id": 1388
},
{
  "_id": 389,
  "nombre": "Felipe Antonio Betancur Marín",
  "correo": "felipe.betancur.marin@email.com",
  "telefono": "555-389-0389",
  "hospital_id": 4,
  "especialidad_id": 13,
  "seguro_medico_id": 4,
  "direccion_id": 1389
},
{
  "_id": 390,
  "nombre": "Gabriela Alejandra Londoño Soto",
  "correo": "gabriela.londono.soto@email.com",
  "telefono": "555-390-0390",
  "hospital_id": 4,
  "especialidad_id": 42,
  "seguro_medico_id": 1,
  "direccion_id": 1390
},
{
  "_id": 391,
  "nombre": "Santiago Nicolás Carmona Posada",
  "correo": "santiago.carmona.posada@email.com",
  "telefono": "555-391-0391",
  "hospital_id": 4,
  "especialidad_id": 21,
  "seguro_medico_id": 1,
  "direccion_id": 1391
},
{
  "_id": 392,
  "nombre": "Natalia Andrea Escobar Ramírez",
  "correo": "natalia.escobar.ramirez@email.com",
  "telefono": "555-392-0392",
  "hospital_id": 4,
  "especialidad_id": 43,
  "seguro_medico_id": 1,
  "direccion_id": 1392
},
{
  "_id": 393,
  "nombre": "Juan Esteban Palacio Restrepo",
  "correo": "juan.palacio.restrepo@email.com",
  "telefono": "555-393-0393",
  "hospital_id": 4,
  "especialidad_id": 58,
  "seguro_medico_id": 1,
  "direccion_id": 1393
},
{
  "_id": 394,
  "nombre": "Isabella Sofía Arango Osorio",
  "correo": "isabella.arango.osorio@email.com",
  "telefono": "555-394-0394",
  "hospital_id": 4,
  "especialidad_id": 77,
  "seguro_medico_id": 1,
  "direccion_id": 1394
},
{
  "_id": 395,
  "nombre": "Diego Alejandro Osorio Sánchez",
  "correo": "diego.osorio.sanchez@email.com",
  "telefono": "555-395-0395",
  "hospital_id": 4,
  "especialidad_id": 35,
  "seguro_medico_id": 2,
  "direccion_id": 1395
},
{
  "_id": 396,
  "nombre": "Manuela Camila Castro Vélez",
  "correo": "manuela.castro.velez@email.com",
  "telefono": "555-396-0396",
  "hospital_id": 4,
  "especialidad_id": 26,
  "seguro_medico_id": 4,
  "direccion_id": 1396
},
{
  "_id": 397,
  "nombre": "José Manuel Valencia Díaz",
  "correo": "jose.valencia.diaz@email.com",
  "telefono": "555-397-0397",
  "hospital_id": 4,
  "especialidad_id": 28,
  "seguro_medico_id": 5,
  "direccion_id": 1397
},
{
  "_id": 398,
  "nombre": "Valentina Andrea Yepes Marín",
  "correo": "valentina.yepes.marin@email.com",
  "telefono": "555-398-0398",
  "hospital_id": 4,
  "especialidad_id": 50,
  "seguro_medico_id": 3,
  "direccion_id": 1398
},
{
  "_id": 399,
  "nombre": "Ricardo Antonio Agudelo Franco",
  "correo": "ricardo.agudelo.franco@email.com",
  "telefono": "555-399-0399",
  "hospital_id": 4,
  "especialidad_id": 49,
  "seguro_medico_id": 3,
  "direccion_id": 1399
},
{
  "_id": 400,
  "nombre": "Paula Andrea Soto Mejía",
  "correo": "paula.soto.mejia@email.com",
  "telefono": "555-400-0400",
  "hospital_id": 4,
  "especialidad_id": 63,
  "seguro_medico_id": 5,
  "direccion_id": 1400
},
{
  "_id": 401,
  "nombre": "Juan Camilo Soto Vélez",
  "correo": "juan.soto.velez@email.com",
  "telefono": "555-401-0401",
  "hospital_id": 5,
  "especialidad_id": 7,
  "seguro_medico_id": 2,
  "direccion_id": 1401
},
{
  "_id": 402,
  "nombre": "Ana María Rincón Cardona",
  "correo": "ana.rincon.cardona@email.com",
  "telefono": "555-402-0402",
  "hospital_id": 5,
  "especialidad_id": 11,
  "seguro_medico_id": 5,
  "direccion_id": 1402
},
{
  "_id": 403,
  "nombre": "Pedro Luis Jaramillo López",
  "correo": "pedro.jaramillo.lopez@email.com",
  "telefono": "555-403-0403",
  "hospital_id": 5,
  "especialidad_id": 57,
  "seguro_medico_id": 2,
  "direccion_id": 1403
},
{
  "_id": 404,
  "nombre": "Sofía Alejandra Ruiz Marín",
  "correo": "sofia.ruiz.marin@email.com",
  "telefono": "555-404-0404",
  "hospital_id": 5,
  "especialidad_id": 71,
  "seguro_medico_id": 3,
  "direccion_id": 1404
},
{
  "_id": 405,
  "nombre": "Diego Alejandro Castro Quintero",
  "correo": "diego.castro.quintero@email.com",
  "telefono": "555-405-0405",
  "hospital_id": 5,
  "especialidad_id": 58,
  "seguro_medico_id": 3,
  "direccion_id": 1405
},
{
  "_id": 406,
  "nombre": "Mariana Sofía Vargas Rojas",
  "correo": "mariana.vargas.rojas@email.com",
  "telefono": "555-406-0406",
  "hospital_id": 5,
  "especialidad_id": 39,
  "seguro_medico_id": 2,
  "direccion_id": 1406
},
{
  "_id": 407,
  "nombre": "Carlos Daniel Londoño Giraldo",
  "correo": "carlos.londono.giraldo@email.com",
  "telefono": "555-407-0407",
  "hospital_id": 5,
  "especialidad_id": 68,
  "seguro_medico_id": 5,
  "direccion_id": 1407
},
{
  "_id": 408,
  "nombre": "Paula Andrea Morales Restrepo",
  "correo": "paula.morales.restrepo@email.com",
  "telefono": "555-408-0408",
  "hospital_id": 5,
  "especialidad_id": 73,
  "seguro_medico_id": 3,
  "direccion_id": 1408
},
{
  "_id": 409,
  "nombre": "Juan Esteban Sierra Ospina",
  "correo": "juan.sierra.ospina@email.com",
  "telefono": "555-409-0409",
  "hospital_id": 5,
  "especialidad_id": 6,
  "seguro_medico_id": 1,
  "direccion_id": 1409
},
{
  "_id": 410,
  "nombre": "Gabriela Alejandra Orozco Vélez",
  "correo": "gabriela.orozco.velez@email.com",
  "telefono": "555-410-0410",
  "hospital_id": 5,
  "especialidad_id": 22,
  "seguro_medico_id": 2,
  "direccion_id": 1410
},
{
  "_id": 411,
  "nombre": "Andrés Felipe Giraldo Duque",
  "correo": "andres.giraldo.duque@email.com",
  "telefono": "555-411-0411",
  "hospital_id": 5,
  "especialidad_id": 55,
  "seguro_medico_id": 1,
  "direccion_id": 1411
},
{
  "_id": 412,
  "nombre": "Carolina Andrea Restrepo Pineda",
  "correo": "carolina.restrepo.pineda@email.com",
  "telefono": "555-412-0412",
  "hospital_id": 5,
  "especialidad_id": 2,
  "seguro_medico_id": 1,
  "direccion_id": 1412
},
{
  "_id": 413,
  "nombre": "Santiago José Betancur Tamayo",
  "correo": "santiago.betancur.tamayo@email.com",
  "telefono": "555-413-0413",
  "hospital_id": 5,
  "especialidad_id": 54,
  "seguro_medico_id": 1,
  "direccion_id": 1413
},
{
  "_id": 414,
  "nombre": "Valeria Isabel Pérez Mesa",
  "correo": "valeria.perez.mesa@email.com",
  "telefono": "555-414-0414",
  "hospital_id": 5,
  "especialidad_id": 59,
  "seguro_medico_id": 2,
  "direccion_id": 1414
},
{
  "_id": 415,
  "nombre": "Felipe Antonio Quintero Castaño",
  "correo": "felipe.quintero.castano@email.com",
  "telefono": "555-415-0415",
  "hospital_id": 5,
  "especialidad_id": 48,
  "seguro_medico_id": 5,
  "direccion_id": 1415
},
{
  "_id": 416,
  "nombre": "Daniela Fernanda Roldán Salazar",
  "correo": "daniela.roldan.salazar@email.com",
  "telefono": "555-416-0416",
  "hospital_id": 5,
  "especialidad_id": 23,
  "seguro_medico_id": 1,
  "direccion_id": 1416
},
{
  "_id": 417,
  "nombre": "José Miguel Gómez Toro",
  "correo": "jose.gomez.toro@email.com",
  "telefono": "555-417-0417",
  "hospital_id": 5,
  "especialidad_id": 18,
  "seguro_medico_id": 5,
  "direccion_id": 1417
},
{
  "_id": 418,
  "nombre": "Camila Victoria Suárez Arango",
  "correo": "camila.suarez.arango@email.com",
  "telefono": "555-418-0418",
  "hospital_id": 5,
  "especialidad_id": 22,
  "seguro_medico_id": 3,
  "direccion_id": 1418
},
{
  "_id": 419,
  "nombre": "Ricardo Andrés Duque Pineda",
  "correo": "ricardo.duque.pineda@email.com",
  "telefono": "555-419-0419",
  "hospital_id": 5,
  "especialidad_id": 71,
  "seguro_medico_id": 3,
  "direccion_id": 1419
},
{
  "_id": 420,
  "nombre": "Sofía Valentina Zapata Montoya",
  "correo": "sofia.zapata.montoya@email.com",
  "telefono": "555-420-0420",
  "hospital_id": 5,
  "especialidad_id": 74,
  "seguro_medico_id": 5,
  "direccion_id": 1420
},
{
  "_id": 421,
  "nombre": "Gabriel Antonio Carmona Restrepo",
  "correo": "gabriel.carmona.restrepo@email.com",
  "telefono": "555-421-0421",
  "hospital_id": 5,
  "especialidad_id": 7,
  "seguro_medico_id": 2,
  "direccion_id": 1421
},
{
  "_id": 422,
  "nombre": "Isabella Carolina Alzate Mejía",
  "correo": "isabella.alzate.mejia@email.com",
  "telefono": "555-422-0422",
  "hospital_id": 5,
  "especialidad_id": 77,
  "seguro_medico_id": 2,
  "direccion_id": 1422
},
{
  "_id": 423,
  "nombre": "Miguel Ángel Franco López",
  "correo": "miguel.franco.lopez@email.com",
  "telefono": "555-423-0423",
  "hospital_id": 5,
  "especialidad_id": 8,
  "seguro_medico_id": 5,
  "direccion_id": 1423
},
{
  "_id": 424,
  "nombre": "Paula Sofía Gaviria Perea",
  "correo": "paula.gaviria.perea@email.com",
  "telefono": "555-424-0424",
  "hospital_id": 5,
  "especialidad_id": 22,
  "seguro_medico_id": 5,
  "direccion_id": 1424
},
{
  "_id": 425,
  "nombre": "Juan Camilo Osorio Jaramillo",
  "correo": "juan.osorio.jaramillo@email.com",
  "telefono": "555-425-0425",
  "hospital_id": 5,
  "especialidad_id": 40,
  "seguro_medico_id": 5,
  "direccion_id": 1425
},
{
  "_id": 426,
  "nombre": "Natalia Andrea Botero Medina",
  "correo": "natalia.botero.medina@email.com",
  "telefono": "555-426-0426",
  "hospital_id": 5,
  "especialidad_id": 13,
  "seguro_medico_id": 2,
  "direccion_id": 1426
},
{
  "_id": 427,
  "nombre": "Sebastián Andrés Ríos Posada",
  "correo": "sebastian.rios.posada@email.com",
  "telefono": "555-427-0427",
  "hospital_id": 5,
  "especialidad_id": 68,
  "seguro_medico_id": 4,
  "direccion_id": 1427
},
{
  "_id": 428,
  "nombre": "María Alejandra Serna Sierra",
  "correo": "maria.serna.sierra@email.com",
  "telefono": "555-428-0428",
  "hospital_id": 5,
  "especialidad_id": 39,
  "seguro_medico_id": 2,
  "direccion_id": 1428
},
{
  "_id": 429,
  "nombre": "Daniel Esteban Monsalve Ortiz",
  "correo": "daniel.monsalve.ortiz@email.com",
  "telefono": "555-429-0429",
  "hospital_id": 5,
  "especialidad_id": 66,
  "seguro_medico_id": 3,
  "direccion_id": 1429
},
{
  "_id": 430,
  "nombre": "Laura Valentina Sierra Zapata",
  "correo": "laura.sierra.zapata@email.com",
  "telefono": "555-430-0430",
  "hospital_id": 5,
  "especialidad_id": 27,
  "seguro_medico_id": 2,
  "direccion_id": 1430
},
{
  "_id": 431,
  "nombre": "Juan David Quintero Agudelo",
  "correo": "juan.quintero.agudelo@email.com",
  "telefono": "555-431-0431",
  "hospital_id": 5,
  "especialidad_id": 19,
  "seguro_medico_id": 2,
  "direccion_id": 1431
},
{
  "_id": 432,
  "nombre": "Sara Sofía Castaño Herrera",
  "correo": "sara.castano.herrera@email.com",
  "telefono": "555-432-0432",
  "hospital_id": 5,
  "especialidad_id": 33,
  "seguro_medico_id": 1,
  "direccion_id": 1432
},
{
  "_id": 433,
  "nombre": "Emmanuel Felipe Henao Cardona",
  "correo": "emmanuel.henao.cardona@email.com",
  "telefono": "555-433-0433",
  "hospital_id": 5,
  "especialidad_id": 57,
  "seguro_medico_id": 4,
  "direccion_id": 1433
},
{
  "_id": 434,
  "nombre": "Valentina Sofía Montoya Vélez",
  "correo": "valentina.montoya.velez@email.com",
  "telefono": "555-434-0434",
  "hospital_id": 5,
  "especialidad_id": 59,
  "seguro_medico_id": 5,
  "direccion_id": 1434
},
{
  "_id": 435,
  "nombre": "Pablo Andrés Posada Restrepo",
  "correo": "pablo.posada.restrepo@email.com",
  "telefono": "555-435-0435",
  "hospital_id": 5,
  "especialidad_id": 42,
  "seguro_medico_id": 3,
  "direccion_id": 1435
},
{
  "_id": 436,
  "nombre": "Isabella María Marín Sánchez",
  "correo": "isabella.marin.sanchez@email.com",
  "telefono": "555-436-0436",
  "hospital_id": 5,
  "especialidad_id": 4,
  "seguro_medico_id": 5,
  "direccion_id": 1436
},
{
  "_id": 437,
  "nombre": "Sebastián José Vélez Giraldo",
  "correo": "sebastian.velez.giraldo@email.com",
  "telefono": "555-437-0437",
  "hospital_id": 5,
  "especialidad_id": 69,
  "seguro_medico_id": 5,
  "direccion_id": 1437
},
{
  "_id": 438,
  "nombre": "Mariana Nicole Medina Patiño",
  "correo": "mariana.medina.patino@email.com",
  "telefono": "555-438-0438",
  "hospital_id": 5,
  "especialidad_id": 29,
  "seguro_medico_id": 2,
  "direccion_id": 1438
},
{
  "_id": 439,
  "nombre": "Felipe Antonio Vargas Mesa",
  "correo": "felipe.vargas.mesa@email.com",
  "telefono": "555-439-0439",
  "hospital_id": 5,
  "especialidad_id": 77,
  "seguro_medico_id": 2,
  "direccion_id": 1439
},
{
  "_id": 440,
  "nombre": "Gabriela Sofía Restrepo Cardona",
  "correo": "gabriela.restrepo.cardona@email.com",
  "telefono": "555-440-0440",
  "hospital_id": 5,
  "especialidad_id": 5,
  "seguro_medico_id": 2,
  "direccion_id": 1440
},
{
  "_id": 441,
  "nombre": "Santiago Nicolás Carmona Betancourt",
  "correo": "santiago.carmona.betancourt@email.com",
  "telefono": "555-441-0441",
  "hospital_id": 5,
  "especialidad_id": 20,
  "seguro_medico_id": 1,
  "direccion_id": 1441
},
{
  "_id": 442,
  "nombre": "Natalia Andrea Escobar Roldán",
  "correo": "natalia.escobar.roldan@email.com",
  "telefono": "555-442-0442",
  "hospital_id": 5,
  "especialidad_id": 51,
  "seguro_medico_id": 5,
  "direccion_id": 1442
},
{
  "_id": 443,
  "nombre": "Juan Esteban Palacio Vélez",
  "correo": "juan.palacio.velez@email.com",
  "telefono": "555-443-0443",
  "hospital_id": 5,
  "especialidad_id": 68,
  "seguro_medico_id": 3,
  "direccion_id": 1443
},
{
  "_id": 444,
  "nombre": "Isabella Sofía Arango Patiño",
  "correo": "isabella.arango.patino@email.com",
  "telefono": "555-444-0444",
  "hospital_id": 5,
  "especialidad_id": 36,
  "seguro_medico_id": 3,
  "direccion_id": 1444
},
{
  "_id": 445,
  "nombre": "Diego Alejandro Osorio Rendón",
  "correo": "diego.osorio.rendon@email.com",
  "telefono": "555-445-0445",
  "hospital_id": 5,
  "especialidad_id": 32,
  "seguro_medico_id": 4,
  "direccion_id": 1445
},
{
  "_id": 446,
  "nombre": "Manuela Camila Castro Palacio",
  "correo": "manuela.castro.palacio@email.com",
  "telefono": "555-446-0446",
  "hospital_id": 5,
  "especialidad_id": 35,
  "seguro_medico_id": 4,
  "direccion_id": 1446
},
{
  "_id": 447,
  "nombre": "José Manuel Valencia Arias",
  "correo": "jose.valencia.arias@email.com",
  "telefono": "555-447-0447",
  "hospital_id": 5,
  "especialidad_id": 7,
  "seguro_medico_id": 2,
  "direccion_id": 1447
},
{
  "_id": 448,
  "nombre": "Valentina Andrea Yepes Marín",
  "correo": "valentina.yepes.marin@email.com",
  "telefono": "555-448-0448",
  "hospital_id": 5,
  "especialidad_id": 38,
  "seguro_medico_id": 5,
  "direccion_id": 1448
},
{
  "_id": 449,
  "nombre": "Ricardo Antonio Agudelo Franco",
  "correo": "ricardo.agudelo.franco@email.com",
  "telefono": "555-449-0449",
  "hospital_id": 5,
  "especialidad_id": 40,
  "seguro_medico_id": 1,
  "direccion_id": 1449
},
{
  "_id": 450,
  "nombre": "Paula Andrea Soto Mejía",
  "correo": "paula.soto.mejia@email.com",
  "telefono": "555-450-0450",
  "hospital_id": 5,
  "especialidad_id": 69,
  "seguro_medico_id": 1,
  "direccion_id": 1450
},
{
  "_id": 451,
  "nombre": "Juan David Cárdenas Rojas",
  "correo": "juan.cardenas.rojas@email.com",
  "telefono": "555-451-0451",
  "hospital_id": 5,
  "especialidad_id": 11,
  "seguro_medico_id": 1,
  "direccion_id": 1451
},
{
  "_id": 452,
  "nombre": "María Fernanda Alzate Toro",
  "correo": "maria.alzate.toro@email.com",
  "telefono": "555-452-0452",
  "hospital_id": 5,
  "especialidad_id": 18,
  "seguro_medico_id": 1,
  "direccion_id": 1452
},
{
  "_id": 453,
  "nombre": "Santiago José Londoño Alzate",
  "correo": "santiago.londono.alzate@email.com",
  "telefono": "555-453-0453",
  "hospital_id": 5,
  "especialidad_id": 52,
  "seguro_medico_id": 2,
  "direccion_id": 1453
},
{
  "_id": 454,
  "nombre": "Laura Sofía Tamayo Betancur",
  "correo": "laura.tamayo.betancur@email.com",
  "telefono": "555-454-0454",
  "hospital_id": 5,
  "especialidad_id": 13,
  "seguro_medico_id": 3,
  "direccion_id": 1454
},
{
  "_id": 455,
  "nombre": "Felipe Alejandro Ríos Cano",
  "correo": "felipe.rios.cano@email.com",
  "telefono": "555-455-0455",
  "hospital_id": 5,
  "especialidad_id": 65,
  "seguro_medico_id": 1,
  "direccion_id": 1455
},
{
  "_id": 456,
  "nombre": "María Paula Orozco Serna",
  "correo": "maria.orozco.serna@email.com",
  "telefono": "555-456-0456",
  "hospital_id": 5,
  "especialidad_id": 36,
  "seguro_medico_id": 3,
  "direccion_id": 1456
},
{
  "_id": 457,
  "nombre": "Daniel Sebastián Mesa Bedoya",
  "correo": "daniel.mesa.bedoya@email.com",
  "telefono": "555-457-0457",
  "hospital_id": 5,
  "especialidad_id": 75,
  "seguro_medico_id": 2,
  "direccion_id": 1457
},
{
  "_id": 458,
  "nombre": "Andrea Catalina Sierra Palacio",
  "correo": "andrea.sierra.palacio@email.com",
  "telefono": "555-458-0458",
  "hospital_id": 5,
  "especialidad_id": 39,
  "seguro_medico_id": 4,
  "direccion_id": 1458
},
{
  "_id": 459,
  "nombre": "Julián David Quintero Montoya",
  "correo": "julian.quintero.montoya@email.com",
  "telefono": "555-459-0459",
  "hospital_id": 5,
  "especialidad_id": 65,
  "seguro_medico_id": 3,
  "direccion_id": 1459
},
{
  "_id": 460,
  "nombre": "Sara Cristina Castaño Giraldo",
  "correo": "sara.castano.giraldo@email.com",
  "telefono": "555-460-0460",
  "hospital_id": 5,
  "especialidad_id": 46,
  "seguro_medico_id": 3,
  "direccion_id": 1460
},
{
  "_id": 461,
  "nombre": "Emmanuel Alejandro Henao Perea",
  "correo": "emmanuel.henao.perea@email.com",
  "telefono": "555-461-0461",
  "hospital_id": 5,
  "especialidad_id": 62,
  "seguro_medico_id": 2,
  "direccion_id": 1461
},
{
  "_id": 462,
  "nombre": "Valentina Sofía Montoya Cardona",
  "correo": "valentina.montoya.cardona@email.com",
  "telefono": "555-462-0462",
  "hospital_id": 5,
  "especialidad_id": 46,
  "seguro_medico_id": 5,
  "direccion_id": 1462
},
{
  "_id": 463,
  "nombre": "Pablo Andrés Posada Vélez",
  "correo": "pablo.posada.velez@email.com",
  "telefono": "555-463-0463",
  "hospital_id": 5,
  "especialidad_id": 16,
  "seguro_medico_id": 3,
  "direccion_id": 1463
},
{
  "_id": 464,
  "nombre": "Isabella María Marín Sánchez",
  "correo": "isabella.marin.sanchez@email.com",
  "telefono": "555-464-0464",
  "hospital_id": 5,
  "especialidad_id": 67,
  "seguro_medico_id": 5,
  "direccion_id": 1464
},
{
  "_id": 465,
  "nombre": "Juan Camilo Botero Mejía",
  "correo": "juan.botero.mejia@email.com",
  "telefono": "555-465-0465",
  "hospital_id": 5,
  "especialidad_id": 79,
  "seguro_medico_id": 2,
  "direccion_id": 1465
},
{
  "_id": 466,
  "nombre": "Natalia Carolina Franco Acevedo",
  "correo": "natalia.franco.acevedo@email.com",
  "telefono": "555-466-0466",
  "hospital_id": 5,
  "especialidad_id": 31,
  "seguro_medico_id": 3,
  "direccion_id": 1466
},
{
  "_id": 467,
  "nombre": "Miguel David Giraldo Pineda",
  "correo": "miguel.giraldo.pineda@email.com",
  "telefono": "555-467-0467",
  "hospital_id": 5,
  "especialidad_id": 5,
  "seguro_medico_id": 3,
  "direccion_id": 1467
},
{
  "_id": 468,
  "nombre": "Luciana Gabriela Alzate Restrepo",
  "correo": "luciana.alzate.restrepo@email.com",
  "telefono": "555-468-0468",
  "hospital_id": 5,
  "especialidad_id": 14,
  "seguro_medico_id": 2,
  "direccion_id": 1468
},
{
  "_id": 469,
  "nombre": "Alejandro José Zuluaga Rivera",
  "correo": "alejandro.zuluaga.rivera@email.com",
  "telefono": "555-469-0469",
  "hospital_id": 5,
  "especialidad_id": 57,
  "seguro_medico_id": 2,
  "direccion_id": 1469
},
{
  "_id": 470,
  "nombre": "Mariana Alejandra Mesa Herrera",
  "correo": "mariana.mesa.herrera@email.com",
  "telefono": "555-470-0470",
  "hospital_id": 5,
  "especialidad_id": 69,
  "seguro_medico_id": 1,
  "direccion_id": 1470
},
{
  "_id": 471,
  "nombre": "Felipe Sebastián Ortiz Vélez",
  "correo": "felipe.ortiz.velez@email.com",
  "telefono": "555-471-0471",
  "hospital_id": 5,
  "especialidad_id": 19,
  "seguro_medico_id": 5,
  "direccion_id": 1471
},
{
  "_id": 472,
  "nombre": "Laura Victoria Betancur Arcila",
  "correo": "laura.betancur.arcila@email.com",
  "telefono": "555-472-0472",
  "hospital_id": 5,
  "especialidad_id": 69,
  "seguro_medico_id": 3,
  "direccion_id": 1472
},
{
  "_id": 473,
  "nombre": "Andrés Mauricio Cano Lopera",
  "correo": "andres.cano.lopera@email.com",
  "telefono": "555-473-0473",
  "hospital_id": 5,
  "especialidad_id": 21,
  "seguro_medico_id": 5,
  "direccion_id": 1473
},
{
  "_id": 474,
  "nombre": "Sofía Valentina Jaramillo Cardona",
  "correo": "sofia.jaramillo.cardona@email.com",
  "telefono": "555-474-0474",
  "hospital_id": 5,
  "especialidad_id": 71,
  "seguro_medico_id": 3,
  "direccion_id": 1474
},
{
  "_id": 475,
  "nombre": "Juan David Yepes Sierra",
  "correo": "juan.yepes.sierra@email.com",
  "telefono": "555-475-0475",
  "hospital_id": 5,
  "especialidad_id": 16,
  "seguro_medico_id": 5,
  "direccion_id": 1475
},
{
  "_id": 476,
  "nombre": "Valeria Sofía Gaviria Salazar",
  "correo": "valeria.gaviria.salazar@email.com",
  "telefono": "555-476-0476",
  "hospital_id": 5,
  "especialidad_id": 18,
  "seguro_medico_id": 4,
  "direccion_id": 1476
},
{
  "_id": 477,
  "nombre": "Daniel Felipe Monsalve Restrepo",
  "correo": "daniel.monsalve.restrepo@email.com",
  "telefono": "555-477-0477",
  "hospital_id": 5,
  "especialidad_id": 58,
  "seguro_medico_id": 1,
  "direccion_id": 1477
},
{
  "_id": 478,
  "nombre": "Andrea Sofía Arango Londoño",
  "correo": "andrea.arango.londono@email.com",
  "telefono": "555-478-0478",
  "hospital_id": 5,
  "especialidad_id": 58,
  "seguro_medico_id": 2,
  "direccion_id": 1478
},
{
  "_id": 479,
  "nombre": "Santiago Esteban Pardo Osorio",
  "correo": "santiago.pardo.osorio@email.com",
  "telefono": "555-479-0479",
  "hospital_id": 5,
  "especialidad_id": 22,
  "seguro_medico_id": 3,
  "direccion_id": 1479
},
{
  "_id": 480,
  "nombre": "Sara Marcela Toro Sánchez",
  "correo": "sara.toro.sanchez@email.com",
  "telefono": "555-480-0480",
  "hospital_id": 5,
  "especialidad_id": 32,
  "seguro_medico_id": 5,
  "direccion_id": 1480
},
{
  "_id": 481,
  "nombre": "Miguel Ángel Vélez Duque",
  "correo": "miguel.velez.duque@email.com",
  "telefono": "555-481-0481",
  "hospital_id": 5,
  "especialidad_id": 5,
  "seguro_medico_id": 1,
  "direccion_id": 1481
},
{
  "_id": 482,
  "nombre": "Lucía Fernanda Zapata Mejía",
  "correo": "lucia.zapata.mejia@email.com",
  "telefono": "555-482-0482",
  "hospital_id": 5,
  "especialidad_id": 2,
  "seguro_medico_id": 5,
  "direccion_id": 1482
},
{
  "_id": 483,
  "nombre": "José David Roldán Carmona",
  "correo": "jose.roldan.carmona@email.com",
  "telefono": "555-483-0483",
  "hospital_id": 5,
  "especialidad_id": 47,
  "seguro_medico_id": 2,
  "direccion_id": 1483
},
{
  "_id": 484,
  "nombre": "Valentina Isabel Pineda Betancur",
  "correo": "valentina.pineda.betancur@email.com",
  "telefono": "555-484-0484",
  "hospital_id": 5,
  "especialidad_id": 65,
  "seguro_medico_id": 2,
  "direccion_id": 1484
},
{
  "_id": 485,
  "nombre": "Carlos Daniel Quintero Álvarez",
  "correo": "carlos.quintero.alvarez@email.com",
  "telefono": "555-485-0485",
  "hospital_id": 5,
  "especialidad_id": 68,
  "seguro_medico_id": 2,
  "direccion_id": 1485
},
{
  "_id": 486,
  "nombre": "Andrea Camila Puerta Restrepo",
  "correo": "andrea.puerta.restrepo@email.com",
  "telefono": "555-486-0486",
  "hospital_id": 5,
  "especialidad_id": 27,
  "seguro_medico_id": 1,
  "direccion_id": 1486
},
{
  "_id": 487,
  "nombre": "Julián Andrés Montoya Ceballos",
  "correo": "julian.montoya.ceballos@email.com",
  "telefono": "555-487-0487",
  "hospital_id": 5,
  "especialidad_id": 4,
  "seguro_medico_id": 3,
  "direccion_id": 1487
},
{
  "_id": 488,
  "nombre": "Sara Sofía Mejía Franco",
  "correo": "sara.mejia.franco@email.com",
  "telefono": "555-488-0488",
  "hospital_id": 5,
  "especialidad_id": 61,
  "seguro_medico_id": 1,
  "direccion_id": 1488
},
{
  "_id": 489,
  "nombre": "Felipe Antonio Betancur Marín",
  "correo": "felipe.betancur.marin@email.com",
  "telefono": "555-489-0489",
  "hospital_id": 5,
  "especialidad_id": 62,
  "seguro_medico_id": 4,
  "direccion_id": 1489
},
{
  "_id": 490,
  "nombre": "Gabriela Alejandra Londoño Soto",
  "correo": "gabriela.londono.soto@email.com",
  "telefono": "555-490-0490",
  "hospital_id": 5,
  "especialidad_id": 27,
  "seguro_medico_id": 5,
  "direccion_id": 1490
},
{
  "_id": 491,
  "nombre": "Santiago Nicolás Carmona Posada",
  "correo": "santiago.carmona.posada@email.com",
  "telefono": "555-491-0491",
  "hospital_id": 5,
  "especialidad_id": 76,
  "seguro_medico_id": 5,
  "direccion_id": 1491
},
{
  "_id": 492,
  "nombre": "Natalia Andrea Escobar Ramírez",
  "correo": "natalia.escobar.ramirez@email.com",
  "telefono": "555-492-0492",
  "hospital_id": 5,
  "especialidad_id": 80,
  "seguro_medico_id": 4,
  "direccion_id": 1492
},
{
  "_id": 493,
  "nombre": "Juan Esteban Palacio Restrepo",
  "correo": "juan.palacio.restrepo@email.com",
  "telefono": "555-493-0493",
  "hospital_id": 5,
  "especialidad_id": 60,
  "seguro_medico_id": 2,
  "direccion_id": 1493
},
{
  "_id": 494,
  "nombre": "Isabella Sofía Arango Osorio",
  "correo": "isabella.arango.osorio@email.com",
  "telefono": "555-494-0494",
  "hospital_id": 5,
  "especialidad_id": 2,
  "seguro_medico_id": 4,
  "direccion_id": 1494
},
{
  "_id": 495,
  "nombre": "Diego Alejandro Osorio Sánchez",
  "correo": "diego.osorio.sanchez@email.com",
  "telefono": "555-495-0495",
  "hospital_id": 5,
  "especialidad_id": 69,
  "seguro_medico_id": 4,
  "direccion_id": 1495
},
{
  "_id": 496,
  "nombre": "Manuela Camila Castro Vélez",
  "correo": "manuela.castro.velez@email.com",
  "telefono": "555-496-0496",
  "hospital_id": 5,
  "especialidad_id": 24,
  "seguro_medico_id": 1,
  "direccion_id": 1496
},
{
  "_id": 497,
  "nombre": "José Manuel Valencia Díaz",
  "correo": "jose.valencia.diaz@email.com",
  "telefono": "555-497-0497",
  "hospital_id": 5,
  "especialidad_id": 56,
  "seguro_medico_id": 1,
  "direccion_id": 1497
},
{
  "_id": 498,
  "nombre": "Valentina Andrea Yepes Marín",
  "correo": "valentina.yepes.marin@email.com",
  "telefono": "555-498-0498",
  "hospital_id": 5,
  "especialidad_id": 34,
  "seguro_medico_id": 4,
  "direccion_id": 1498
},
{
  "_id": 499,
  "nombre": "Ricardo Antonio Agudelo Franco",
  "correo": "ricardo.agudelo.franco@email.com",
  "telefono": "555-499-0499",
  "hospital_id": 5,
  "especialidad_id": 75,
  "seguro_medico_id": 2,
  "direccion_id": 1499
},
{
  "_id": 500,
  "nombre": "Paula Andrea Soto Mejía",
  "correo": "paula.soto.mejia@email.com",
  "telefono": "555-500-0500",
  "hospital_id": 5,
  "especialidad_id": 25,
  "seguro_medico_id": 3,
  "direccion_id": 1500
}])

// 14. Medicamento
db.Medicamento.insertMany([
  {
    _id: 1,
    nombre: "Amlodipino",
    descripcion: "Bloqueador de los canales de calcio utilizado para tratar la hipertensión y la angina de pecho.",
    dosis: "5 mg",
    presentacion: "Tableta",
    fabricante_id: 6, // Ejemplo de ID de fabricante
    tipo_medicamento_id: 1 // Ejemplo de ID de tipo de medicamento (Ej: Cardiovascular)
  },
  {
    _id: 2,
    nombre: "Levotiroxina",
    descripcion: "Hormona tiroidea sintética utilizada para tratar el hipotiroidismo.",
    dosis: "100 mcg",
    presentacion: "Tableta",
    fabricante_id: 7,
    tipo_medicamento_id: 4 // Ejemplo de ID de tipo de medicamento (Ej: Hormonal)
  },
  {
    _id: 3,
    nombre: "Valsartán",
    descripcion: "Antagonista del receptor de angiotensina II, utilizado para la hipertensión e insuficiencia cardíaca.",
    dosis: "80 mg",
    presentacion: "Tableta",
    fabricante_id: 6,
    tipo_medicamento_id: 1
  },
  {
    _id: 4,
    nombre: "Simvastatina",
    descripcion: "Estatina que reduce los niveles de colesterol y triglicéridos en la sangre.",
    dosis: "20 mg",
    presentacion: "Tableta",
    fabricante_id: 8,
    tipo_medicamento_id: 2 // Ejemplo de ID de tipo de medicamento (Ej: Hipolipemiante)
  },
  {
    _id: 5,
    nombre: "Escitalopram",
    descripcion: "Antidepresivo ISRS, utilizado para el trastorno depresivo mayor y trastornos de ansiedad.",
    dosis: "10 mg",
    presentacion: "Tableta",
    fabricante_id: 9,
    tipo_medicamento_id: 5 // Ejemplo de ID de tipo de medicamento (Ej: Psiquiátrico)
  },
  {
    _id: 6,
    nombre: "Gabapentina",
    descripcion: "Anticonvulsivante y analgésico, utilizado para la epilepsia y el dolor neuropático.",
    dosis: "300 mg",
    presentacion: "Cápsula",
    fabricante_id: 10,
    tipo_medicamento_id: 5
  },
  {
    _id: 7,
    nombre: "Tamsulosina",
    descripcion: "Alfa-bloqueante utilizado para tratar los síntomas de la hiperplasia prostática benigna (HPB).",
    dosis: "0.4 mg",
    presentacion: "Cápsula",
    fabricante_id: 11,
    tipo_medicamento_id: 1
  },
  {
    _id: 8,
    nombre: "Pregabalina",
    descripcion: "Anticonvulsivante y analgésico, utilizado para el dolor neuropático, fibromialgia y ansiedad.",
    dosis: "75 mg",
    presentacion: "Cápsula",
    fabricante_id: 10,
    tipo_medicamento_id: 5
  },
  {
    _id: 9,
    nombre: "Citalopram",
    descripcion: "Antidepresivo ISRS, utilizado para el trastorno depresivo y de pánico.",
    dosis: "20 mg",
    presentacion: "Tableta",
    fabricante_id: 9,
    tipo_medicamento_id: 5
  },
  {
    _id: 10,
    nombre: "Hidroclorotiazida",
    descripcion: "Diurético tiazídico, utilizado para tratar la hipertensión y el edema.",
    dosis: "25 mg",
    presentacion: "Tableta",
    fabricante_id: 6,
    tipo_medicamento_id: 1
  },
  {
    _id: 11,
    nombre: "Ranitidina",
    descripcion: "Antagonista de los receptores H2, reduce la producción de ácido estomacal (ahora menos común).",
    dosis: "150 mg",
    presentacion: "Tableta",
    fabricante_id: 7,
    tipo_medicamento_id: 3 // Ejemplo de ID de tipo de medicamento (Ej: Gastrointestinal)
  },
  {
    _id: 12,
    nombre: "Colecalciferol",
    descripcion: "Vitamina D3, suplemento para deficiencia de vitamina D y salud ósea.",
    dosis: "2000 UI",
    presentacion: "Cápsula",
    fabricante_id: 12,
    tipo_medicamento_id: 6 // Ejemplo de ID de tipo de medicamento (Ej: Vitamina/Suplemento)
  },
  {
    _id: 13,
    nombre: "Montelukast",
    descripcion: "Antagonista del receptor de leucotrienos, utilizado para el asma y la rinitis alérgica.",
    dosis: "10 mg",
    presentacion: "Tableta",
    fabricante_id: 13,
    tipo_medicamento_id: 4 // Ejemplo de ID de tipo de medicamento (Ej: Respiratorio)
  },
  {
    _id: 14,
    nombre: "Clopidogrel",
    descripcion: "Antiagregante plaquetario, previene la formación de coágulos en enfermedades cardiovasculares.",
    dosis: "75 mg",
    presentacion: "Tableta",
    fabricante_id: 14,
    tipo_medicamento_id: 1
  },
  {
    _id: 15,
    nombre: "Metoprolol",
    descripcion: "Beta-bloqueante utilizado para la hipertensión, angina de pecho y arritmias.",
    dosis: "50 mg",
    presentacion: "Tableta",
    fabricante_id: 6,
    tipo_medicamento_id: 1
  },
  {
    _id: 16,
    nombre: "Naproxeno",
    descripcion: "Antiinflamatorio no esteroideo (AINE) con propiedades analgésicas y antiinflamatorias.",
    dosis: "500 mg",
    presentacion: "Tableta",
    fabricante_id: 7,
    tipo_medicamento_id: 3
  },
  {
    _id: 17,
    nombre: "Pantoprazol",
    descripcion: "Inhibidor de la bomba de protones, reduce la producción de ácido estomacal.",
    dosis: "40 mg",
    presentacion: "Tableta",
    fabricante_id: 8,
    tipo_medicamento_id: 3
  },
  {
    _id: 18,
    nombre: "Rosuvastatina",
    descripcion: "Estatina potente que reduce los niveles de colesterol LDL.",
    dosis: "10 mg",
    presentacion: "Tableta",
    fabricante_id: 15,
    tipo_medicamento_id: 2
  },
  {
    _id: 19,
    nombre: "Duloxetina",
    descripcion: "Inhibidor de la recaptación de serotonina y norepinefrina (IRSN), para depresión, ansiedad y dolor neuropático.",
    dosis: "30 mg",
    presentacion: "Cápsula",
    fabricante_id: 9,
    tipo_medicamento_id: 5
  },
  {
    _id: 20,
    nombre: "Meloxicam",
    descripcion: "Antiinflamatorio no esteroideo (AINE), utilizado para la osteoartritis y artritis reumatoide.",
    dosis: "15 mg",
    presentacion: "Tableta",
    fabricante_id: 7,
    tipo_medicamento_id: 3
  },
  {
    _id: 21,
    nombre: "Fexofenadina",
    descripcion: "Antihistamínico no sedante para el alivio de los síntomas de la rinitis alérgica.",
    dosis: "180 mg",
    presentacion: "Tableta",
    fabricante_id: 13,
    tipo_medicamento_id: 4
  },
  {
    _id: 22,
    nombre: "Alprazolam",
    descripcion: "Benzodiacepina de acción corta, utilizada para el trastorno de ansiedad y de pánico.",
    dosis: "0.5 mg",
    presentacion: "Tableta",
    fabricante_id: 10,
    tipo_medicamento_id: 5
  },
  {
    _id: 23,
    nombre: "Venlafaxina",
    descripcion: "Inhibidor de la recaptación de serotonina y norepinefrina (IRSN), para depresión, ansiedad y trastorno de pánico.",
    dosis: "75 mg",
    presentacion: "Cápsula",
    fabricante_id: 9,
    tipo_medicamento_id: 5
  },
  {
    _id: 24,
    nombre: "Celecoxib",
    descripcion: "Antiinflamatorio no esteroideo (AINE) inhibidor selectivo de la COX-2, para artritis y dolor.",
    dosis: "200 mg",
    presentacion: "Cápsula",
    fabricante_id: 14,
    tipo_medicamento_id: 3
  },
  {
    _id: 25,
    nombre: "Dexametasona",
    descripcion: "Corticoesteroide potente con propiedades antiinflamatorias e inmunosupresoras.",
    dosis: "4 mg",
    presentacion: "Tableta",
    fabricante_id: 16,
    tipo_medicamento_id: 4
  },
  {
    _id: 26,
    nombre: "Cefalexina",
    descripcion: "Antibiótico cefalosporina de primera generación, para infecciones bacterianas.",
    dosis: "500 mg",
    presentacion: "Cápsula",
    fabricante_id: 7,
    tipo_medicamento_id: 1
  },
  {
    _id: 27,
    nombre: "Fluoxetina",
    descripcion: "Antidepresivo ISRS, utilizado para depresión, trastorno obsesivo-compulsivo y bulimia nerviosa.",
    dosis: "20 mg",
    presentacion: "Cápsula",
    fabricante_id: 9,
    tipo_medicamento_id: 5
  },
  {
    _id: 28,
    nombre: "Doxazosin",
    descripcion: "Alfa-bloqueante utilizado para tratar la hipertensión y los síntomas de la HPB.",
    dosis: "4 mg",
    presentacion: "Tableta",
    fabricante_id: 6,
    tipo_medicamento_id: 1
  },
  {
    _id: 29,
    nombre: "Spironolactona",
    descripcion: "Diurético ahorrador de potasio, utilizado para la insuficiencia cardíaca, hipertensión y edema.",
    dosis: "25 mg",
    presentacion: "Tableta",
    fabricante_id: 16,
    tipo_medicamento_id: 1
  },
  {
    _id: 30,
    nombre: "Moxifloxacino",
    descripcion: "Antibiótico fluoroquinolona de cuarta generación, para infecciones respiratorias y cutáneas.",
    dosis: "400 mg",
    presentacion: "Tableta",
    fabricante_id: 7,
    tipo_medicamento_id: 1
  }
]);

// 15. Tratamiento

db.Tratamiento.insertMany([
  {
    _id: 1,
    nombre: "Colecistectomía Laparoscópica",
    descripcion: "Extirpación quirúrgica de la vesícula biliar mediante técnica laparoscópica.",
    tipo_tratamiento_id: 1 // Cirugía
  },
  {
    _id: 2,
    nombre: "Rehabilitación de Rodilla (Ligamento Cruzado Anterior)",
    descripcion: "Programa de fisioterapia intensivo post-quirúrgico para la recuperación funcional de la rodilla.",
    tipo_tratamiento_id: 2 // Terapia Física
  },
  {
    _id: 3,
    nombre: "Manejo Farmacológico de Diabetes Tipo 2",
    descripcion: "Prescripción y ajuste de medicamentos orales o insulina para el control glucémico.",
    tipo_tratamiento_id: 3 // Tratamiento Farmacológico
  },
  {
    _id: 4,
    nombre: "Quimioterapia de Inducción para Leucemia",
    descripcion: "Primera fase de quimioterapia intensiva para inducir la remisión en pacientes con leucemia.",
    tipo_tratamiento_id: 4 // Quimioterapia
  },
  {
    _id: 5,
    nombre: "Radioterapia Adyuvante para Cáncer de Mama",
    descripcion: "Tratamiento con radiación después de la cirugía para destruir células cancerosas restantes.",
    tipo_tratamiento_id: 5 // Radioterapia
  },
  {
    _id: 6,
    nombre: "Terapia Ocupacional para Accidente Cerebrovascular",
    descripcion: "Ayuda a pacientes a recuperar habilidades para las actividades diarias y mejorar la independencia.",
    tipo_tratamiento_id: 6 // Terapia Ocupacional
  },
  {
    _id: 7,
    nombre: "Programa de Ejercicio Supervisado para Insuficiencia Cardíaca",
    descripcion: "Plan de actividad física adaptado para mejorar la capacidad cardíaca en pacientes con insuficiencia.",
    tipo_tratamiento_id: 7 // Rehabilitación Cardíaca
  },
  {
    _id: 8,
    nombre: "Diálisis Hemodiálisis Urgente",
    descripcion: "Sesión de hemodiálisis de emergencia para pacientes con falla renal aguda o intoxicación grave.",
    tipo_tratamiento_id: 8 // Diálisis (podría ser también Hemodiálisis)
  },
  {
    _id: 9,
    nombre: "Transfusión de Plaquetas",
    descripcion: "Administración de plaquetas para pacientes con recuentos bajos o disfunción plaquetaria.",
    tipo_tratamiento_id: 9 // Transfusión Sanguínea
  },
  {
    _id: 10,
    nombre: "Vacunación Anti-Tétanos y Difteria (Td)",
    descripcion: "Inmunización de refuerzo contra el tétanos y la difteria.",
    tipo_tratamiento_id: 10 // Vacunación
  },
  {
    _id: 11,
    nombre: "Drenaje Postural y Percusión Torácica",
    descripcion: "Técnicas de fisioterapia para movilizar secreciones pulmonares en enfermedades respiratorias.",
    tipo_tratamiento_id: 11 // Fisioterapia Respiratoria
  },
  {
    _id: 12,
    nombre: "Terapia de Reeducación del Habla",
    descripcion: "Ejercicios y técnicas para mejorar la articulación y fluidez en trastornos del habla.",
    tipo_tratamiento_id: 13 // Terapia del Lenguaje
  },
  {
    _id: 13,
    nombre: "Sesión de Hemodiálisis Ambulatoria",
    descripcion: "Tratamiento de hemodiálisis regular realizado en un centro ambulatorio.",
    tipo_tratamiento_id: 14 // Hemodiálisis
  },
  {
    _id: 14,
    nombre: "Infusión de Inmunoglobulinas Intravenosas (IGIV)",
    descripcion: "Administración de anticuerpos para tratar inmunodeficiencias o enfermedades autoinmunes.",
    tipo_tratamiento_id: 15 // Terapia de Infusión
  },
  {
    _id: 15,
    nombre: "Reparación de Hernia Inguinal",
    descripcion: "Cirugía para corregir una hernia en la región inguinal, a menudo con malla.",
    tipo_tratamiento_id: 1 // Cirugía
  },
  {
    _id: 16,
    nombre: "Manejo Farmacológico de Asma Crónica",
    descripcion: "Uso de broncodilatadores y corticoides inhalados para el control a largo plazo del asma.",
    tipo_tratamiento_id: 3 // Tratamiento Farmacológico
  },
  {
    _id: 17,
    nombre: "Cuidado Avanzado de Úlceras por Presión",
    descripcion: "Protocolos y productos específicos para la limpieza y curación de úlceras por decúbito.",
    tipo_tratamiento_id: 16 // Curación de Heridas
  },
  {
    _id: 18,
    nombre: "Nutrición Enteral por Sonda Nasogástrica",
    descripcion: "Suministro de nutrientes líquidos a través de una sonda insertada por la nariz hasta el estómago.",
    tipo_tratamiento_id: 19 // Nutrición Clínica
  },
  {
    _id: 19,
    nombre: "Terapia Cognitivo-Conductual (TCC) para Ansiedad",
    descripcion: "Sesiones de psicoterapia para identificar y cambiar patrones de pensamiento y comportamiento asociados a la ansiedad.",
    tipo_tratamiento_id: 17 // Terapia Psicológica
  },
  {
    _id: 20,
    nombre: "Resonancia Magnética Nuclear (RMN) Cerebral",
    descripcion: "Prueba de imagen avanzada para obtener vistas detalladas del cerebro.",
    tipo_tratamiento_id: 18 // Pruebas Diagnósticas
  },
  {
    _id: 21,
    nombre: "Manejo de la Hipertensión Arterial Pulmonar",
    descripcion: "Tratamiento especializado para reducir la presión en las arterias de los pulmones, a menudo con terapias vasodilatadoras.",
    tipo_tratamiento_id: 3 // Tratamiento Farmacológico
  },
  {
    _id: 22,
    nombre: "Reemplazo Articular de Cadera (Artroplastia)",
    descripcion: "Cirugía para reemplazar una articulación de cadera dañada con una prótesis artificial.",
    tipo_tratamiento_id: 1 // Cirugía
  },
  {
    _id: 23,
    nombre: "Terapia de Luz Ultravioleta (Fototerapia)",
    descripcion: "Uso de luz UV controlada para tratar afecciones cutáneas como psoriasis o vitíligo.",
    tipo_tratamiento_id: 20 // Fototerapia (asumiendo este tipo de tratamiento en Tipo_Tratamiento)
  },
  {
    _id: 24,
    nombre: "Drenaje Torácico por Neumotórax",
    descripcion: "Inserción de un tubo en el espacio pleural para drenar aire y permitir que el pulmón se reexpanda.",
    tipo_tratamiento_id: 1 // Cirugía (o procedimiento invasivo)
  },
  {
    _id: 25,
    nombre: "Programa de Manejo de Adicciones",
    descripcion: "Enfoque integral que incluye terapia individual y grupal, y posiblemente farmacoterapia, para la dependencia de sustancias.",
    tipo_tratamiento_id: 17 // Terapia Psicológica
  }
]);

// 16. Visita_Medica

db.Visita_Medica.insertMany([
  {
    "_id": 1,
    "fecha": ISODate("2024-03-01T09:00:00Z"),
    "hora": "09:00",
    "medico_id": "0020001",
    "paciente_id": 1
  },
  {
    "_id": 2,
    "fecha": ISODate("2024-03-01T10:15:00Z"),
    "hora": "10:15",
    "medico_id": "0020002",
    "paciente_id": 2
  },
  {
    "_id": 3,
    "fecha": ISODate("2024-03-01T11:30:00Z"),
    "hora": "11:30",
    "medico_id": "0020003",
    "paciente_id": 3
  },
  {
    "_id": 4,
    "fecha": ISODate("2024-03-01T14:00:00Z"),
    "hora": "14:00",
    "medico_id": "0020004",
    "paciente_id": 4
  },
  {
    "_id": 5,
    "fecha": ISODate("2024-03-01T15:30:00Z"),
    "hora": "15:30",
    "medico_id": "0020005",
    "paciente_id": 5
  },
  {
    "_id": 6,
    "fecha": ISODate("2024-03-02T09:45:00Z"),
    "hora": "09:45",
    "medico_id": "0020006",
    "paciente_id": 6
  },
  {
    "_id": 7,
    "fecha": ISODate("2024-03-02T10:00:00Z"),
    "hora": "10:00",
    "medico_id": "0020007",
    "paciente_id": 7
  },
  {
    "_id": 8,
    "fecha": ISODate("2024-03-02T11:00:00Z"),
    "hora": "11:00",
    "medico_id": "0020008",
    "paciente_id": 8
  },
  {
    "_id": 9,
    "fecha": ISODate("2024-03-02T14:20:00Z"),
    "hora": "14:20",
    "medico_id": "0020009",
    "paciente_id": 9
  },
  {
    "_id": 10,
    "fecha": ISODate("2024-03-02T16:00:00Z"),
    "hora": "16:00",
    "medico_id": "0020010",
    "paciente_id": 10
  },
  {
    "_id": 11,
    "fecha": ISODate("2024-03-03T09:30:00Z"),
    "hora": "09:30",
    "medico_id": "0020011",
    "paciente_id": 11
  },
  {
    "_id": 12,
    "fecha": ISODate("2024-03-03T10:45:00Z"),
    "hora": "10:45",
    "medico_id": "0020012",
    "paciente_id": 12
  },
  {
    "_id": 13,
    "fecha": ISODate("2024-03-03T12:00:00Z"),
    "hora": "12:00",
    "medico_id": "0020013",
    "paciente_id": 13
  },
  {
    "_id": 14,
    "fecha": ISODate("2024-03-03T14:10:00Z"),
    "hora": "14:10",
    "medico_id": "0020014",
    "paciente_id": 14
  },
  {
    "_id": 15,
    "fecha": ISODate("2024-03-03T15:50:00Z"),
    "hora": "15:50",
    "medico_id": "0020015",
    "paciente_id": 15
  },
  {
    "_id": 16,
    "fecha": ISODate("2024-03-04T08:30:00Z"),
    "hora": "08:30",
    "medico_id": "0020016",
    "paciente_id": 16
  },
  {
    "_id": 17,
    "fecha": ISODate("2024-03-04T10:00:00Z"),
    "hora": "10:00",
    "medico_id": "0020017",
    "paciente_id": 17
  },
  {
    "_id": 18,
    "fecha": ISODate("2024-03-04T11:40:00Z"),
    "hora": "11:40",
    "medico_id": "0020018",
    "paciente_id": 18
  },
  {
    "_id": 19,
    "fecha": ISODate("2024-03-04T14:30:00Z"),
    "hora": "14:30",
    "medico_id": "0020019",
    "paciente_id": 19
  },
  {
    "_id": 20,
    "fecha": ISODate("2024-03-04T16:15:00Z"),
    "hora": "16:15",
    "medico_id": "0020020",
    "paciente_id": 20
  },
  {
    "_id": 21,
    "fecha": ISODate("2024-03-05T09:00:00Z"),
    "hora": "09:00",
    "medico_id": "0020021",
    "paciente_id": 21
  },
  {
    "_id": 22,
    "fecha": ISODate("2024-03-05T10:20:00Z"),
    "hora": "10:20",
    "medico_id": "0020022",
    "paciente_id": 22
  },
  {
    "_id": 23,
    "fecha": ISODate("2024-03-05T11:50:00Z"),
    "hora": "11:50",
    "medico_id": "0020023",
    "paciente_id": 23
  },
  {
    "_id": 24,
    "fecha": ISODate("2024-03-05T14:00:00Z"),
    "hora": "14:00",
    "medico_id": "0020024",
    "paciente_id": 24
  },
  {
    "_id": 25,
    "fecha": ISODate("2024-03-05T15:40:00Z"),
    "hora": "15:40",
    "medico_id": "0020025",
    "paciente_id": 25
  },
  {
    "_id": 26,
    "fecha": ISODate("2024-03-06T09:15:00Z"),
    "hora": "09:15",
    "medico_id": "0020001",
    "paciente_id": 26
  },
  {
    "_id": 27,
    "fecha": ISODate("2024-03-06T10:30:00Z"),
    "hora": "10:30",
    "medico_id": "0020002",
    "paciente_id": 27
  },
  {
    "_id": 28,
    "fecha": ISODate("2024-03-06T11:45:00Z"),
    "hora": "11:45",
    "medico_id": "0020003",
    "paciente_id": 28
  },
  {
    "_id": 29,
    "fecha": ISODate("2024-03-06T14:00:00Z"),
    "hora": "14:00",
    "medico_id": "0020004",
    "paciente_id": 29
  },
  {
    "_id": 30,
    "fecha": ISODate("2024-03-06T15:30:00Z"),
    "hora": "15:30",
    "medico_id": "0020005",
    "paciente_id": 30
  },
  {
    "_id": 31,
    "fecha": ISODate("2024-03-07T09:00:00Z"),
    "hora": "09:00",
    "medico_id": "0020006",
    "paciente_id": 31
  },
  {
    "_id": 32,
    "fecha": ISODate("2024-03-07T10:15:00Z"),
    "hora": "10:15",
    "medico_id": "0020007",
    "paciente_id": 32
  },
  {
    "_id": 33,
    "fecha": ISODate("2024-03-07T11:30:00Z"),
    "hora": "11:30",
    "medico_id": "0020008",
    "paciente_id": 33
  },
  {
    "_id": 34,
    "fecha": ISODate("2024-03-07T14:00:00Z"),
    "hora": "14:00",
    "medico_id": "0020009",
    "paciente_id": 34
  },
  {
    "_id": 35,
    "fecha": ISODate("2024-03-07T15:30:00Z"),
    "hora": "15:30",
    "medico_id": "0020010",
    "paciente_id": 35
  },
  {
    "_id": 36,
    "fecha": ISODate("2024-03-08T09:45:00Z"),
    "hora": "09:45",
    "medico_id": "0020011",
    "paciente_id": 36
  },
  {
    "_id": 37,
    "fecha": ISODate("2024-03-08T10:00:00Z"),
    "hora": "10:00",
    "medico_id": "0020012",
    "paciente_id": 37
  },
  {
    "_id": 38,
    "fecha": ISODate("2024-03-08T11:00:00Z"),
    "hora": "11:00",
    "medico_id": "0020013",
    "paciente_id": 38
  },
  {
    "_id": 39,
    "fecha": ISODate("2024-03-08T14:20:00Z"),
    "hora": "14:20",
    "medico_id": "0020014",
    "paciente_id": 39
  },
  {
    "_id": 40,
    "fecha": ISODate("2024-03-08T16:00:00Z"),
    "hora": "16:00",
    "medico_id": "0020015",
    "paciente_id": 40
  },
  {
    "_id": 41,
    "fecha": ISODate("2024-03-09T09:30:00Z"),
    "hora": "09:30",
    "medico_id": "0020016",
    "paciente_id": 41
  },
  {
    "_id": 42,
    "fecha": ISODate("2024-03-09T10:45:00Z"),
    "hora": "10:45",
    "medico_id": "0020017",
    "paciente_id": 42
  },
  {
    "_id": 43,
    "fecha": ISODate("2024-03-09T12:00:00Z"),
    "hora": "12:00",
    "medico_id": "0020018",
    "paciente_id": 43
  },
  {
    "_id": 44,
    "fecha": ISODate("2024-03-09T14:10:00Z"),
    "hora": "14:10",
    "medico_id": "0020019",
    "paciente_id": 44
  },
  {
    "_id": 45,
    "fecha": ISODate("2024-03-09T15:50:00Z"),
    "hora": "15:50",
    "medico_id": "0020020",
    "paciente_id": 45
  },
  {
    "_id": 46,
    "fecha": ISODate("2024-03-10T08:30:00Z"),
    "hora": "08:30",
    "medico_id": "0020021",
    "paciente_id": 46
  },
  {
    "_id": 47,
    "fecha": ISODate("2024-03-10T10:00:00Z"),
    "hora": "10:00",
    "medico_id": "0020022",
    "paciente_id": 47
  },
  {
    "_id": 48,
    "fecha": ISODate("2024-03-10T11:40:00Z"),
    "hora": "11:40",
    "medico_id": "0020023",
    "paciente_id": 48
  },
  {
    "_id": 49,
    "fecha": ISODate("2024-03-10T14:30:00Z"),
    "hora": "14:30",
    "medico_id": "0020024",
    "paciente_id": 49
  },
  {
    "_id": 50,
    "fecha": ISODate("2024-03-10T16:15:00Z"),
    "hora": "16:15",
    "medico_id": "0020025",
    "paciente_id": 50
  },
  {
    "_id": 51,
    "fecha": ISODate("2024-03-11T09:00:00Z"),
    "hora": "09:00",
    "medico_id": "0020001",
    "paciente_id": 51
  },
  {
    "_id": 52,
    "fecha": ISODate("2024-03-11T10:15:00Z"),
    "hora": "10:15",
    "medico_id": "0020002",
    "paciente_id": 52
  },
  {
    "_id": 53,
    "fecha": ISODate("2024-03-11T11:30:00Z"),
    "hora": "11:30",
    "medico_id": "0020003",
    "paciente_id": 53
  },
  {
    "_id": 54,
    "fecha": ISODate("2024-03-11T14:00:00Z"),
    "hora": "14:00",
    "medico_id": "0020004",
    "paciente_id": 54
  },
  {
    "_id": 55,
    "fecha": ISODate("2024-03-11T15:30:00Z"),
    "hora": "15:30",
    "medico_id": "0020005",
    "paciente_id": 55
  },
  {
    "_id": 56,
    "fecha": ISODate("2024-03-12T09:45:00Z"),
    "hora": "09:45",
    "medico_id": "0020006",
    "paciente_id": 56
  },
  {
    "_id": 57,
    "fecha": ISODate("2024-03-12T10:00:00Z"),
    "hora": "10:00",
    "medico_id": "0020007",
    "paciente_id": 57
  },
  {
    "_id": 58,
    "fecha": ISODate("2024-03-12T11:00:00Z"),
    "hora": "11:00",
    "medico_id": "0020008",
    "paciente_id": 58
  },
  {
    "_id": 59,
    "fecha": ISODate("2024-03-12T14:20:00Z"),
    "hora": "14:20",
    "medico_id": "0020009",
    "paciente_id": 59
  },
  {
    "_id": 60,
    "fecha": ISODate("2024-03-12T16:00:00Z"),
    "hora": "16:00",
    "medico_id": "0020010",
    "paciente_id": 60
  },
  {
    "_id": 61,
    "fecha": ISODate("2024-03-13T09:30:00Z"),
    "hora": "09:30",
    "medico_id": "0020011",
    "paciente_id": 61
  },
  {
    "_id": 62,
    "fecha": ISODate("2024-03-13T10:45:00Z"),
    "hora": "10:45",
    "medico_id": "0020012",
    "paciente_id": 62
  },
  {
    "_id": 63,
    "fecha": ISODate("2024-03-13T12:00:00Z"),
    "hora": "12:00",
    "medico_id": "0020013",
    "paciente_id": 63
  },
  {
    "_id": 64,
    "fecha": ISODate("2024-03-13T14:10:00Z"),
    "hora": "14:10",
    "medico_id": "0020014",
    "paciente_id": 64
  },
  {
    "_id": 65,
    "fecha": ISODate("2024-03-13T15:50:00Z"),
    "hora": "15:50",
    "medico_id": "0020015",
    "paciente_id": 65
  },
  {
    "_id": 66,
    "fecha": ISODate("2024-03-14T08:30:00Z"),
    "hora": "08:30",
    "medico_id": "0020016",
    "paciente_id": 66
  },
  {
    "_id": 67,
    "fecha": ISODate("2024-03-14T10:00:00Z"),
    "hora": "10:00",
    "medico_id": "0020017",
    "paciente_id": 67
  },
  {
    "_id": 68,
    "fecha": ISODate("2024-03-14T11:40:00Z"),
    "hora": "11:40",
    "medico_id": "0020018",
    "paciente_id": 68
  },
  {
    "_id": 69,
    "fecha": ISODate("2024-03-14T14:30:00Z"),
    "hora": "14:30",
    "medico_id": "0020019",
    "paciente_id": 69
  },
  {
    "_id": 70,
    "fecha": ISODate("2024-03-14T16:15:00Z"),
    "hora": "16:15",
    "medico_id": "0020020",
    "paciente_id": 70
  },
  {
    "_id": 71,
    "fecha": ISODate("2024-03-15T09:00:00Z"),
    "hora": "09:00",
    "medico_id": "0020021",
    "paciente_id": 71
  },
  {
    "_id": 72,
    "fecha": ISODate("2024-03-15T10:20:00Z"),
    "hora": "10:20",
    "medico_id": "0020022",
    "paciente_id": 72
  },
  {
    "_id": 73,
    "fecha": ISODate("2024-03-15T11:50:00Z"),
    "hora": "11:50",
    "medico_id": "0020023",
    "paciente_id": 73
  },
  {
    "_id": 74,
    "fecha": ISODate("2024-03-15T14:00:00Z"),
    "hora": "14:00",
    "medico_id": "0020024",
    "paciente_id": 74
  },
  {
    "_id": 75,
    "fecha": ISODate("2024-03-15T15:40:00Z"),
    "hora": "15:40",
    "medico_id": "0020025",
    "paciente_id": 75
  },
  {
    "_id": 76,
    "fecha": ISODate("2024-03-16T09:15:00Z"),
    "hora": "09:15",
    "medico_id": "0020001",
    "paciente_id": 76
  },
  {
    "_id": 77,
    "fecha": ISODate("2024-03-16T10:30:00Z"),
    "hora": "10:30",
    "medico_id": "0020002",
    "paciente_id": 77
  },
  {
    "_id": 78,
    "fecha": ISODate("2024-03-16T11:45:00Z"),
    "hora": "11:45",
    "medico_id": "0020003",
    "paciente_id": 78
  },
  {
    "_id": 79,
    "fecha": ISODate("2024-03-16T14:00:00Z"),
    "hora": "14:00",
    "medico_id": "0020004",
    "paciente_id": 79
  },
  {
    "_id": 80,
    "fecha": ISODate("2024-03-16T15:30:00Z"),
    "hora": "15:30",
    "medico_id": "0020005",
    "paciente_id": 80
  },
  {
    "_id": 81,
    "fecha": ISODate("2024-03-17T09:00:00Z"),
    "hora": "09:00",
    "medico_id": "0020006",
    "paciente_id": 81
  },
  {
    "_id": 82,
    "fecha": ISODate("2024-03-17T10:15:00Z"),
    "hora": "10:15",
    "medico_id": "0020007",
    "paciente_id": 82
  },
  {
    "_id": 83,
    "fecha": ISODate("2024-03-17T11:30:00Z"),
    "hora": "11:30",
    "medico_id": "0020008",
    "paciente_id": 83
  },
  {
    "_id": 84,
    "fecha": ISODate("2024-03-17T14:00:00Z"),
    "hora": "14:00",
    "medico_id": "0020009",
    "paciente_id": 84
  },
  {
    "_id": 85,
    "fecha": ISODate("2024-03-17T15:30:00Z"),
    "hora": "15:30",
    "medico_id": "0020010",
    "paciente_id": 85
  },
  {
    "_id": 86,
    "fecha": ISODate("2024-03-18T09:45:00Z"),
    "hora": "09:45",
    "medico_id": "0020011",
    "paciente_id": 86
  },
  {
    "_id": 87,
    "fecha": ISODate("2024-03-18T10:00:00Z"),
    "hora": "10:00",
    "medico_id": "0020012",
    "paciente_id": 87
  },
  {
    "_id": 88,
    "fecha": ISODate("2024-03-18T11:00:00Z"),
    "hora": "11:00",
    "medico_id": "0020013",
    "paciente_id": 88
  },
  {
    "_id": 89,
    "fecha": ISODate("2024-03-18T14:20:00Z"),
    "hora": "14:20",
    "medico_id": "0020014",
    "paciente_id": 89
  },
  {
    "_id": 90,
    "fecha": ISODate("2024-03-18T16:00:00Z"),
    "hora": "16:00",
    "medico_id": "0020015",
    "paciente_id": 90
  },
  {
    "_id": 91,
    "fecha": ISODate("2024-03-19T09:30:00Z"),
    "hora": "09:30",
    "medico_id": "0020016",
    "paciente_id": 91
  },
  {
    "_id": 92,
    "fecha": ISODate("2024-03-19T10:45:00Z"),
    "hora": "10:45",
    "medico_id": "0020017",
    "paciente_id": 92
  },
  {
    "_id": 93,
    "fecha": ISODate("2024-03-19T12:00:00Z"),
    "hora": "12:00",
    "medico_id": "0020018",
    "paciente_id": 93
  },
  {
    "_id": 94,
    "fecha": ISODate("2024-03-19T14:10:00Z"),
    "hora": "14:10",
    "medico_id": "0020019",
    "paciente_id": 94
  },
  {
    "_id": 95,
    "fecha": ISODate("2024-03-19T15:50:00Z"),
    "hora": "15:50",
    "medico_id": "0020020",
    "paciente_id": 95
  },
  {
    "_id": 96,
    "fecha": ISODate("2024-03-20T08:30:00Z"),
    "hora": "08:30",
    "medico_id": "0020021",
    "paciente_id": 96
  },
  {
    "_id": 97,
    "fecha": ISODate("2024-03-20T10:00:00Z"),
    "hora": "10:00",
    "medico_id": "0020022",
    "paciente_id": 97
  },
  {
    "_id": 98,
    "fecha": ISODate("2024-03-20T11:40:00Z"),
    "hora": "11:40",
    "medico_id": "0020023",
    "paciente_id": 98
  },
  {
    "_id": 99,
    "fecha": ISODate("2024-03-20T14:30:00Z"),
    "hora": "14:30",
    "medico_id": "0020024",
    "paciente_id": 99
  },
  {
    "_id": 100,
    "fecha": ISODate("2024-03-20T16:15:00Z"),
    "hora": "16:15",
    "medico_id": "0020025",
    "paciente_id": 100
  }
])

// 17. Historial_Medico

db.Historial_Medico.insertMany([
  {
    "_id": 1,
    "diagnostico_id": 26,
    "paciente_id": 257,
    "fecha_registro": ISODate("2024-05-15T10:30:00Z")
  },
  {
    "_id": 2,
    "diagnostico_id": 13,
    "paciente_id": 18,
    "fecha_registro": ISODate("2023-11-20T14:00:00Z")
  },
  {
    "_id": 3,
    "diagnostico_id": 5,
    "paciente_id": 381,
    "fecha_registro": ISODate("2025-01-01T08:00:00Z")
  },
  {
    "_id": 4,
    "diagnostico_id": 1,
    "paciente_id": 479,
    "fecha_registro": ISODate("2024-07-22T11:45:00Z")
  },
  {
    "_id": 5,
    "diagnostico_id": 18,
    "paciente_id": 196,
    "fecha_registro": ISODate("2023-09-01T09:15:00Z")
  },
  {
    "_id": 6,
    "diagnostico_id": 29,
    "paciente_id": 150,
    "fecha_registro": ISODate("2024-03-10T16:20:00Z")
  },
  {
    "_id": 7,
    "diagnostico_id": 2,
    "paciente_id": 308,
    "fecha_registro": ISODate("2024-12-05T13:00:00Z")
  },
  {
    "_id": 8,
    "diagnostico_id": 20,
    "paciente_id": 458,
    "fecha_registro": ISODate("2023-07-30T10:00:00Z")
  },
  {
    "_id": 9,
    "diagnostico_id": 10,
    "paciente_id": 204,
    "fecha_registro": ISODate("2024-08-18T09:00:00Z")
  },
  {
    "_id": 10,
    "diagnostico_id": 17,
    "paciente_id": 361,
    "fecha_registro": ISODate("2023-10-25T15:30:00Z")
  },
  {
    "_id": 11,
    "diagnostico_id": 23,
    "paciente_id": 41,
    "fecha_registro": ISODate("2024-06-01T11:00:00Z")
  },
  {
    "_id": 12,
    "diagnostico_id": 7,
    "paciente_id": 286,
    "fecha_registro": ISODate("2025-02-14T08:45:00Z")
  },
  {
    "_id": 13,
    "diagnostico_id": 15,
    "paciente_id": 103,
    "fecha_registro": ISODate("2024-09-20T17:00:00Z")
  },
  {
    "_id": 14,
    "diagnostico_id": 3,
    "paciente_id": 472,
    "fecha_registro": ISODate("2023-12-12T10:30:00Z")
  },
  {
    "_id": 15,
    "diagnostico_id": 28,
    "paciente_id": 219,
    "fecha_registro": ISODate("2024-04-25T14:10:00Z")
  },
  {
    "_id": 16,
    "diagnostico_id": 11,
    "paciente_id": 126,
    "fecha_registro": ISODate("2024-11-08T09:30:00Z")
  },
  {
    "_id": 17,
    "diagnostico_id": 19,
    "paciente_id": 339,
    "fecha_registro": ISODate("2023-08-05T16:00:00Z")
  },
  {
    "_id": 18,
    "diagnostico_id": 6,
    "paciente_id": 175,
    "fecha_registro": ISODate("2024-01-19T13:40:00Z")
  },
  {
    "_id": 19,
    "diagnostico_id": 24,
    "paciente_id": 401,
    "fecha_registro": ISODate("2024-07-07T10:00:00Z")
  },
  {
    "_id": 20,
    "diagnostico_id": 9,
    "paciente_id": 105,
    "fecha_registro": ISODate("2023-09-15T11:30:00Z")
  },
  {
    "_id": 21,
    "diagnostico_id": 30,
    "paciente_id": 328,
    "fecha_registro": ISODate("2024-03-29T15:00:00Z")
  },
  {
    "_id": 22,
    "diagnostico_id": 4,
    "paciente_id": 169,
    "fecha_registro": ISODate("2024-10-02T12:00:00Z")
  },
  {
    "_id": 23,
    "diagnostico_id": 16,
    "paciente_id": 298,
    "fecha_registro": ISODate("2023-11-01T08:15:00Z")
  },
  {
    "_id": 24,
    "diagnostico_id": 22,
    "paciente_id": 11,
    "fecha_registro": ISODate("2024-05-10T17:00:00Z")
  },
  {
    "_id": 25,
    "diagnostico_id": 8,
    "paciente_id": 427,
    "fecha_registro": ISODate("2025-01-28T09:00:00Z")
  },
  {
    "_id": 26,
    "diagnostico_id": 25,
    "paciente_id": 68,
    "fecha_registro": ISODate("2024-08-03T14:30:00Z")
  },
  {
    "_id": 27,
    "diagnostico_id": 12,
    "paciente_id": 353,
    "fecha_registro": ISODate("2023-10-10T10:45:00Z")
  },
  {
    "_id": 28,
    "diagnostico_id": 27,
    "paciente_id": 199,
    "fecha_registro": ISODate("2024-06-19T11:00:00Z")
  },
  {
    "_id": 29,
    "diagnostico_id": 14,
    "paciente_id": 409,
    "fecha_registro": ISODate("2024-12-24T13:15:00Z")
  },
  {
    "_id": 30,
    "diagnostico_id": 21,
    "paciente_id": 88,
    "fecha_registro": ISODate("2023-07-01T09:00:00Z")
  },
  {
    "_id": 31,
    "diagnostico_id": 26,
    "paciente_id": 25,
    "fecha_registro": ISODate("2024-05-15T10:30:00Z")
  },
  {
    "_id": 32,
    "diagnostico_id": 13,
    "paciente_id": 344,
    "fecha_registro": ISODate("2023-11-20T14:00:00Z")
  },
  {
    "_id": 33,
    "diagnostico_id": 5,
    "paciente_id": 490,
    "fecha_registro": ISODate("2025-01-01T08:00:00Z")
  },
  {
    "_id": 34,
    "diagnostico_id": 1,
    "paciente_id": 93,
    "fecha_registro": ISODate("2024-07-22T11:45:00Z")
  },
  {
    "_id": 35,
    "diagnostico_id": 18,
    "paciente_id": 272,
    "fecha_registro": ISODate("2023-09-01T09:15:00Z")
  },
  {
    "_id": 36,
    "diagnostico_id": 29,
    "paciente_id": 481,
    "fecha_registro": ISODate("2024-03-10T16:20:00Z")
  },
  {
    "_id": 37,
    "diagnostico_id": 2,
    "paciente_id": 147,
    "fecha_registro": ISODate("2024-12-05T13:00:00Z")
  },
  {
    "_id": 38,
    "diagnostico_id": 20,
    "paciente_id": 396,
    "fecha_registro": ISODate("2023-07-30T10:00:00Z")
  },
  {
    "_id": 39,
    "diagnostico_id": 10,
    "paciente_id": 223,
    "fecha_registro": ISODate("2024-08-18T09:00:00Z")
  },
  {
    "_id": 40,
    "diagnostico_id": 17,
    "paciente_id": 465,
    "fecha_registro": ISODate("2023-10-25T15:30:00Z")
  },
  {
    "_id": 41,
    "diagnostico_id": 23,
    "paciente_id": 112,
    "fecha_registro": ISODate("2024-06-01T11:00:00Z")
  },
  {
    "_id": 42,
    "diagnostico_id": 7,
    "paciente_id": 29,
    "fecha_registro": ISODate("2025-02-14T08:45:00Z")
  },
  {
    "_id": 43,
    "diagnostico_id": 15,
    "paciente_id": 451,
    "fecha_registro": ISODate("2024-09-20T17:00:00Z")
  },
  {
    "_id": 44,
    "diagnostico_id": 3,
    "paciente_id": 205,
    "fecha_registro": ISODate("2023-12-12T10:30:00Z")
  },
  {
    "_id": 45,
    "diagnostico_id": 28,
    "paciente_id": 377,
    "fecha_registro": ISODate("2024-04-25T14:10:00Z")
  },
  {
    "_id": 46,
    "diagnostico_id": 11,
    "paciente_id": 50,
    "fecha_registro": ISODate("2024-11-08T09:30:00Z")
  },
  {
    "_id": 47,
    "diagnostico_id": 19,
    "paciente_id": 266,
    "fecha_registro": ISODate("2023-08-05T16:00:00Z")
  },
  {
    "_id": 48,
    "diagnostico_id": 6,
    "paciente_id": 420,
    "fecha_registro": ISODate("2024-01-19T13:40:00Z")
  },
  {
    "_id": 49,
    "diagnostico_id": 24,
    "paciente_id": 74,
    "fecha_registro": ISODate("2024-07-07T10:00:00Z")
  },
  {
    "_id": 50,
    "diagnostico_id": 9,
    "paciente_id": 313,
    "fecha_registro": ISODate("2023-09-15T11:30:00Z")
  },
  {
    "_id": 51,
    "diagnostico_id": 30,
    "paciente_id": 178,
    "fecha_registro": ISODate("2024-03-29T15:00:00Z")
  },
  {
    "_id": 52,
    "diagnostico_id": 4,
    "paciente_id": 436,
    "fecha_registro": ISODate("2024-10-02T12:00:00Z")
  },
  {
    "_id": 53,
    "diagnostico_id": 16,
    "paciente_id": 99,
    "fecha_registro": ISODate("2023-11-01T08:15:00Z")
  },
  {
    "_id": 54,
    "diagnostico_id": 22,
    "paciente_id": 369,
    "fecha_registro": ISODate("2024-05-10T17:00:00Z")
  },
  {
    "_id": 55,
    "diagnostico_id": 8,
    "paciente_id": 235,
    "fecha_registro": ISODate("2025-01-28T09:00:00Z")
  },
  {
    "_id": 56,
    "diagnostico_id": 25,
    "paciente_id": 444,
    "fecha_registro": ISODate("2024-08-03T14:30:00Z")
  },
  {
    "_id": 57,
    "diagnostico_id": 12,
    "paciente_id": 10,
    "fecha_registro": ISODate("2023-10-10T10:45:00Z")
  },
  {
    "_id": 58,
    "diagnostico_id": 27,
    "paciente_id": 289,
    "fecha_registro": ISODate("2024-06-19T11:00:00Z")
  },
  {
    "_id": 59,
    "diagnostico_id": 14,
    "paciente_id": 498,
    "fecha_registro": ISODate("2024-12-24T13:15:00Z")
  },
  {
    "_id": 60,
    "diagnostico_id": 21,
    "paciente_id": 154,
    "fecha_registro": ISODate("2023-07-01T09:00:00Z")
  },
  {
    "_id": 61,
    "diagnostico_id": 26,
    "paciente_id": 395,
    "fecha_registro": ISODate("2024-05-15T10:30:00Z")
  },
  {
    "_id": 62,
    "diagnostico_id": 13,
    "paciente_id": 61,
    "fecha_registro": ISODate("2023-11-20T14:00:00Z")
  },
  {
    "_id": 63,
    "diagnostico_id": 5,
    "paciente_id": 312,
    "fecha_registro": ISODate("2025-01-01T08:00:00Z")
  },
  {
    "_id": 64,
    "diagnostico_id": 1,
    "paciente_id": 17,
    "fecha_registro": ISODate("2024-07-22T11:45:00Z")
  },
  {
    "_id": 65,
    "diagnostico_id": 18,
    "paciente_id": 483,
    "fecha_registro": ISODate("2023-09-01T09:15:00Z")
  },
  {
    "_id": 66,
    "diagnostico_id": 29,
    "paciente_id": 211,
    "fecha_registro": ISODate("2024-03-10T16:20:00Z")
  },
  {
    "_id": 67,
    "diagnostico_id": 2,
    "paciente_id": 435,
    "fecha_registro": ISODate("2024-12-05T13:00:00Z")
  },
  {
    "_id": 68,
    "diagnostico_id": 20,
    "paciente_id": 90,
    "fecha_registro": ISODate("2023-07-30T10:00:00Z")
  },
  {
    "_id": 69,
    "diagnostico_id": 10,
    "paciente_id": 307,
    "fecha_registro": ISODate("2024-08-18T09:00:00Z")
  },
  {
    "_id": 70,
    "diagnostico_id": 17,
    "paciente_id": 164,
    "fecha_registro": ISODate("2023-10-25T15:30:00Z")
  },
  {
    "_id": 71,
    "diagnostico_id": 23,
    "paciente_id": 469,
    "fecha_registro": ISODate("2024-06-01T11:00:00Z")
  },
  {
    "_id": 72,
    "diagnostico_id": 7,
    "paciente_id": 133,
    "fecha_registro": ISODate("2025-02-14T08:45:00Z")
  },
  {
    "_id": 73,
    "diagnostico_id": 15,
    "paciente_id": 349,
    "fecha_registro": ISODate("2024-09-20T17:00:00Z")
  },
  {
    "_id": 74,
    "diagnostico_id": 3,
    "paciente_id": 497,
    "fecha_registro": ISODate("2023-12-12T10:30:00Z")
  },
  {
    "_id": 75,
    "diagnostico_id": 28,
    "paciente_id": 224,
    "fecha_registro": ISODate("2024-04-25T14:10:00Z")
  },
  {
    "_id": 76,
    "diagnostico_id": 11,
    "paciente_id": 393,
    "fecha_registro": ISODate("2024-11-08T09:30:00Z")
  },
  {
    "_id": 77,
    "diagnostico_id": 19,
    "paciente_id": 55,
    "fecha_registro": ISODate("2023-08-05T16:00:00Z")
  },
  {
    "_id": 78,
    "diagnostico_id": 6,
    "paciente_id": 301,
    "fecha_registro": ISODate("2024-01-19T13:40:00Z")
  },
  {
    "_id": 79,
    "diagnostico_id": 24,
    "paciente_id": 158,
    "fecha_registro": ISODate("2024-07-07T10:00:00Z")
  },
  {
    "_id": 80,
    "diagnostico_id": 9,
    "paciente_id": 476,
    "fecha_registro": ISODate("2023-09-15T11:30:00Z")
  },
  {
    "_id": 81,
    "diagnostico_id": 30,
    "paciente_id": 249,
    "fecha_registro": ISODate("2024-03-29T15:00:00Z")
  },
  {
    "_id": 82,
    "diagnostico_id": 4,
    "paciente_id": 415,
    "fecha_registro": ISODate("2024-10-02T12:00:00Z")
  },
  {
    "_id": 83,
    "diagnostico_id": 16,
    "paciente_id": 77,
    "fecha_registro": ISODate("2023-11-01T08:15:00Z")
  },
  {
    "_id": 84,
    "diagnostico_id": 22,
    "paciente_id": 356,
    "fecha_registro": ISODate("2024-05-10T17:00:00Z")
  },
  {
    "_id": 85,
    "diagnostico_id": 8,
    "paciente_id": 21,
    "fecha_registro": ISODate("2025-01-28T09:00:00Z")
  },
  {
    "_id": 86,
    "diagnostico_id": 25,
    "paciente_id": 332,
    "fecha_registro": ISODate("2024-08-03T14:30:00Z")
  },
  {
    "_id": 87,
    "diagnostico_id": 12,
    "paciente_id": 182,
    "fecha_registro": ISODate("2023-10-10T10:45:00Z")
  },
  {
    "_id": 88,
    "diagnostico_id": 27,
    "paciente_id": 486,
    "fecha_registro": ISODate("2024-06-19T11:00:00Z")
  },
  {
    "_id": 89,
    "diagnostico_id": 14,
    "paciente_id": 140,
    "fecha_registro": ISODate("2024-12-24T13:15:00Z")
  },
  {
    "_id": 90,
    "diagnostico_id": 21,
    "paciente_id": 454,
    "fecha_registro": ISODate("2023-07-01T09:00:00Z")
  },
  {
    "_id": 91,
    "diagnostico_id": 26,
    "paciente_id": 23,
    "fecha_registro": ISODate("2024-05-15T10:30:00Z")
  },
  {
    "_id": 92,
    "diagnostico_id": 13,
    "paciente_id": 33,
    "fecha_registro": ISODate("2023-11-20T14:00:00Z")
  },
  {
    "_id": 93,
    "diagnostico_id": 5,
    "paciente_id": 47,
    "fecha_registro": ISODate("2025-01-01T08:00:00Z")
  },
  {
    "_id": 94,
    "diagnostico_id": 1,
    "paciente_id": 70,
    "fecha_registro": ISODate("2024-07-22T11:45:00Z")
  },
  {
    "_id": 95,
    "diagnostico_id": 18,
    "paciente_id": 122,
    "fecha_registro": ISODate("2023-09-01T09:15:00Z")
  },
  {
    "_id": 96,
    "diagnostico_id": 29,
    "paciente_id": 425,
    "fecha_registro": ISODate("2024-03-10T16:20:00Z")
  },
  {
    "_id": 97,
    "diagnostico_id": 2,
    "paciente_id": 200,
    "fecha_registro": ISODate("2024-12-05T13:00:00Z")
  },
  {
    "_id": 98,
    "diagnostico_id": 20,
    "paciente_id": 473,
    "fecha_registro": ISODate("2023-07-30T10:00:00Z")
  },
  {
    "_id": 99,
    "diagnostico_id": 10,
    "paciente_id": 139,
    "fecha_registro": ISODate("2024-08-18T09:00:00Z")
  },
  {
    "_id": 100,
    "diagnostico_id": 17,
    "paciente_id": 371,
    "fecha_registro": ISODate("2023-10-25T15:30:00Z")
  }
]);

// 18. Inventario

// DML para la colección Inventario
db.Inventario.insertMany([
  {
    _id: 1,
    disponibilidad: 245,
    medicamento_id: 12,
    ubicacion_id: 11,
    fecha_ingreso: ISODate("2024-03-20T08:00:00Z")
  },
  {
    _id: 2,
    disponibilidad: 489,
    medicamento_id: 25,
    ubicacion_id: 20,
    fecha_ingreso: ISODate("2024-02-15T14:30:00Z")
  },
  {
    _id: 3,
    disponibilidad: 102,
    medicamento_id: 3,
    ubicacion_id: 2,
    fecha_ingreso: ISODate("2024-01-10T10:00:00Z")
  },
  {
    _id: 4,
    disponibilidad: 350,
    medicamento_id: 18,
    ubicacion_id: 18,
    fecha_ingreso: ISODate("2023-12-05T09:00:00Z")
  },
  {
    _id: 5,
    disponibilidad: 75,
    medicamento_id: 7,
    ubicacion_id: 14,
    fecha_ingreso: ISODate("2024-04-01T11:00:00Z")
  },
  {
    _id: 6,
    disponibilidad: 190,
    medicamento_id: 2,
    ubicacion_id: 9,
    fecha_ingreso: ISODate("2024-05-22T16:00:00Z")
  },
  {
    _id: 7,
    disponibilidad: 420,
    medicamento_id: 29,
    ubicacion_id: 13,
    fecha_ingreso: ISODate("2024-06-01T07:00:00Z")
  },
  {
    _id: 8,
    disponibilidad: 60,
    medicamento_id: 5,
    ubicacion_id: 8,
    fecha_ingreso: ISODate("2024-01-25T13:00:00Z")
  },
  {
    _id: 9,
    disponibilidad: 280,
    medicamento_id: 15,
    ubicacion_id: 11,
    fecha_ingreso: ISODate("2024-03-10T10:30:00Z")
  },
  {
    _id: 10,
    disponibilidad: 115,
    medicamento_id: 22,
    ubicacion_id: 19,
    fecha_ingreso: ISODate("2023-11-28T09:45:00Z")
  },
  {
    _id: 11,
    disponibilidad: 300,
    medicamento_id: 1,
    ubicacion_id: 1,
    fecha_ingreso: ISODate("2024-07-01T15:00:00Z")
  },
  {
    _id: 12,
    disponibilidad: 450,
    medicamento_id: 28,
    ubicacion_id: 21,
    fecha_ingreso: ISODate("2024-06-18T10:00:00Z")
  },
  {
    _id: 13,
    disponibilidad: 88,
    medicamento_id: 6,
    ubicacion_id: 3,
    fecha_ingreso: ISODate("2024-04-05T12:00:00Z")
  },
  {
    _id: 14,
    disponibilidad: 170,
    medicamento_id: 21,
    ubicacion_id: 15,
    fecha_ingreso: ISODate("2024-02-29T08:30:00Z")
  },
  {
    _id: 15,
    disponibilidad: 330,
    medicamento_id: 10,
    ubicacion_id: 12,
    fecha_ingreso: ISODate("2024-01-15T11:00:00Z")
  },
  {
    _id: 16,
    disponibilidad: 90,
    medicamento_id: 14,
    ubicacion_id: 14,
    fecha_ingreso: ISODate("2024-05-01T09:00:00Z")
  },
  {
    _id: 17,
    disponibilidad: 210,
    medicamento_id: 27,
    ubicacion_id: 22,
    fecha_ingreso: ISODate("2024-03-05T14:00:00Z")
  },
  {
    _id: 18,
    disponibilidad: 495,
    medicamento_id: 4,
    ubicacion_id: 1,
    fecha_ingreso: ISODate("2023-10-10T16:00:00Z")
  },
  {
    _id: 19,
    disponibilidad: 130,
    medicamento_id: 19,
    ubicacion_id: 18,
    fecha_ingreso: ISODate("2024-07-20T10:00:00Z")
  },
  {
    _id: 20,
    disponibilidad: 260,
    medicamento_id: 9,
    ubicacion_id: 8,
    fecha_ingreso: ISODate("2024-06-05T11:00:00Z")
  },
  {
    _id: 21,
    disponibilidad: 400,
    medicamento_id: 23,
    ubicacion_id: 23,
    fecha_ingreso: ISODate("2024-05-10T09:30:00Z")
  },
  {
    _id: 22,
    disponibilidad: 55,
    medicamento_id: 16,
    ubicacion_id: 16,
    fecha_ingreso: ISODate("2024-04-25T13:45:00Z")
  },
  {
    _id: 23,
    disponibilidad: 180,
    medicamento_id: 30,
    ubicacion_id: 25,
    fecha_ingreso: ISODate("2024-03-15T08:00:00Z")
  },
  {
    _id: 24,
    disponibilidad: 290,
    medicamento_id: 11,
    ubicacion_id: 10,
    fecha_ingreso: ISODate("2024-02-01T12:00:00Z")
  },
  {
    _id: 25,
    disponibilidad: 70,
    medicamento_id: 20,
    ubicacion_id: 17,
    fecha_ingreso: ISODate("2024-01-01T10:00:00Z")
  },
  {
    _id: 26,
    disponibilidad: 120,
    medicamento_id: 13,
    ubicacion_id: 15,
    fecha_ingreso: ISODate("2024-07-10T14:00:00Z")
  },
  {
    _id: 27,
    disponibilidad: 470,
    medicamento_id: 24,
    ubicacion_id: 24,
    fecha_ingreso: ISODate("2024-06-25T09:00:00Z")
  },
  {
    _id: 28,
    disponibilidad: 95,
    medicamento_id: 8,
    ubicacion_id: 4,
    fecha_ingreso: ISODate("2024-05-05T11:00:00Z")
  },
  {
    _id: 29,
    disponibilidad: 310,
    medicamento_id: 17,
    ubicacion_id: 13,
    fecha_ingreso: ISODate("2024-04-12T07:30:00Z")
  },
  {
    _id: 30,
    disponibilidad: 40,
    medicamento_id: 26,
    ubicacion_id: 12,
    fecha_ingreso: ISODate("2024-03-01T10:00:00Z")
  },
  {
    _id: 31,
    disponibilidad: 200,
    medicamento_id: 1,
    ubicacion_id: 1,
    fecha_ingreso: ISODate("2024-02-20T08:00:00Z")
  },
  {
    _id: 32,
    disponibilidad: 150,
    medicamento_id: 30,
    ubicacion_id: 25,
    fecha_ingreso: ISODate("2024-01-05T14:30:00Z")
  },
  {
    _id: 33,
    disponibilidad: 380,
    medicamento_id: 10,
    ubicacion_id: 11,
    fecha_ingreso: ISODate("2023-12-15T10:00:00Z")
  },
  {
    _id: 34,
    disponibilidad: 65,
    medicamento_id: 20,
    ubicacion_id: 17,
    fecha_ingreso: ISODate("2024-04-10T09:00:00Z")
  },
  {
    _id: 35,
    disponibilidad: 220,
    medicamento_id: 29,
    ubicacion_id: 13,
    fecha_ingreso: ISODate("2024-05-18T16:00:00Z")
  },
  {
    _id: 36,
    disponibilidad: 410,
    medicamento_id: 5,
    ubicacion_id: 8,
    fecha_ingreso: ISODate("2024-06-20T07:00:00Z")
  },
  {
    _id: 37,
    disponibilidad: 80,
    medicamento_id: 15,
    ubicacion_id: 11,
    fecha_ingreso: ISODate("2024-01-30T13:00:00Z")
  },
  {
    _id: 38,
    disponibilidad: 270,
    medicamento_id: 22,
    ubicacion_id: 19,
    fecha_ingreso: ISODate("2024-03-25T10:30:00Z")
  },
  {
    _id: 39,
    disponibilidad: 105,
    medicamento_id: 3,
    ubicacion_id: 2,
    fecha_ingreso: ISODate("2023-11-01T09:45:00Z")
  },
  {
    _id: 40,
    disponibilidad: 320,
    medicamento_id: 18,
    ubicacion_id: 18,
    fecha_ingreso: ISODate("2024-07-05T15:00:00Z")
  },
  {
    _id: 41,
    disponibilidad: 460,
    medicamento_id: 7,
    ubicacion_id: 14,
    fecha_ingreso: ISODate("2024-06-10T10:00:00Z")
  },
  {
    _id: 42,
    disponibilidad: 92,
    medicamento_id: 2,
    ubicacion_id: 9,
    fecha_ingreso: ISODate("2024-04-15T12:00:00Z")
  },
  {
    _id: 43,
    disponibilidad: 175,
    medicamento_id: 25,
    ubicacion_id: 20,
    fecha_ingreso: ISODate("2024-02-25T08:30:00Z")
  },
  {
    _id: 44,
    disponibilidad: 340,
    medicamento_id: 12,
    ubicacion_id: 11,
    fecha_ingreso: ISODate("2024-01-20T11:00:00Z")
  },
  {
    _id: 45,
    disponibilidad: 50,
    medicamento_id: 4,
    ubicacion_id: 1,
    fecha_ingreso: ISODate("2024-05-28T09:00:00Z")
  },
  {
    _id: 46,
    disponibilidad: 230,
    medicamento_id: 19,
    ubicacion_id: 18,
    fecha_ingreso: ISODate("2024-03-08T14:00:00Z")
  },
  {
    _id: 47,
    disponibilidad: 480,
    medicamento_id: 9,
    ubicacion_id: 8,
    fecha_ingreso: ISODate("2023-10-20T16:00:00Z")
  },
  {
    _id: 48,
    disponibilidad: 140,
    medicamento_id: 23,
    ubicacion_id: 23,
    fecha_ingreso: ISODate("2024-07-15T10:00:00Z")
  },
  {
    _id: 49,
    disponibilidad: 250,
    medicamento_id: 6,
    ubicacion_id: 3,
    fecha_ingreso: ISODate("2024-06-08T11:00:00Z")
  },
  {
    _id: 50,
    disponibilidad: 390,
    medicamento_id: 21,
    ubicacion_id: 15,
    fecha_ingreso: ISODate("2024-05-12T09:30:00Z")
  }
]);

// 19. Resultado

// DML para la colección Resultados
db.Resultado.insertMany([
  {
    _id: 1,
    descripcion: "Resultados de exámenes de laboratorio normales para chequeo general.",
    tratamiento_id: 10 // Vacunación
  },
  {
    _id: 2,
    descripcion: "Mejora significativa en la movilidad del paciente después de terapia física.",
    tratamiento_id: 2 // Terapia Física
  },
  {
    _id: 3,
    descripcion: "Niveles de glucosa en sangre controlados con el nuevo tratamiento farmacológico.",
    tratamiento_id: 3 // Tratamiento Farmacológico
  },
  {
    _id: 4,
    descripcion: "Reducción del tamaño del tumor post-quimioterapia, indicando respuesta positiva.",
    tratamiento_id: 4 // Quimioterapia
  },
  {
    _id: 5,
    descripcion: "Paciente estable y sin complicaciones después de la cirugía de apendicectomía.",
    tratamiento_id: 1 // Cirugía
  },
  {
    _id: 6,
    descripcion: "Recuperación de la función pulmonar tras fisioterapia respiratoria.",
    tratamiento_id: 11 // Fisioterapia Respiratoria
  },
  {
    _id: 7,
    descripcion: "Ausencia de signos de progresión de la enfermedad luego de radioterapia.",
    tratamiento_id: 5 // Radioterapia
  },
  {
    _id: 8,
    descripcion: "Paciente muestra mayor independencia en actividades diarias post-terapia ocupacional.",
    tratamiento_id: 6 // Terapia Ocupacional
  },
  {
    _id: 9,
    descripcion: "Mejora en la capacidad cardiovascular tras programa de rehabilitación cardíaca.",
    tratamiento_id: 7 // Rehabilitación Cardíaca
  },
  {
    _id: 10,
    descripcion: "Niveles de toxinas en sangre dentro del rango normal después de diálisis.",
    tratamiento_id: 8 // Diálisis
  },
  {
    _id: 11,
    descripcion: "Hemoglobina estable tras transfusión sanguínea, sin reacciones adversas.",
    tratamiento_id: 9 // Transfusión Sanguínea
  },
  {
    _id: 12,
    descripcion: "Vacunación exitosa, paciente sin efectos secundarios reportados.",
    tratamiento_id: 10 // Vacunación
  },
  {
    _id: 13,
    descripcion: "Mejora en la capacidad de habla y comunicación después de terapia del lenguaje.",
    tratamiento_id: 13 // Terapia del Lenguaje
  },
  {
    _id: 14,
    descripcion: "Paciente presenta función renal adecuada post-hemodiálisis.",
    tratamiento_id: 14 // Hemodiálisis
  },
  {
    _id: 15,
    descripcion: "Resultados de laboratorio indican control de la infección con el antibiótico prescrito.",
    tratamiento_id: 3 // Tratamiento Farmacológico
  },
  {
    _id: 16,
    descripcion: "Articulación de la rodilla con mayor rango de movimiento después de la cirugía.",
    tratamiento_id: 1 // Cirugía
  },
  {
    _id: 17,
    descripcion: "Reducción significativa del dolor crónico con el nuevo enfoque de terapia física.",
    tratamiento_id: 2 // Terapia Física
  },
  {
    _id: 18,
    descripcion: "Remisión completa de los síntomas de ansiedad con el tratamiento farmacológico.",
    tratamiento_id: 3 // Tratamiento Farmacológico
  },
  {
    _id: 19,
    descripcion: "Biopsia de seguimiento negativa después de quimioterapia, sin células cancerosas.",
    tratamiento_id: 4 // Quimioterapia
  },
  {
    _id: 20,
    descripcion: "Postoperatorio sin complicaciones, paciente recuperándose favorablemente.",
    tratamiento_id: 1 // Cirugía
  },
  {
    _id: 21,
    descripcion: "Mejora en la coordinación motora fina a través de la terapia ocupacional.",
    tratamiento_id: 12 // Terapia Ocupacional
  },
  {
    _id: 22,
    descripcion: "Estabilización de la presión arterial con el manejo farmacológico actual.",
    tratamiento_id: 3 // Tratamiento Farmacológico
  },
  {
    _id: 23,
    descripcion: "Pruebas de función hepática dentro de rangos normales después de tratamiento.",
    tratamiento_id: 3 // Tratamiento Farmacológico
  },
  {
    _id: 24,
    descripcion: "Paciente sin signos de recaída después de completar el ciclo de radioterapia.",
    tratamiento_id: 5 // Radioterapia
  },
  {
    _id: 25,
    descripcion: "Desarrollo de habilidades sociales y cognitivas en terapia ocupacional pediátrica.",
    tratamiento_id: 6 // Terapia Ocupacional
  },
  {
    _id: 26,
    descripcion: "Electrocardiograma (ECG) muestra ritmo cardíaco normal después de rehabilitación.",
    tratamiento_id: 7 // Rehabilitación Cardíaca
  },
  {
    _id: 27,
    descripcion: "Niveles de potasio controlados post-diálisis.",
    tratamiento_id: 8 // Diálisis
  },
  {
    _id: 28,
    descripcion: "Recuento de plaquetas adecuado después de transfusión, sin sangrado activo.",
    tratamiento_id: 9 // Transfusión Sanguínea
  },
  {
    _id: 29,
    descripcion: "Respuesta inmune adecuada generada por la vacunación.",
    tratamiento_id: 10 // Vacunación
  },
  {
    _id: 30,
    descripcion: "Mejora en la capacidad de deglución después de terapia del lenguaje.",
    tratamiento_id: 13 // Terapia del Lenguaje
  },
  {
    _id: 31,
    descripcion: "Paciente tolera bien la sesión de hemodiálisis, sin hipotensión.",
    tratamiento_id: 14 // Hemodiálisis
  },
  {
    _id: 32,
    descripcion: "Cultivo negativo de orina post-tratamiento de infección urinaria.",
    tratamiento_id: 3 // Tratamiento Farmacológico
  },
  {
    _id: 33,
    descripcion: "Ciclo de quimioterapia completado, paciente en fase de recuperación.",
    tratamiento_id: 4 // Quimioterapia
  },
  {
    _id: 34,
    descripcion: "Fisioterapia para esguince de tobillo muestra buena progresión.",
    tratamiento_id: 2 // Terapia Física
  },
  {
    _id: 35,
    descripcion: "Úlcera gástrica en proceso de cicatrización con tratamiento farmacológico.",
    tratamiento_id: 3 // Tratamiento Farmacológico
  },
  {
    _id: 36,
    descripcion: "Resultados de resonancia magnética (RM) confirman reducción de lesión.",
    tratamiento_id: 5 // Radioterapia
  },
  {
    _id: 37,
    descripcion: "Niño con autismo muestra avances en interacción social con terapia ocupacional.",
    tratamiento_id: 6 // Terapia Ocupacional
  },
  {
    _id: 38,
    descripcion: "Prueba de esfuerzo cardíaco mejorada post-rehabilitación.",
    tratamiento_id: 7 // Rehabilitación Cardíaca
  },
  {
    _id: 39,
    descripcion: "Función renal estable a largo plazo con programa de diálisis.",
    tratamiento_id: 8 // Diálisis
  },
  {
    _id: 40,
    descripcion: "Transfusión de plasma completada sin efectos adversos.",
    tratamiento_id: 9 // Transfusión Sanguínea
  },
  {
    _id: 41,
    descripcion: "Programa de vacunación infantil al día.",
    tratamiento_id: 10 // Vacunación
  },
  {
    _id: 42,
    descripcion: "Pacientes con EPOC experimentan menos disnea con fisioterapia respiratoria.",
    tratamiento_id: 11 // Fisioterapia Respiratoria
  },
  {
    _id: 43,
    descripcion: "Mejoras en la motricidad gruesa gracias a la terapia ocupacional.",
    tratamiento_id: 12 // Terapia Ocupacional
  },
  {
    _id: 44,
    descripcion: "Paciente recupera fluidez verbal después de accidente cerebrovascular.",
    tratamiento_id: 13 // Terapia del Lenguaje
  },
  {
    _id: 45,
    descripcion: "Monitoreo post-hemodiálisis indica buen equilibrio de electrolitos.",
    tratamiento_id: 14 // Hemodiálisis
  },
  {
    _id: 46,
    descripcion: "Control de enfermedades crónicas con la medicación actual.",
    tratamiento_id: 3 // Tratamiento Farmacológico
  },
  {
    _id: 47,
    descripcion: "Revisión médica anual con resultados dentro de los parámetros normales.",
    tratamiento_id: 10 // Vacunación
  },
  {
    _id: 48,
    descripcion: "Paciente en fase de seguimiento después de radioterapia.",
    tratamiento_id: 5 // Radioterapia
  },
  {
    _id: 49,
    descripcion: "Evaluación post-tratamiento muestra excelente recuperación funcional.",
    tratamiento_id: 2 // Terapia Física
  },
  {
    _id: 50,
    descripcion: "Resultados de patología post-quirúrgica confirman éxito de la cirugía.",
    tratamiento_id: 1 // Cirugía
  }
]);

// 20. Tratamiento_Area

// DML para la colección Tratamiento_Area
db.Tratamiento_Area.insertMany([
  {
    _id: 1,
    tratamiento_id: 1,
    area_id: 201
  },
  {
    _id: 2,
    tratamiento_id: 2,
    area_id: 202
  },
  {
    _id: 3,
    tratamiento_id: 3,
    area_id: 203
  },
  {
    _id: 4,
    tratamiento_id: 4,
    area_id: 204
  },
  {
    _id: 5,
    tratamiento_id: 5,
    area_id: 205
  },
  {
    _id: 6,
    tratamiento_id: 6,
    area_id: 206
  },
  {
    _id: 7,
    tratamiento_id: 7,
    area_id: 207
  },
  {
    _id: 8,
    tratamiento_id: 8,
    area_id: 208
  },
  {
    _id: 9,
    tratamiento_id: 9,
    area_id: 209
  },
  {
    _id: 10,
    tratamiento_id: 10,
    area_id: 210
  },
  {
    _id: 11,
    tratamiento_id: 11,
    area_id: 211
  },
  {
    _id: 12,
    tratamiento_id: 12,
    area_id: 212
  },
  {
    _id: 13,
    tratamiento_id: 13,
    area_id: 213
  },
  {
    _id: 14,
    tratamiento_id: 14,
    area_id: 208
  },
  {
    _id: 15,
    tratamiento_id: 1,
    area_id: 216
  },
  {
    _id: 16,
    tratamiento_id: 3,
    area_id: 215
  },
  {
    _id: 17,
    tratamiento_id: 2,
    area_id: 202
  },
  {
    _id: 18,
    tratamiento_id: 4,
    area_id: 204
  },
  {
    _id: 19,
    tratamiento_id: 1,
    area_id: 201
  },
  {
    _id: 20,
    tratamiento_id: 6,
    area_id: 206
  },
  {
    _id: 21,
    tratamiento_id: 3,
    area_id: 203
  },
  {
    _id: 22,
    tratamiento_id: 5,
    area_id: 205
  },
  {
    _id: 23,
    tratamiento_id: 7,
    area_id: 207
  },
  {
    _id: 24,
    tratamiento_id: 8,
    area_id: 208
  },
  {
    _id: 25,
    tratamiento_id: 9,
    area_id: 209
  },
  {
    _id: 26,
    tratamiento_id: 10,
    area_id: 210
  },
  {
    _id: 27,
    tratamiento_id: 11,
    area_id: 211
  },
  {
    _id: 28,
    tratamiento_id: 12,
    area_id: 212
  },
  {
    _id: 29,
    tratamiento_id: 13,
    area_id: 213
  },
  {
    _id: 30,
    tratamiento_id: 14,
    area_id: 208
  },
  {
    _id: 31,
    tratamiento_id: 1,
    area_id: 201
  },
  {
    _id: 32,
    tratamiento_id: 2,
    area_id: 202
  },
  {
    _id: 33,
    tratamiento_id: 3,
    area_id: 203
  },
  {
    _id: 34,
    tratamiento_id: 4,
    area_id: 204
  },
  {
    _id: 35,
    tratamiento_id: 5,
    area_id: 205
  },
  {
    _id: 36,
    tratamiento_id: 6,
    area_id: 206
  },
  {
    _id: 37,
    tratamiento_id: 7,
    area_id: 207
  },
  {
    _id: 38,
    tratamiento_id: 8,
    area_id: 208
  },
  {
    _id: 39,
    tratamiento_id: 9,
    area_id: 209
  },
  {
    _id: 40,
    tratamiento_id: 10,
    area_id: 210
  },
  {
    _id: 41,
    tratamiento_id: 11,
    area_id: 211
  },
  {
    _id: 42,
    tratamiento_id: 12,
    area_id: 212
  },
  {
    _id: 43,
    tratamiento_id: 13,
    area_id: 213
  },
  {
    _id: 44,
    tratamiento_id: 14,
    area_id: 208
  },
  {
    _id: 45,
    tratamiento_id: 1,
    area_id: 201
  },
  {
    _id: 46,
    tratamiento_id: 3,
    area_id: 203
  },
  {
    _id: 47,
    tratamiento_id: 2,
    area_id: 202
  },
  {
    _id: 48,
    tratamiento_id: 4,
    area_id: 204
  },
  {
    _id: 49,
    tratamiento_id: 5,
    area_id: 205
  },
  {
    _id: 50,
    tratamiento_id: 6,
    area_id: 206
  }
]);

// 21. Tratamiento_Medicamento

// DML para la colección Tratamiento_Medicamento
db.Tratamiento_Medicamento.insertMany([
  {
    _id: 1,
    tratamiento_id: 3, // Tratamiento Farmacológico
    medicamento_id: 1 // Amlodipino
  },
  {
    _id: 2,
    tratamiento_id: 3, // Tratamiento Farmacológico
    medicamento_id: 3 // Valsartán
  },
  {
    _id: 3,
    tratamiento_id: 3, // Tratamiento Farmacológico
    medicamento_id: 4 // Simvastatina
  },
  {
    _id: 4,
    tratamiento_id: 3, // Tratamiento Farmacológico
    medicamento_id: 5 // Metformina
  },
  {
    _id: 5,
    tratamiento_id: 3, // Tratamiento Farmacológico
    medicamento_id: 6 // Ibuprofeno
  },
  {
    _id: 6,
    tratamiento_id: 10, // Vacunación
    medicamento_id: 29 // Vacuna Antigripal (ejemplo, suponiendo un medicamento de este tipo)
  },
  {
    _id: 7,
    tratamiento_id: 4, // Quimioterapia
    medicamento_id: 24 // Doxorrubicina (ejemplo)
  },
  {
    _id: 8,
    tratamiento_id: 4, // Quimioterapia
    medicamento_id: 25 // Dexametasona (para efectos secundarios de quimio)
  },
  {
    _id: 9,
    tratamiento_id: 3, // Tratamiento Farmacológico
    medicamento_id: 10 // Omeprazol
  },
  {
    _id: 10,
    tratamiento_id: 3, // Tratamiento Farmacológico
    medicamento_id: 13 // Amoxicilina
  },
  {
    _id: 11,
    tratamiento_id: 1, // Cirugía (para pre-medicación o post-operatorio)
    medicamento_id: 6 // Ibuprofeno
  },
  {
    _id: 12,
    tratamiento_id: 1, // Cirugía
    medicamento_id: 17 // Morfina (ejemplo de analgésico post-quirúrgico)
  },
  {
    _id: 13,
    tratamiento_id: 2, // Terapia Física (para dolor asociado)
    medicamento_id: 6 // Ibuprofeno
  },
  {
    _id: 14,
    tratamiento_id: 7, // Rehabilitación Cardíaca (medicamentos de soporte)
    medicamento_id: 1 // Amlodipino
  },
  {
    _id: 15,
    tratamiento_id: 8, // Diálisis (medicamentos asociados)
    medicamento_id: 20 // Eritropoyetina (ejemplo)
  },
  {
    _id: 16,
    tratamiento_id: 9, // Transfusión Sanguínea (medicamentos de soporte)
    medicamento_id: 25 // Dexametasona (para reacciones alérgicas)
  },
  {
    _id: 17,
    tratamiento_id: 11, // Fisioterapia Respiratoria (medicamentos para asma/EPOC)
    medicamento_id: 23 // Salbutamol
  },
  {
    _id: 18,
    tratamiento_id: 12, // Terapia Ocupacional (si aplica medicación para el control de síntomas)
    medicamento_id: 27 // Fluoxetina (para depresión asociada a condiciones crónicas)
  },
  {
    _id: 19,
    tratamiento_id: 13, // Terapia del Lenguaje (si aplica medicación para condiciones subyacentes)
    medicamento_id: 12 // Gabapentina
  },
  {
    _id: 20,
    tratamiento_id: 14, // Hemodiálisis (medicamentos asociados)
    medicamento_id: 20 // Eritropoyetina
  },
  {
    _id: 21,
    tratamiento_id: 3,
    medicamento_id: 26 // Cefalexina
  },
  {
    _id: 22,
    tratamiento_id: 3,
    medicamento_id: 14 // Paracetamol
  },
  {
    _id: 23,
    tratamiento_id: 3,
    medicamento_id: 15 // Loratadina
  },
  {
    _id: 24,
    tratamiento_id: 3,
    medicamento_id: 16 // Prednisona
  },
  {
    _id: 25,
    tratamiento_id: 3,
    medicamento_id: 18 // Ranitidina
  },
  {
    _id: 26,
    tratamiento_id: 3,
    medicamento_id: 19 // Metoclopramida
  },
  {
    _id: 27,
    tratamiento_id: 3,
    medicamento_id: 21 // Atorvastatina
  },
  {
    _id: 28,
    tratamiento_id: 3,
    medicamento_id: 27 // Fluoxetina
  },
  {
    _id: 29,
    tratamiento_id: 3,
    medicamento_id: 28 // Doxazosin
  },
  {
    _id: 30,
    tratamiento_id: 3,
    medicamento_id: 2 // Levotiroxina
  },
  {
    _id: 31,
    tratamiento_id: 4, // Quimioterapia
    medicamento_id: 24 // Doxorrubicina
  },
  {
    _id: 32,
    tratamiento_id: 5, // Radioterapia
    medicamento_id: 25 // Dexametasona (para manejo de edema)
  },
  {
    _id: 33,
    tratamiento_id: 1, // Cirugía
    medicamento_id: 17 // Morfina
  },
  {
    _id: 34,
    tratamiento_id: 2, // Terapia Física
    medicamento_id: 6 // Ibuprofeno
  },
  {
    _id: 35,
    tratamiento_id: 7, // Rehabilitación Cardíaca
    medicamento_id: 3 // Valsartán
  },
  {
    _id: 36,
    tratamiento_id: 8, // Diálisis
    medicamento_id: 20 // Eritropoyetina
  },
  {
    _id: 37,
    tratamiento_id: 9, // Transfusión Sanguínea
    medicamento_id: 25 // Dexametasona
  },
  {
    _id: 38,
    tratamiento_id: 11, // Fisioterapia Respiratoria
    medicamento_id: 23 // Salbutamol
  },
  {
    _id: 39,
    tratamiento_id: 13, // Terapia del Lenguaje
    medicamento_id: 12 // Gabapentina
  },
  {
    _id: 40,
    tratamiento_id: 14, // Hemodiálisis
    medicamento_id: 20 // Eritropoyetina
  },
  {
    _id: 41,
    tratamiento_id: 3,
    medicamento_id: 10 // Omeprazol
  },
  {
    _id: 42,
    tratamiento_id: 3,
    medicamento_id: 13 // Amoxicilina
  },
  {
    _id: 43,
    tratamiento_id: 3,
    medicamento_id: 16 // Prednisona
  },
  {
    _id: 44,
    tratamiento_id: 3,
    medicamento_id: 18 // Ranitidina
  },
  {
    _id: 45,
    tratamiento_id: 3,
    medicamento_id: 19 // Metoclopramida
  },
  {
    _id: 46,
    tratamiento_id: 10, // Vacunación
    medicamento_id: 29 // Vacuna Antigripal
  },
  {
    _id: 47,
    tratamiento_id: 1, // Cirugía
    medicamento_id: 6 // Ibuprofeno
  },
  {
    _id: 48,
    tratamiento_id: 4, // Quimioterapia
    medicamento_id: 24 // Doxorrubicina
  },
  {
    _id: 49,
    tratamiento_id: 5, // Radioterapia
    medicamento_id: 25 // Dexametasona
  },
  {
    _id: 50,
    tratamiento_id: 3, // Tratamiento Farmacológico
    medicamento_id: 21 // Atorvastatina
  }
]);
// 22. Diagnostico_Tratamiento

// DML para la colección Diagnostico_Tratamiento
db.Diagnostico_Tratamiento.insertMany([
  {
    _id: 1,
    diagnostico_id: 1, // Gripe común
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. analgésicos, antipiréticos)
  },
  {
    _id: 2,
    diagnostico_id: 2, // Resfriado común
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. descongestionantes)
  },
  {
    _id: 3,
    diagnostico_id: 3, // Amigdalitis aguda
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. antibióticos si es bacteriana)
  },
  {
    _id: 4,
    diagnostico_id: 4, // Bronquitis crónica
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. broncodilatadores)
  },
  {
    _id: 5,
    diagnostico_id: 5, // Asma leve
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. inhaladores)
  },
  {
    _id: 6,
    diagnostico_id: 6, // Neumonía atípica
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. antibióticos específicos)
  },
  {
    _id: 7,
    diagnostico_id: 7, // Infección urinaria
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. antibióticos)
  },
  {
    _id: 8,
    diagnostico_id: 13, // Apendicitis
    tratamiento_id: 1 // Cirugía (apendicectomía)
  },
  {
    _id: 9,
    diagnostico_id: 16, // Diabetes tipo 1
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. insulina)
  },
  {
    _id: 10,
    diagnostico_id: 17, // Diabetes tipo 2
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. metformina)
  },
  {
    _id: 11,
    diagnostico_id: 18, // Hipertensión esencial
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. antihipertensivos)
  },
  {
    _id: 12,
    diagnostico_id: 19, // Hipotiroidismo
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. levotiroxina)
  },
  {
    _id: 13,
    diagnostico_id: 20, // Hipertiroidismo
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. antitiroideos)
  },
  {
    _id: 14,
    diagnostico_id: 21, // Artritis reumatoide
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. AINEs, DMARDs)
  },
  {
    _id: 15,
    diagnostico_id: 22, // Osteoartritis de rodilla
    tratamiento_id: 2 // Terapia Física
  },
  {
    _id: 16,
    diagnostico_id: 23, // Fractura de fémur
    tratamiento_id: 1 // Cirugía (reducción, fijación)
  },
  {
    _id: 17,
    diagnostico_id: 25, // Migraña
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. triptanos, analgésicos)
  },
  {
    _id: 18,
    diagnostico_id: 26, // Epilepsia
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. anticonvulsivantes)
  },
  {
    _id: 19,
    diagnostico_id: 29, // Infarto agudo de miocardio
    tratamiento_id: 1 // Cirugía (angioplastia, bypass)
  },
  {
    _id: 20,
    diagnostico_id: 30, // Insuficiencia cardíaca congestiva
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. diuréticos, IECA)
  },
  {
    _id: 21,
    diagnostico_id: 31, // Enfermedad renal crónica
    tratamiento_id: 8 // Diálisis
  },
  {
    _id: 22,
    diagnostico_id: 32, // Anemia ferropénica
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. suplementos de hierro)
  },
  {
    _id: 23,
    diagnostico_id: 33, // Leucemia
    tratamiento_id: 4 // Quimioterapia
  },
  {
    _id: 24,
    diagnostico_id: 34, // Linfoma
    tratamiento_id: 5 // Radioterapia
  },
  {
    _id: 25,
    diagnostico_id: 35, // Cáncer de mama
    tratamiento_id: 1 // Cirugía (mastectomía)
  },
  {
    _id: 26,
    diagnostico_id: 35, // Cáncer de mama
    tratamiento_id: 4 // Quimioterapia
  },
  {
    _id: 27,
    diagnostico_id: 35, // Cáncer de mama
    tratamiento_id: 5 // Radioterapia
  },
  {
    _id: 28,
    diagnostico_id: 36, // Depresión mayor
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. antidepresivos)
  },
  {
    _id: 29,
    diagnostico_id: 37, // Trastorno de ansiedad generalizada
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. ansiolíticos)
  },
  {
    _id: 30,
    diagnostico_id: 38, // Esquizofrenia
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. antipsicóticos)
  },
  {
    _id: 31,
    diagnostico_id: 39, // Demencia tipo Alzheimer
    tratamiento_id: 3 // Tratamiento Farmacológico (ej. inhibidores de colinesterasa)
  },
  {
    _id: 32,
    diagnostico_id: 40, // Accidente cerebrovascular (ACV)
    tratamiento_id: 2 // Terapia Física
  },
  {
    _id: 33,
    diagnostico_id: 40, // Accidente cerebrovascular (ACV)
    tratamiento_id: 6 // Terapia Ocupacional
  },
  {
    _id: 34,
    diagnostico_id: 40, // Accidente cerebrovascular (ACV)
    tratamiento_id: 13 // Terapia del Lenguaje
  },
  {
    _id: 35,
    diagnostico_id: 41, // Neumonía
    tratamiento_id: 3 // Tratamiento Farmacológico (antibióticos)
  },
  {
    _id: 36,
    diagnostico_id: 42, // Bronquiolitis
    tratamiento_id: 11 // Fisioterapia Respiratoria
  },
  {
    _id: 37,
    diagnostico_id: 43, // Apnea del sueño
    tratamiento_id: 3 // Tratamiento Farmacológico (dispositivos CPAP, cirugía en casos graves)
  },
  {
    _id: 38,
    diagnostico_id: 44, // Gastritis
    tratamiento_id: 3 // Tratamiento Farmacológico (antiácidos, IBP)
  },
  {
    _id: 39,
    diagnostico_id: 45, // Úlcera péptica
    tratamiento_id: 3 // Tratamiento Farmacológico (IBP, antibióticos para H. pylori)
  },
  {
    _id: 40,
    diagnostico_id: 46, // Colelitiasis
    tratamiento_id: 1 // Cirugía (colecistectomía)
  },
  {
    _id: 41,
    diagnostico_id: 47, // Hepatitis viral
    tratamiento_id: 3 // Tratamiento Farmacológico (antivirales)
  },
  {
    _id: 42,
    diagnostico_id: 48, // Cirrosis hepática
    tratamiento_id: 3 // Tratamiento Farmacológico (diuréticos, betabloqueantes)
  },
  {
    _id: 43,
    diagnostico_id: 49, // Glaucoma
    tratamiento_id: 3 // Tratamiento Farmacológico (gotas oftálmicas)
  },
  {
    _id: 44,
    diagnostico_id: 50, // Catarata
    tratamiento_id: 1 // Cirugía (facoemulsificación)
  },
  {
    _id: 45,
    diagnostico_id: 51, // Otitis media
    tratamiento_id: 3 // Tratamiento Farmacológico (antibióticos, analgésicos)
  },
  {
    _id: 46,
    diagnostico_id: 52, // Sinusitis
    tratamiento_id: 3 // Tratamiento Farmacológico (descongestionantes, antibióticos)
  },
  {
    _id: 47,
    diagnostico_id: 53, // Varicela
    tratamiento_id: 3 // Tratamiento Farmacológico (antivirales, antipiréticos)
  },
  {
    _id: 48,
    diagnostico_id: 54, // Sarampión
    tratamiento_id: 10 // Vacunación (prevención)
  },
  {
    _id: 49,
    diagnostico_id: 55, // Paperas
    tratamiento_id: 10 // Vacunación (prevención)
  },
  {
    _id: 50,
    diagnostico_id: 56, // Rubéola
    tratamiento_id: 10 // Vacunación (prevención)
  }
]);

// 23. Visita_Diagnostico

// DML para la colección Visita_Diagnostico
db.Visita_Diagnostico.insertMany([
  {
    _id: 1,
    visita_id: 1, // Visita del Paciente 1
    diagnostico_id: 1 // Gripe común
  },
  {
    _id: 2,
    visita_id: 2, // Visita del Paciente 2
    diagnostico_id: 2 // Resfriado común
  },
  {
    _id: 3,
    visita_id: 3, // Visita del Paciente 3
    diagnostico_id: 3 // Amigdalitis aguda
  },
  {
    _id: 4,
    visita_id: 4, // Visita del Paciente 4
    diagnostico_id: 4 // Bronquitis crónica
  },
  {
    _id: 5,
    visita_id: 5, // Visita del Paciente 5
    diagnostico_id: 5 // Asma leve
  },
  {
    _id: 6,
    visita_id: 6, // Visita del Paciente 6
    diagnostico_id: 6 // Neumonía atípica
  },
  {
    _id: 7,
    visita_id: 7, // Visita del Paciente 7
    diagnostico_id: 7 // Infección urinaria
  },
  {
    _id: 8,
    visita_id: 8, // Visita del Paciente 8
    diagnostico_id: 13 // Apendicitis
  },
  {
    _id: 9,
    visita_id: 9, // Visita del Paciente 9
    diagnostico_id: 16 // Diabetes tipo 1
  },
  {
    _id: 10,
    visita_id: 10, // Visita del Paciente 10
    diagnostico_id: 17 // Diabetes tipo 2
  },
  {
    _id: 11,
    visita_id: 11,
    diagnostico_id: 18 // Hipertensión esencial
  },
  {
    _id: 12,
    visita_id: 12,
    diagnostico_id: 19 // Hipotiroidismo
  },
  {
    _id: 13,
    visita_id: 13,
    diagnostico_id: 20 // Hipertiroidismo
  },
  {
    _id: 14,
    visita_id: 14,
    diagnostico_id: 21 // Artritis reumatoide
  },
  {
    _id: 15,
    visita_id: 15,
    diagnostico_id: 22 // Osteoartritis de rodilla
  },
  {
    _id: 16,
    visita_id: 16,
    diagnostico_id: 23 // Fractura de fémur
  },
  {
    _id: 17,
    visita_id: 17,
    diagnostico_id: 25 // Migraña
  },
  {
    _id: 18,
    visita_id: 18,
    diagnostico_id: 26 // Epilepsia
  },
  {
    _id: 19,
    visita_id: 19,
    diagnostico_id: 29 // Infarto agudo de miocardio
  },
  {
    _id: 20,
    visita_id: 20,
    diagnostico_id: 30 // Insuficiencia cardíaca congestiva
  },
  {
    _id: 21,
    visita_id: 21,
    diagnostico_id: 31 // Enfermedad renal crónica
  },
  {
    _id: 22,
    visita_id: 22,
    diagnostico_id: 32 // Anemia ferropénica
  },
  {
    _id: 23,
    visita_id: 23,
    diagnostico_id: 33 // Leucemia
  },
  {
    _id: 24,
    visita_id: 24,
    diagnostico_id: 34 // Linfoma
  },
  {
    _id: 25,
    visita_id: 25,
    diagnostico_id: 35 // Cáncer de mama
  },
  {
    _id: 26,
    visita_id: 26,
    diagnostico_id: 36 // Depresión mayor
  },
  {
    _id: 27,
    visita_id: 27,
    diagnostico_id: 37 // Trastorno de ansiedad generalizada
  },
  {
    _id: 28,
    visita_id: 28,
    diagnostico_id: 38 // Esquizofrenia
  },
  {
    _id: 29,
    visita_id: 29,
    diagnostico_id: 39 // Demencia tipo Alzheimer
  },
  {
    _id: 30,
    visita_id: 30,
    diagnostico_id: 40 // Accidente cerebrovascular (ACV)
  },
  {
    _id: 31,
    visita_id: 31,
    diagnostico_id: 41 // Neumonía
  },
  {
    _id: 32,
    visita_id: 32,
    diagnostico_id: 42 // Bronquiolitis
  },
  {
    _id: 33,
    visita_id: 33,
    diagnostico_id: 43 // Apnea del sueño
  },
  {
    _id: 34,
    visita_id: 34,
    diagnostico_id: 44 // Gastritis
  },
  {
    _id: 35,
    visita_id: 35,
    diagnostico_id: 45 // Úlcera péptica
  },
  {
    _id: 36,
    visita_id: 36,
    diagnostico_id: 46 // Colelitiasis
  },
  {
    _id: 37,
    visita_id: 37,
    diagnostico_id: 47 // Hepatitis viral
  },
  {
    _id: 38,
    visita_id: 38,
    diagnostico_id: 48 // Cirrosis hepática
  },
  {
    _id: 39,
    visita_id: 39,
    diagnostico_id: 49 // Glaucoma
  },
  {
    _id: 40,
    visita_id: 40,
    diagnostico_id: 50 // Catarata
  },
  {
    _id: 41,
    visita_id: 41,
    diagnostico_id: 51 // Otitis media
  },
  {
    _id: 42,
    visita_id: 42,
    diagnostico_id: 52 // Sinusitis
  },
  {
    _id: 43,
    visita_id: 43,
    diagnostico_id: 53 // Varicela
  },
  {
    _id: 44,
    visita_id: 44,
    diagnostico_id: 54 // Sarampión
  },
  {
    _id: 45,
    visita_id: 45,
    diagnostico_id: 55 // Paperas
  },
  {
    _id: 46,
    visita_id: 46,
    diagnostico_id: 56 // Rubéola
  },
  {
    _id: 47,
    visita_id: 47,
    diagnostico_id: 57 // VIH/SIDA
  },
  {
    _id: 48,
    visita_id: 48,
    diagnostico_id: 58 // Tuberculosis
  },
  {
    _id: 49,
    visita_id: 49,
    diagnostico_id: 59 // Malaria
  },
  {
    _id: 50,
    visita_id: 50,
    diagnostico_id: 60 // Dengue
  }
]);
