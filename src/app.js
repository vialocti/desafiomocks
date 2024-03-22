import express from 'express'
import productsRoutes from './routes/products.routes.js'
import { errorhandler } from './middleware/error.js'
import { addLogger } from './utils/loggers.js'

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(addLogger)

app.use('/loggerTest',(req,res)=>{

    req.logger.debug('Muestra de aviso de Debug')
    req.logger.http('muestra aviso de Http')
    req.logger.info('Muestra aviso Info')
    req.logger.warning('aviso de warning')
    req.logger.error('Aviso de Error')
    req.logger.fatal('aviso de  Fatal message')

    res.send({message:'endPoint PruebaLogger'})
})
app.use('/api/products', productsRoutes)
app.use(errorhandler)
app.listen(PORT, ()=>{
    console.log('Running')
})