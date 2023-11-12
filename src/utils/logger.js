const winston = require ('winston')

const customLevelOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug: 4,
    },
    colors: {
        fatal: 'red',
        error: 'orange',
        warning: 'yellow',
        info: 'blue',
        debug: 'white',
    }
}
const logger = winston.createLogger({
    /**
     * A partir de winston.createLogger creamos nuestro logger con los trasportes que 
     * necesitamos, en este caso, definimos un transporte de consola para funcionar
     * sólo a partir del nivel http.
     * */
    levels: customLevelOptions.levels, // Ahora los niveles se basarán en los definidos
    transports: [ 
        new winston.transports.Console({ 
            level: "info", // El nivel debe coincidir con nuestra nueva configuracion
            /**
             * El formato sólo definirá el que se muestren los mensajes de otra forma
             * además de colocar los colores que nos interesan
            **/
           format: winston.format.combine(
            winston.format.colorize({ colors: customLevelOptions.colors }),
            winston.format.simple()
           )
        }),
        new winston.transports.File({ 
            filename:'./errors.log', 
            level:'warning', // Esta vez no es "warn", sino "warning" según la nueva configuración
            format: winston.format.simple()
        })
    ]
})
const Logger = (req, res, next) => {
        logger.info(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
        next()
}

module.exports = { Logger }