export const generateProductErrorInfo = product=>{
    return ` Una o mas propiedades icompletas o invalidas
            el titulo  necesita una cadena de caracteres y recibe ${typeof product.title}
            el codigo necesita una cadena de caracteres y recibe ${typeof product.isbn}
            el stock necesita ser numero mayor a 0 y recibe ${product.stock}
            el stock necesita ser numero y mayor a 0 y recibe ${product.price}

    `
}



export const generateErrorDatosNumericosProduct=(price,stock)=>{

    return ` el stock o el precio son incorrectos
            el valor de precio pasasdo es ${price}
            el valord del stock es ${stock}
        `
}




