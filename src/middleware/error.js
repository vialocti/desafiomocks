import ErrorEnum from "../services/errors/error.enum.js"

export const errorhandler =(error, req,res,next)=>{
    console.log(error.cause)
    switch(error.code){
        case ErrorEnum.INVALID_TYPE_ERROR:
            return res.status(400).send({error:error.name})

        case ErrorEnum.INVALID_NUMERIC:
            return res.status(400).send({error:error.name})
        
        default:
            return res.status(400).send({error:'error desconocido'})
    }
    
}