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

