const express = require('express') //importamos express
const {proyectosMock} = require('../utils/mocks/proyectos') /* Se usa un archivo de Mocks. Los mocks son archivos de datos falsos*/

/* @brief es la función de la api de proyectos
 * Nos permite ser dinamicos y saber que aplicación va a consumir
 * nuestras rutas
 * @params app es una aplicación de express
 * 
 * 
 * 
 * 
 */

function proyectosApi(app){
    const router = express.Router(); // creamos el router
    
    /* Le pasamos a la aplicacion como parametro que
     * en la ruta de inicio /api/proyectos utilice nuestro router
     */
    app.use('/api/proyectos', router)
    
    /* @brief cuando utilizamos el metodo get en el home (/api/proyectos)
     * nos va a devolver los proyectos
     * @params req objeto request
     * @params res objeto response
     * @params next un callback
    */
    router.get('/', async function(req,res,next){
        try{ /*Como es codigo asincrono es muy importante hacer el try catch */
            const proyectos = await Promise.resolve(proyectosMock)
            
            //definimos el estatus y la respuesta json
            res.status(200).json({
                data: proyectos,
                message: 'proyectos listed'
            })
        } catch(err){ //recivimos el error
            next(err) //esta es la forma en como llamamos el error
        }
    })
}

module.exports = proyectosApi;