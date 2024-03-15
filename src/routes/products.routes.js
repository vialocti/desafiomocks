import {Router} from 'express'
import { addProduct, generarProducts, mostrarProductos, traerProducto } from '../controllers/products.controllers.js'

const products=[]


const productsRoutes = Router()
    productsRoutes.get('/mockingproducts',generarProducts )
    productsRoutes.get('/',mostrarProductos)
    productsRoutes.get('/:pId', traerProducto)

    productsRoutes.post('/',addProduct)


export default productsRoutes