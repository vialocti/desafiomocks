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
    req.logger.debug('pasamos por generacion de productos')//se ve en modo development
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
    try {
        if(products.length>0){
          
         res.send(products)
        }else{
            req.logger.info('No HAy Productos')
            res.send({message:'sinproductos'})
        }
    } catch (error) {
        req.logger.error('errr Fatal')
    }
   
}

export const traerProducto= (req,res)=>{
        const {pId} = req.params
        req.logger.debug(`el ${pId} es , pasamos por--`)
        
        try{
             if(products.length>0){
            
                const product = products.find(p => p.id===pId)
                if(product){
                res.sed(product)
                }else{
                    req.logger.info('No encontrado')
                    res.send({message:'no encontrado'})
                }
            }
             else{
                req.logger.warning('No habilitar pedidos sin productos')
                res.send({message:'sin productos'})
             }
        }catch(error){
            req.logger.fatal(error)
            res.status(400).send({message:'error grave'})
        }
        
}

export const AgregarProductoCarrito =(req, res)=>{
    
}