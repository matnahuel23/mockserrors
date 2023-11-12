const winston = require ('winston')

const logger = winston.createLogger({
    /**
     * A partir de winston.createLogger creamos nuestro logger con los trasportes que 
     * necesitamos, en este caso, definimos un transporte de consola para funcionar
     * sólo a partir del nivel http.
     * */
    transports: [
        new winston.transports.Console({ level: "http"})
    ]
})
    /**
     * Ahora, a partir de un middleware, vamos a colocar en el objeto req el logger,
     * aprovechamos además para hacer nuestro primer log.
    **/

    const addLogger = (req, res, next) => {
        req.logger = logger
        req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
        next()
    }

    module.exports = { addLogger }