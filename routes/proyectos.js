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
    
    /* @brief cuando utilizamos el metodo get del id del proyecto (/api/proyectos/id)
     * nos va a devolver el proyecto por id
     * @params req objeto request
     * @params res objeto response
     * @params next un callback
    */
    router.get('/:proyectoId', async function(req,res,next){
        try{ /*Como es codigo asincrono es muy importante hacer el try catch */
            const proyectos = await Promise.resolve(proyectosMock[0]) //en ves de devolver la coleccion devuelve el primer proyecto
            
            
            //definimos el estatus y la respuesta json
            res.status(200).json({
                data: proyectos,
                message: 'proyecto retrieved'
            })
        } catch(err){ //recivimos el error
            next(err) //esta es la forma en como llamamos el error
        }
    })
    
    /* @brief cuando utilizamos el metodo post en el home (/api/proyectos)
     * nos va a añadir un proyecto
     * @params req objeto request
     * @params res objeto response
     * @params next un callback
    */
    router.post('/', async function(req,res,next){
        try{ /*Como es codigo asincrono es muy importante hacer el try catch */
       
            const createProyectoId = await Promise.resolve(proyectosMock[0].id) // por ahora devuelve el id de la pelicula
            
            //definimos el estatus y la respuesta json
            res.status(201).json({
                data: createProyectoId,
                message: 'proyecto create'
            })
        } catch(err){ //recivimos el error
            next(err) //esta es la forma en como llamamos el error
        }
    })
    
    /* @brief cuando utilizamos el metodo put del proyecto (/api/proyectos/:id)
     * nos va a actualizar el proyecto
     * @params req objeto request
     * @params res objeto response
     * @params next un callback
    */
    router.put('/:proyectosId', async function(req,res,next){
        try{ /*Como es codigo asincrono es muy importante hacer el try catch */
            const updateProyectoId= await Promise.resolve(proyectosMock[0].id) //devuelve el id que actualizo
            
            //definimos el estatus y la respuesta json
            res.status(200).json({
                data: updateProyectoId,
                message: 'proyectos updated'
            })
        } catch(err){ //recivimos el error
            next(err) //esta es la forma en como llamamos el error
        }
    })
    
    /* @brief cuando utilizamos el metodo delete del proyecto (/api/proyectos/:id)
     * nos va a borrar el proyecto
     * @params req objeto request
     * @params res objeto response
     * @params next un callback
    */
    router.delete('/:proyectosId', async function(req,res,next){
        try{ /*Como es codigo asincrono es muy importante hacer el try catch */
            const deleteProyectoId= await Promise.resolve(proyectosMock[0].id) //devuelve el id que actualizo
            
            //definimos el estatus y la respuesta json
            res.status(200).json({
                data: deleteProyectoId,
                message: 'proyectos updated'
            })
        } catch(err){ //recivimos el error
            next(err) //esta es la forma en como llamamos el error
        }
    })
}

module.exports = proyectosApi;