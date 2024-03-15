import express from 'express'
import productsRoutes from './routes/products.routes.js'
import { errorhandler } from './middleware/error.js'

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/products', productsRoutes)
app.use(errorhandler)
app.listen(PORT, ()=>{
    console.log('Running')
})