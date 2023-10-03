# Status200 Red social - Backend
### Objetivo
Este proyecto consiste en el desarrollo de una aplicación móvil destinada a la comunidad de desarrolladores de Software. Dada la constante necesidad de buscar ayuda de código o errores en Google, y el tiempo que permanece una persona sumergida en las redes sociales. He decidido combinar ambas carencias.

Se trata de una red social enfocada para el mundo de los desarrolladores donde los usuarios pueden realizar publicaciones de errores o dudas que tengan en el día a día. Estas publicaciones podrán aportar imágenes o solo texto y dispondrán de un apartado de comentarios donde los demás usuarios podrán interactuar entre si acerca del tema planteado. Además, cualquier usuario podrá publicar tips o ayudas generales de buenas practicas o novedades de este mundo tecnológico.
### Tecnologías
Para la parte del back se ha usado como lenguaje de desarrollo Node.js. Aunque para crear y montar el servidor uso de **Express.**

Las librerías o paquetes más importantes usadas en el desarrollo son:
* **Bcryptjs:** Encriptar las contraseñas.
* **Cloudinary:** Integración de la App con Cloudinary para la gestión de archivos digitales
* **Express-fileupload:** Subida de archivos.
* **JsonWebToken:** nos permite autenticarnos con el servidor mediante Tokens de una forma simple y segura.
* **Mongoose:** Nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones, construcción de consultas, middlewares o estructuras de datos con Schema.
* **Mongoose-paginate-v2:** librería de paginación
### Instalación
1. Navegar a la carpeta raíz del proyecto.
2. Ejecutar el comando **npm insatall** o **npm i**.
3. Iniciar el servidor con el comando **npm run dev**.
