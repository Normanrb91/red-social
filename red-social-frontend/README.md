# Status200 Red social - Frontend
### Objetivo
Este proyecto consiste en el desarrollo de una aplicación móvil destinada a la comunidad de desarrolladores de Software. Dada la constante necesidad de buscar ayuda de código o errores en Google y el tiempo que permanece una persona sumergida en las redes sociales. He decidido combinar ambas carencias.

Se trata de una red social enfocada para el mundo de los desarrolladores donde los usuarios pueden realizar publicaciones de errores o dudas que tengan en el día a día. Estas publicaciones podrán aportar imágenes o solo texto y dispondrán de un apartado de comentarios donde los demás usuarios podrán interactuar entre si acerca del tema planteado. Además, cualquier usuario podrá publicar tips o ayudas generales de buenas practicas o novedades de este mundo tecnológico.
### Tecnologías
Para la parte del back se ha usado como lenguaje de desarrollo Node.js. Aunque para crear y montar el servidor uso de **Express.**

Las librerías o paquetes más importantes usadas en el desarrollo son:
* **React-native-async-storage:** Sistema de almacenamiento de clave-valor no cifrado, asíncrono, persistente que es global para la aplicación.
* **Axios:** API HTTP de cliente basada en XMLHttpRequest, funciona de forma asíncrona, permitiendo realizar llamadas API REST.
* **Redux/Redux-thunk:** Librería de código abierto para el manejo del estado de las aplicaciones. Redux-thunk es un middleware que le permite llamar a acciones que realizan peticiones asíncronas.
* **React-navigation/bottom-tabs:** Barra de pestañas en la parte inferior de la pantalla que le permite cambiar entre diferentes rutas.
* **Moment:** Para trabajar con fechas.
* **React-native-image-slider-box:** Realizar slider de imágenes
### Instalación
1. Navegar a la carpeta raíz del proyecto.
2. Ejecutar el comando **npm insatall** o **npm i**.
4. Para ejecutar la aplicación ya sea en un dispositivo físico o en un emulador escribir el comando:  

``` npx react-native run-android ```

### Cuenta de prueba
- **Usuario:** norman@gmail.com 
- **Contraseña:** 123456

### Sugerencias
El backend se encuentra desplegado en Heroku por lo tanto si desea levantar el proyecto de forma local deberá navegar al archivo:

```src/libs/constants/constans.js ```

La constante con nombre **BASE_URL** deberá cambiarla por la dirección local de su maquina * */api* *  
