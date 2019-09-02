require('dotenv');

const config = {
    dev: process.env.NODE_ENV !== 'production', // variable de configuaración del entorno
    port: process.env.PORT || 3000  // configuración del puerto donde se ejecutara el p
}

module.exports = {config}