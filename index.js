const express = require('express'); // importa express
const app = express(); // se crea la app

const {config} = require('./config/index');
const proyectosApi = require('./routes/proyectos') // importamos nuestras rutas

proyectosApi(app);


/* @brief Se llama al metodo listen que tiene dos parametros
 * @param config.port el prueto
 * @param function es un callback
 */
app.listen(config.port, function(){
    console.log(`Listening http://localhost:${config.port}`)
});