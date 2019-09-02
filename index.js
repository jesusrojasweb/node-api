const express = require('express'); // importa express
const app = express(); // se crea la app

const {config} = require('./config/index');


/* Primera ruta */

/* @brief Para crear la ruta se le agrega el metodo que se quire utilizar a la app
 * .get .post .put .delet
 * Luego la ruta '/' y una funcion que tiene el objetos
 * @param req es el request de la funcion
 * @param res res el response de la funcion
 */
app.get('/', function(req,res){
    res.send('hello world') //se responde
})


/* @brief Se llama al metodo listen que tiene dos parametros
 * @param config.port el prueto
 * @param function es un callback
 */
app.listen(config.port, function(){
    console.log(`Listening http://localhost:${config.port}`)
});