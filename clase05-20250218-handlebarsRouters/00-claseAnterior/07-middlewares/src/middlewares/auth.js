const auth=(req, res, next)=>{
    let {user, password}=req.query

    if(user!="admin" || password!="CoderCoder123"){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`Credenciales incorrectas`})
    }

    next()
}

module.exports={auth}
