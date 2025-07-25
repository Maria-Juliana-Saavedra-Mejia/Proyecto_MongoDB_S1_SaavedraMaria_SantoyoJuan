
<h3 align="center";>

**SISTEMA HOSPITALARIO**

</h3>

<br>
<br>
<br>

<h3 align="center";>

**Maria Juliana Saavedra Mejia**

</h3>

<h3 align="center";>

**Juan David Santoyo Jaimes**

</h3>

<br>
<br>
<br>
<br>

<h3 align="center";>

**S1**

</h3>

<h3 align="center";>

**Pedro Felipe Gómez Bonilla**

</h3>

<br>
<br>
<br>
<br>

<h3 align="center";>

**CAMPUSLANDS**

</h3>

<h3 align="center";>

**RUTA NODE**

</h3>

<h3 align="center";>

**BUCARAMANGA, SANTANDER**

</h3>

<h3 align="center";>

**2025**

</h3>

---
<h1 align="center";>

## Introducción

</h1>

Este documento servirá como una guía detallada del proceso completo de diseño,
estructuración e implementación de una base de datos para un Sistema Hospitalario de la Secretaría de salud de Bucaramanga. El objetivo principal es gestionar eficazmente los datos e información generados por los hospitales, pacientes, médicos, tratamientos, medicamentos, visitas médicas, historiales clínicos, áreas especializadas y personal administrativo. Inicialmente, se analizará el caso de estudio junto con sus requerimientos específicos. A partir de esta investigación, se procederá a desarrollar un modelo conceptual detallado donde se identificarán las entidades principales, sus atributos y las relaciones entre ellas. Este paso determina las bases para comprender la estructura esencial de la gestión del sistema hospitalario.

A continuación, se realizará la conversión del modelo conceptual al modelo lógico. Este último
ofrece una representación más precisa de cómo se organizará la información, facilitando una
Comprensión clara de la base de datos en desarrollo. Se aplicará el proceso de Normalización
hasta la tercera forma normal (3FN) para optimizar la organización de los datos, reduciendo
redundancias y eliminando dependencias transitivas.

Posteriormente, se llevará a cabo la conversión del modelo lógico al modelo físico, el cual
define la implementación real de entidades, atributos y relaciones, incorporando detalles
técnicos como los tipos de datos adecuados para cada elemento.

Finalmente, se detallarán algunos procedimientos, funciones, consultas y creación perfiles que
complementarán la funcionalidad del sistema de información desarrollado, asegurando así su
eficiencia y utilidad para el sistema hospitalario.

Con estos pasos y elementos, se garantiza una guía completa y efectiva para el diseño y
desarrollo de la base de datos necesaria para la gestión eficiente del sistema hospitalario.


---
<h1 align="center";>

## Caso de Estudio

</h1>


La Secretaria de Salud ha pedido la creación de un diseño inicial de un software que permita manejar los datos e información que se generan sobre los Hospitales de la ciudad de Bucaramanga. Por lo que comenzamos estructurando los requerimientos dados:

- **Hospitales**

    - Un hospital puede tener múltiples áreas especializadas (Cardiología, Neurología, etc.).

    - Cada hospital tiene un director general, pero un director puede supervisar varios hospitales.
    - Cada hospital tiene un conjunto de médicos, enfermeras y personal administrativo.

    - Los hospitales deben contar con un historial detallado de pacientes y tratamientos realizados.

- **Pacientes**

    - Los pacientes se identifican por su número de historia clínica, nombre, dirección, teléfono, correo electrónico y seguros médicos.

    - Los historiales médicos incluyen diagnósticos, tratamientos realizados y resultados obtenidos.

- **Médicos y Personal**

    - Los médicos se identifican por su número de colegiatura, nombre, especialidad, teléfono, correo electrónico y salario.

    - Se definen los siguientes tipos de personal:

        - **001: Director General:** Gestión general del hospital.

        - **002: Médico Especialista:** Atiende pacientes y realiza diagnósticos.

        - **003: Enfermero/a:** Asiste a médicos y cuida a los pacientes.

        - **004: Personal Administrativo:** Gestión de recursos y logística.

        - **005: Personal de Mantenimiento:** Mantenimiento y limpieza de las instalaciones.

- **Tratamientos y Medicamentos**

    - Los tratamientos se identifican por su nombre, descripción, área médica relacionada y costo. 

    - Los medicamentos se almacenan por nombre, fabricante, tipo, y disponibilidad en inventario.

- **Visitas Médicas**

    - Las visitas médicas se registran con fecha, hora, médico asignado, paciente atendido y diagnóstico.

    - Los pacientes pueden tener múltiples visitas médicas a lo largo del tiempo.

Con base en la información anterior, se procederá a crear una base de datos en MongoDB con el objetivo de agrupar y relacionar los datos de los Hospitales de la ciudad de Bucaramanga, así como la información de los pacientes.

---

<h1 align="center";>

## Instalación General

</h1>

Los archivos relacionados con la BBDD de la Secretaria de Salud , se encuentran en la
plataforma Github, estos archivos se encuentran en formato json y se dividen en 5 partes:

- ddl.json: Este archivo contiene el script para crear la base de datos y definir las colecciones correspondientes.

- dml.json: Este archivo contiene ejemplos de datos para gestionar los Hospitales, facilitando la inserción inicial de información.

- dql_select.json: En este archivo se encuentran las consultas relacionadas con pacientes, médicos, tratamientos, medicamentos, visitas médicas, historiales clínicos, áreas especializadas y personal administrativo.

- dql_funciones.json: Se definen los procedimientos y funciones para añadir, actualizar y mostrar datos dentro del sistema.

- Readme.md : Contiene toda la documentacion del proyecto. 

- Diagrama.jpg: En ese archivo se muestran los diagramas realizados. 

---

<h1 align="center";>

## Planificación 

</h1>

## Ejecución 

Una vez se analizó la información requerida por La Secretaria de Salud, se inició la creación del modelo conceptual. Este modelo proporciona una descripción de alto nivel de las necesidades de información que están detrás del diseño de una base de datos. Representa los conceptos principales de la base de datos y las relaciones entre ellos.

---


## Construcción del Modelo Conceptual

En esta sección del documento se adjunta la información correspondiente al modelo
conceptual el cual es el más abstracto de todos los modelos a implementar en el documento,
este es fundamental para identificar entidades clave del negocio y del sistema, así como para
establecer relaciones entre ellas.


**Descripción**

Se diseñó el modelo conceptual identificando cada una de las entidades, sus atributos y las
relaciones entre ellas. Este modelo conceptual proporciona una visión clara y estructurada de
cómo se organizan y conectan los diferentes elementos de la base de datos.

- **Las Entidades y Atributos**

1. Hospital

    - id: identificador único del hospital.
    - nombre: nombre del hospital.
    - id_AreasEspecializadas: Areas en las que se especializa
    - id_director: departamento correspondiente.

2. ÁreaEspecializada

    - id: identificador del área especializada.
    - nombre: nombre del área.
    - descripcion: descripción del área.

3. MédicoPersonal

    - NumeroColegiatura: identificador único del médico o personal.
    - nombre: nombre completo.
    - especialidad: especialidad médica.
    - Salario: Cantidad de dinero que gana mensualmente.
    - Teléfono: Numero de teléfono.

4. Paciente

    - id: identificador único del paciente.
    - nombre: nombre del paciente.
    - Dirección: Dirección.
    - Correo: correo electronico.
    - dirección: dirección.
    - teléfono: teléfono de contacto.
    - id_SegurosMedicos: identificador del seguro del paciente.

5. SegurosMedicos

    - id: identificador único.
    - nombre: nombre del responsable.

6. VisitaMedica

    - id: identificador de la visita médica.
    - fecha: fecha de la visita.
    - Hora: hora de la visita.
    - id_Medico: identificador único del medico.
    - id_Paciente: identificador único del paciente.
    - id_Diagnostico: identificador único del paciente.

7. Diagnostico

    - id: identificador del diagnóstico.
    - descripcion: descripción del diagnóstico.
    - id_Tratamientos: identificador único de tratamientos.

8. Tratamientos

    - id: identificador del tratamiento.
    - descripcion: detalle del tratamiento.
    - nombre: duración estimada o real.
    - Costo: valor del tratamiento.
    - id_AreasEspecializadas: identificador del area del hospital que realiza este tratamiento.

9. Medicamentos

    - id: identificador del medicamento.
    - id_Inventario: Identificador del medicamento dentro del inventario.
    - Tipo: tipo de medicamento.
    - Nombre: nombre medicamento.

10. Inventario

    - id: identificador del inventario.
    - Disponibilidad: Cantidad de medicamentos en stock.
    - id_Medicamentos: identificador unico de los medicamentos dentro del inventario.
    - id_Fabricante:identificador unico de los fabricantes de los medicamentos.

11. Fabricante

    - id: identificador del fabricante.
nombre: nombre del fabricante.

12. Resultado

    - id: identificador del resultado.
    - Descripcion: descripcion del resultado obtenido en el tratamiento.

13. HistorialMedico

    - id: identificador HistorialMedico.
    - id_Diagnostico: nombre de la entidad.

- **Relaciones y Cardinalidades**

1. Hospital – MédicoPersonal

Cardinalidad:

Un hospital tiene uno o muchos médicos.
Un médico trabaja en muchos hospitales.
(N:M)

2. Hospital – ÁreaEspecializada

Cardinalidad:

Un hospital tiene una o varias áreas especializadas.
Un área especializada pertenece a un muchos hospitales.
(N:M)

3. Hospital – Paciente

Cardinalidad:

Un hospital atiende a uno o varios pacientes.
Un paciente es atendido por un solo hospital.
(1:N)

4. Paciente – SegurosMedicos

Cardinalidad:

Un paciente tiene un solo seguro médico.
Un seguro médico puede estar asociado a varios pacientes.
(N:1)

5. Paciente – VisitaMedica

Cardinalidad:

Un paciente puede tener muchas visitas médicas.
Cada visita médica está asociada a un solo paciente.
(1:N)

6. MédicoPersonal – VisitaMedica

Cardinalidad:

Un médico puede realizar muchas visitas médicas.
Cada visita médica es atendida por un solo médico.
(1:N)

7. VisitaMedica – Diagnóstico

Cardinalidad:

Una visita médica puede generar uno o varios diagnósticos.
Cada diagnóstico proviene de una única visita médica.
(1:N)

8. Diagnóstico – Tratamientos

Cardinalidad:

Un diagnóstico puede requerir varios tratamientos.
Un tratamiento puede ser aplicado a varios diagnósticos.
(N:M)

9. Tratamiento – ÁreaEspecializada

Cardinalidad:

Un tratamiento es aplicado por una sola área especializada.
Un área especializada puede realizar varios tratamientos.
(1:N)

10. Tratamiento – Medicamentos

Cardinalidad:

Un tratamiento puede usar varios medicamentos.
Un medicamento puede usarse en varios tratamientos.
(N:M)

11. Medicamento – Inventario

Cardinalidad:

Un medicamento está en un inventario.
Un inventario puede contener muchos medicamentos.
(1:N)

12. Inventario – Fabricante

Cardinalidad:

Un fabricante puede proveer muchos medicamentos al inventario.
Un inventario puede registrar medicamentos de un solo fabricante.
(1:N)

13. Tratamiento – Resultado

Cardinalidad:

Un tratamiento puede generar un resultado.
Un resultado está ligado a un tratamiento.
(1:1)

14. Diagnóstico – HistorialMedico

Cardinalidad:

Un diagnóstico forma parte del historial médico.
Un historial médico puede contener muchos diagnósticos.
(1:N)

**Diagrama** 

```mermaid
graph TD
    %% Entitie
    Hospitales[Hospitales]
    AreasEspecializadas[AreasEspecializadas]
    Pacientes[Pacientes]
    MedicosYPersonal[MedicosYPersonal]
    SegurosMedicos[SegurosMedicos]
    HistorialMedico[HistorialMedico]
    VisitasMedicas[VisitasMedicas]
    Diagnosticos[Diagnosticos]
    Tratamientos[Tratamientos]
    Medicamentos[Medicamentos]
    Resultados[Resultados]
    Inventario[Inventario]
    Fabricante[Fabricante]
   
    %% Attributes as ovals
    idHospital((id))
    idDirector((id_Director))
    idAreasEspecializadas((id_AreasEspecializadas))
    NombreHospital((Nombre))
    
    idAreaEspecializada((id))
    DescripcionArea((Descripcion))
    NombreArea((Nombre))

    idPacientes((id))
    idHistorialMedico((id_HistorialMedico))
	TelefonoPaciente((Telefono))
	idSegurosMedicos((id_SegurosMedicos))
    NombrePaciente((Nombre))
    DireccionPaciente((Direccion))
    CorreoPaciente((Correo))
	
	NumeroColegiatura((NumeroColegiatura))
	NombreMedicoYPersonal((Nombre))
	Especialidad((Especialidad))
	Salario((Salario))
	TelefonoMedicoYPersonal((Telefono))
	
	idSegurosMedicos((id))
	NombreSeguro((Nombre))
	
	idHistorial((id))
	id_DiagnosticoEnElHostorial((id_Diagnostico))
	
	idVisitasMedicas((id))
	HoraVisita((Visita))
	FechaVisita((Fecha))
	idMedico((id_Medico))
	idPaciente((id_Paciente))
	idDiagnostico((id_Diagnostico))
	
	idDiagnostico((Diagnostico))
	DescripcionDiagnostico((Descripcion))
	idTratamiento((id_Tratamientos))
	
	idTratamientos((id))
	idAreasEspecializadasTratamientos((id_AreasEspecializadas))
	NombreTratamiento((Nombre))
	CostoTratamiento((Costo))
	DescripcionTratamientos((Descripcion))
	
	idMedicamentos((id))
	idInventari((id_Inventario))
	NombreMedicamentos((Nombre))
	TipoMedicamentos((Tipo))
	
	idResultados((id))
	DescripcionResultados((Descripcion))

	idInventario((id))
	DisponiilidadInventario((Disponobilidad))
	idFabricante((id_Fabricante))
	idMedicamentosInventario((id_Medicamentos))
	
	idFabricantes((id))
	NombreFabricante((Nombre))
	


    %% Relationships
    
    Hospitales --> idHospital
    Hospitales --> idDirector
    Hospitales --> idAreasEspecializadas
    Hospitales --> NombreHospital

    AreasEspecializadas --> idAreaEspecializada
    AreasEspecializadas --> DescripcionArea
    AreasEspecializadas --> NombreArea

    Pacientes --> idPacientes
    Pacientes --> idHistorialMedico
    Pacientes --> TelefonoPaciente
    Pacientes --> idSegurosMedicos
    Pacientes --> NombrePaciente
    Pacientes --> DireccionPaciente
    Pacientes --> CorreoPaciente
    
    MedicosYPersonal --> NumeroColegiatura
    MedicosYPersonal --> NombreMedicoYPersonal
    MedicosYPersonal --> Especialidad
    MedicosYPersonal --> Salario
    MedicosYPersonal --> TelefonoMedicoYPersonal

    SegurosMedicos --> idSegurosMedicos
    SegurosMedicos --> NombreSeguro

    HistorialMedico --> idHistorial
    HistorialMedico --> id_DiagnosticoEnElHostorial

    VisitasMedicas --> idVisitasMedicas
    VisitasMedicas --> HoraVisita
    VisitasMedicas --> FechaVisita
    VisitasMedicas --> idMedico
    VisitasMedicas --> idPaciente
    VisitasMedicas --> CorreoPaciente

    Diagnosticos --> idDiagnostico
    Diagnosticos --> DescripcionDiagnostico
    Diagnosticos --> idTratamiento

    Tratamientos --> idTratamientos
    Tratamientos --> idAreasEspecializadasTratamientos
    Tratamientos --> NombreTratamiento
    Tratamientos --> CostoTratamiento
    Tratamientos --> DescripcionTratamientos

    Medicamentos --> idMedicamentos
    Medicamentos --> idInventari
    Medicamentos --> NombreMedicamentos
    Medicamentos --> TipoMedicamentos

    Resultados --> idResultados
    Resultados --> DescripcionResultados

    Inventario --> idInventario
    Inventario --> DisponiilidadInventario
    Inventario --> idFabricante
    Inventario --> idMedicamentosInventario

    Fabricante --> idFabricantes
    Fabricante --> NombreFabricante

    Hospitales --> |tienen| AreasEspecializada
    Hospitales --> |tienen| Pacientes
    Hospitales --> |tienen| MedicosYPersonal

    Pacientes --> |tienen| SegurosMedicos
    Pacientes --> HistorialMedico
    Pacientes --> VisitasMedicas

    MedicosYPersonal --> VisitasMedicas

    VisitasMedicas --> Diagnosticos

    HistorialMedico --> Diagnosticos
    
    Diagnosticos --> Tratamientos

    Tratamientos --> Resultados
    Tratamientos --> |tienen| Medicamentos

    Medicamentos --> Inventario

    Inventario --> |tienen| Fabricante


```

## Construcción del Modelo Lógico

En esta sección del documento se adjunta la información correspondiente al modelo lógico el
cual es el representa la estructura de los datos sin detalles de implementación física,
enfocándose en las entidades, atributos, relaciones y claves de la base de datos.Este modelo
ayuda a comprender la organización de los datos y sus interconexiones, permitiendo la
normalización y la especificación de claves principales y externas.


**Descripción**

- **Las Entidades y Atributos**

1. Hospital 
    - id: INT PRIMARY KEY.
    - id_director: INT NOT NULL FOREING KEY.
    - id_AreasEspecializadas: INT NOT NULL FOREING KEY.
    - nombre: varchar(100) NOT NULL.

2. AreasEspecializadas
   - id: INT PRIMARY KEY.
   - 

3. MedicosYPersonal 
    - id: INT PRIMARY KEY.

4. Pacientes 
    - id: INT PRIMARY KEY.

5. SegurosMedicos
    - id: INT PRIMARY KEY.

6. HistorialMedico
    - id: INT PRIMARY KEY.

7. VisitasMedicas
    - id: INT PRIMARY KEY.

8. Diagnosticos
    - id: INT PRIMARY KEY.

9. Tratamientos
    - id: INT PRIMARY KEY.

10. Resultados
    - id: INT PRIMARY KEY.

11. Medicamentos
    - id: INT PRIMARY KEY.

12. Inventario
    - id: INT PRIMARY KEY.

13. Fabricante
    - id: INT PRIMARY KEY.


**Diagrama**

```mermaid
erDiagram
    HOSPITAL {
        int id PK
        string nombre
        int id_AreasEspecializadas FK
        int id_director FK
    }
    AREA_ESPECIALIZADA {
        int id PK
        string nombre
        string descripcion
    }
    MEDICO_PERSONAL {
        int NumeroColegiatura PK
        string nombre
        string especialidad
        float Salario
        string Telefono
    }
    PACIENTE {
        int id PK
        string nombre
        string Direccion
        string Correo
        string Telefono
        int id_SegurosMedicos FK
    }
    SEGUROS_MEDICOS {
        int id PK
        string nombre
    }
    VISITA_MEDICA {
        int id PK
        string fecha
        string Hora 
        int id_Medico FK
        int id_Paciente FK
        int id_Diagnostico FK
    }
    DIAGNOSTICO {
        int id PK
        string descripcion
        int id_Tratamientos FK
    }
    TRATAMIENTO {
        int id PK
        string descripcion
        string nombre
        float Costo
        int id_AreasEspecializadas FK
    }
    MEDICAMENTO {
        int id PK
        int id_Inventario FK
        string Tipo
        string Nombre
    }
    INVENTARIO {
        int id PK
        string Disponibilidad
        int id_Medicamentos FK
        int id_Fabricante FK
    }
    FABRICANTE {
        int id PK
        string nombre
    }
    RESULTADO {
        int id PK
        string Descripcion
    }
    HISTORIAL_MEDICO {
        int id PK
        int id_Diagnostico FK
    }

    HOSPITAL }|..|{ MEDICO_PERSONAL : emplea
    HOSPITAL }|..|{ AREA_ESPECIALIZADA : especializa
    HOSPITAL ||--o{ PACIENTE : atiende
    PACIENTE }|--|| SEGUROS_MEDICOS : seguro
    PACIENTE ||--o{ VISITA_MEDICA : consulta
    MEDICO_PERSONAL ||--o{ VISITA_MEDICA : realiza
    VISITA_MEDICA ||--o{ DIAGNOSTICO : produce
    DIAGNOSTICO }|..|{ TRATAMIENTO : requiere
    TRATAMIENTO }|--|| AREA_ESPECIALIZADA : aplica
    TRATAMIENTO }|..|{ MEDICAMENTO : usa
    MEDICAMENTO ||--o{ INVENTARIO : pertenece
    INVENTARIO ||--o{ MEDICAMENTO : contiene
    INVENTARIO }|--|| FABRICANTE : provee
    TRATAMIENTO ||--|| RESULTADO : genera
    DIAGNOSTICO ||--o{ HISTORIAL_MEDICO : registra

```

