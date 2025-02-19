const format=(req, res, next)=>{
    if(req.body.nombre){
        req.body.nombre=req.body.nombre.toUpperCase()
    }

    req.body.codigo="9999"
    req.body.codigo2="ABC9999"

    next()
}

module.exports={format}