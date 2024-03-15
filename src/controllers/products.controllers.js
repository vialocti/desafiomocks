import CustomErrors from "../services/errors/CustomErrors.js"
import ErrorEnum from "../services/errors/error.enum.js"
import { generateProductErrorInfo } from "../services/errors/info.js"
import { generateProduct } from "../utils/utils.mocks.js"

const products=[]
const carts=[]


export const generarProducts=(req,res)=>{
    for(let i=0;i<100;i++){
        products.push(generateProduct())
    }
    res.send({message:'Productos generados'})
}


export const addProduct =(req,res)=>{
   const {title,isbn,stock,price}=req.body
    console.log(title,isbn,stock,price)

    if(!title || !isbn || isNaN(price) || isNaN(stock)){
        CustomErrors.createError({
            name:'falla creacion Producto',
            cause:generateProductErrorInfo(req.body),
            message:'error creando producto',
            code:ErrorEnum.INVALID_TYPE_ERROR
        })
    }
    
    if(stock < 10 || price < 150){
        console.log(price,stock)
        CustomErrors.createError({
            name:'Error en datos de precio o stock',
            cause:generateErrorDatosNumericosProduct(price,stock),
            message:'error creando producto valores no admitidos en precio o stock',
            code:ErrorEnum.INVALID_NUMERIC
        })   
    }

    res.send({message:'Producto almacenado'})
}

export const mostrarProductos=(req,res)=>{
    res.send(products)
}

export const traerProducto= (req,res)=>{
    
}

export const AgregarProductoCarrito =(req, res)=>{
    
}