import winston from 'winston'
import dotenv from 'dotenv'

const custonLevelOptions ={
    levels:{
        fatal:0,
        error:1,
        warning:2,
        info:3,
        http:4,
        debug:5
    },
    colors:{
        fatal:'red',
        error:'magenta',
        warning:'yellow',
        info:'blue',
        http:'grey',
        debug:'white'
    }
}

dotenv.config()


const devLogger = winston.createLogger({
    levels:custonLevelOptions.levels,
    transports:[
        new winston.transports.Console({
            level:'debug',
            format:winston.format.combine(
              winston.format.colorize({colors:custonLevelOptions.colors}),
              winston.format.simple()
                       
        )})
    ]
})

const prodLogger = winston.createLogger({
    levels:custonLevelOptions.levels,
    transports:[
        new winston.transports.Console({
            level:'info',
            format:winston.format.combine(
                winston.format.colorize({colors:custonLevelOptions.colors}),
                winston.format.simple()
                         
          )
    
    }),
        new winston.transports.File({
            filename:'./errors.log', 
            level:'error',
            format:winston.format.simple()
        })
    ]

})

export const addLogger =(req,res,next)=>{
    switch(process.env.NODE_ENV){
        case 'development':
            req.logger = devLogger;
            break
        case 'production':
            req.logger=prodLogger;
            break
        default:
            throw new Error('envirment not exists')
    }
    
    
    next()
}