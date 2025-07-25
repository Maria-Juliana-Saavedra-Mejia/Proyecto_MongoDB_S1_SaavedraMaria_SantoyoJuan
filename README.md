<div style="text-align: center;">

## **SISTEMA HOSPITALARIO**

**Maria Juliana Saavedra Mejia**

**Juan David Santoyo Jaimes**

**S1**

**CAMPUSLANDS**

**RUTA NODE**

**BUCARAMANGA, SANTANDER**

**2025**
</div>

---
<div style="text-align: center;">

## Introducción

</div>

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
<div style="text-align: center;">

## Caso de Estudio

</div>


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

<div style="text-align: center;">



</div>