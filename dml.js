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
