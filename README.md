# Backend prueba técnica

## Datos generales :paperclip:
**El presente repositorio funciona en conjunto con el repositorio "alfatec_frontend"

## Tecnologías utilizadas
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![NodeJS](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/API/Node) [![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/) [![ExpressJS](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/) [![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://dev.mysql.com/doc/) [![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/Git)

## Indice 

- [Descripción general del proyecto :speech_balloon:](#descripción-general-del-proyecto)

- [Diagrama entidad relación :computer:](#diagrama-entidad-relación) 

- [Funcionamiento :arrow_forward:](#funcionamiento) 

- [Endpoints :end:](#endpoints) 

- [Recursos alternativos y fuentes :art:](#recursos-alternativos-y-fuentes)  

#

### Descripción general del proyecto

Propuesto el proyecto de generar una aplicación web para la gestión de una compañía médica, el presente repositorio supone la sección backend del mismo. Esta sección habrá de desarrollarse con un esquema modelo vista controllador, generando una API funcional con la que operar un CRUD sobre diversas tablas.

### Diagrama entidad relación

<p align="center">
<img src="https://i.ibb.co/C9QCjg6/diagrama-ER-antes-de-refactorizar.jpg"  width="800" height="400"></p>
En un principio tratamos de desarrollar la aplicación siguiendo el diagrama entidad relación mostrado arriba, con una tabla de usuarios a la que correspondería una relación uno a uno con una tabla de profesionales o pacientes según fuese pertinente.
<p align="center">
<img src="https://i.ibb.co/xDxnW9c/diagrama-ER.jpg"  width="800" height="400"></p>
Pero tras una refactorización, el diagrama entidad relación terminó por tomar esta forma.

### Funcionamiento

A través de las tecnologías Sequelize y MySQL, se genera una base de datos mediante un proceso de migration y seed de los modelos de sus tablas.

Se levanta el servidor de la aplicación a través de las tecnologías Node.JS y Express.

Siguiendo un esquema modelo vista controlador, la aplicación enruta las peticiones que puedan llegar al servidor, para interactuar con las diferentes funciones que contienen los controladores.

### Endpoints

**Traer todos los pacientes:** GET, http://localhost:5000/pacientes

**Generar nuevo paciente:** POST, http://localhost:5000/pacientes

**Eliminar paciente de la base de datos:** DELETE, http://localhost:5000/pacientes/${pacienteId}

**Modificar paciente:** PUT, http://localhost:5000/pacientes

**Traer todos los profesionales:** GET, http://localhost:5000/profesionales

**Generar nuevo profesional:** POST, http://localhost:5000/profesionales

**Eliminar todos los médicos de la base de datos:** DELETE, http://localhost:5000/profesionales/medics

**Eliminar profesional de la base de datos:** DELETE, http://localhost:5000/profesionales/${profesionalId}

**Modificar profesional:** PUT, http://localhost:5000/profesionales

**Traer polizas según paciente:** GET, http://localhost:5000/polizas/${pacienteID}

**Generar nueva poliza:** POST, http://localhost:5000/polizas

**Eliminar poliza:** DELETE, http://localhost:5000/polizas/${polizaId}

**Eliminar todas las polizas asociadas a un paciente:** DELETE, http://localhost:5000/polizas/${pacienteId}

**Modificar poliza:** PUT, http://localhost:5000/polizas`

### Recursos alternativos y fuentes

https://tutorialmarkdown.com/emojis

https://badges.pages.dev/

https://imgbb.com/
