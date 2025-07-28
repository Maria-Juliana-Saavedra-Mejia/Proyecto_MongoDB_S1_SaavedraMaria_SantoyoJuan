use Sistema_Hospitalario;

db.createCollection("Hospital", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre", "director_id"],
      properties: {
        _id: { bsonType: "int" }, 
        nombre: { bsonType: "string" },
        director_id: { bsonType: "int" }
      }
    }
  }
});

db.createCollection("Hospital_Area", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "area_id"],
      properties: {
        _id: { bsonType: "int" }, 
        area_id: { bsonType: "int" }, 
        director_id: { bsonType: "int" }
      }
    }
  }
});

db.createCollection("Area_Especializada", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre", "descripcion"],
      properties: {
        _id: { bsonType: "int" }, 
        nombre: { bsonType: "string" },
        descripcion: { bsonType: "string" }
      }
    }
  }
});

db.createCollection("MedicosYPersonal", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["numero_colegiatura", "nombre", "salario", "telefono", "hospital_id", "especialidad_id" ],
      properties: {
        numero_colegiatura: { bsonType: "int" }, 
        nombre: { bsonType: "string" },
        salario: { bsonType: "double" },
        telefono: { bsonType: "string" },
        hospital_id:{ bsonType: "int" },
        especialidad_id:{ bsonType: "int" }, 
      }
    }
  }
});

db.createCollection("Paciente", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre", "correo", "telefono", "hospital_id", "especialidad_id","seguro_medico_id" ],
      properties: {
        _id: { bsonType: "int" }, 
        nombre: { bsonType: "string" },
        correo: { bsonType: "string" },
        telefono: { bsonType: "string" },
        hospital_id:{ bsonType: "int" },
        seguro_medico_id:{ bsonType: "int" }, 
        direccion_id:{ bsonType: "int" }
      }
    }
  }
});

db.createCollection("Especialidad", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre"],
      properties: {
        _id: { bsonType: "int" }, 
        nombre: { bsonType: "string" }
      }
    }
  }
});

db.createCollection("Seguros_Medicos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre"],
      properties: {
        _id: { bsonType: "int" }, 
        nombre: { bsonType: "string" }
      }
    }
  }
});

db.createCollection("Direccion", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "calle", "ciudad", "codigo_postal" ],
      properties: {
        _id: { bsonType: "int" }, 
        calle: { bsonType: "string" },
        ciudad: { bsonType: "string" },
        codigo_postal: { bsonType: "string" }
      }
    }
  }
});

db.createCollection("Visita_Medica", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "fecha", "hora", "medico_id", "paciente_id"],
      properties: {
        _id: { bsonType: "int" },
        fecha: { bsonType: "date" },
        hora: {
          bsonType: "string",
          pattern: "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
        },
        medico_id: { bsonType: "int" },
        paciente_id: { bsonType: "int" }
      }
    }
  }
});

db.createCollection("Historial_Medico", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "diagnostico_id", "paciente_id", "fecha_registro" ],
      properties: {
        _id: { bsonType: "int" }, 
        diagnostico_id: { bsonType: "int" },
        paciente_id: { bsonType: "int" },
        fecha_registro: { bsonType: "date" }
      }
    }
  }
});

db.createCollection("Diagnostico", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "descripcion" ],
      properties: {
        _id: { bsonType: "int" }, 
        descripcion: { bsonType: "string" }
      }
    }
  }
});

db.createCollection("Tratamiento_Area", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "tratamiento_id", "area_id" ],
      properties: {
        _id: { bsonType: "int" }, 
        tratamiento_id: { bsonType: "int" },
        area_id: { bsonType: "int" }
      }
    }
  }
});

db.createCollection("Tratamiento_Medicamento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "tratamiento_id", "medicamento_id"],
      properties: {
        _id: { bsonType: "int" }, 
        tratamiento_id: { bsonType: "int" },
        medicamento_id: { bsonType: "int" }
      }
    }
  }
});

db.createCollection("Tratamiento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "descripcion", "nombre", "tipo_tratamiento_id"],
      properties: {
        _id: { bsonType: "int" }, 
        nombre: { bsonType: "string" },
        descripcion: { bsonType: "string" },
        tipo_tratamiento_id: { bsonType: "int" }
      }
    }
  }
});

db.createCollection("Resultado", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "descripcion", "tratamiento_id"],
      properties: {
        _id: { bsonType: "int" }, 
        descripcion: { bsonType: "string" },
        tratamiento_id: { bsonType: "int" }
      }
    }
  }
});

db.createCollection("Tipo_Tratamiento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre", "costo_base"],
      properties: {
        _id: { bsonType: "int" }, 
        nombre: { bsonType: "string" },
        costo_base: { bsonType: "double" }
      }
    }
  }
});

db.createCollection("Medicamento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre", "fabricante_id","tipo_medicamento_id"],
      properties: {
        _id: { bsonType: "int" }, 
        nombre: { bsonType: "string" },
        fabricante_id: { bsonType: "int" }, 
        tipo_medicamento_id: { bsonType: "int" }
      }
    }
  }
});

db.createCollection("Fabricante", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre"],
      properties: {
        _id: { bsonType: "int" }, 
        nombre: { bsonType: "string" }
      }
    }
  }
});

db.createCollection("Tipo_Medicamento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre"],
      properties: {
        _id: { bsonType: "int" }, 
        nombre: { bsonType: "string" }
      }
    }
  }
});

db.createCollection("Inventario", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "disponibilidad", "medicamento_id","ubicacion_id","fecha_ingreso"],
      properties: {
        _id: { bsonType: "int" }, 
        disponibilidad: { bsonType: "int" },
        ubicacion_id: { bsonType: "int" }, 
        medicamento_id: { bsonType: "int" },
        fecha_ingreso: { bsonType: "date" }
      }
    }
  }
});

db.createCollection("Diagnostico_Tratamiento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "diagnostico_id", "tratamiento_id"],
      properties: {
        _id: { bsonType: "int" }, 
        diagnostico_id: { bsonType: "int" },
        tratamiento_id: { bsonType: "int" }
      }
    }
  }
});

db.createCollection("Ubicacion", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "edificio", "piso", "estante"],
      properties: {
        _id: { bsonType: "int" }, 
        nombre: { bsonType: "string" }
      }
    }
  }
});

db.createCollection("Visita_Diagnostico", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "visita_id", "diagnostico_id"],
      properties: {
        _id: { bsonType: "int" }, 
        visita_id: { bsonType: "int" },
        diagnostico_id: { bsonType: "int" },
      }
    }
  }
});
