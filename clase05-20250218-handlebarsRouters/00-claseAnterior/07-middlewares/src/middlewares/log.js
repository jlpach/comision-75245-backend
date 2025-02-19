const log=(req, res, next)=>{
    console.log(`Log 1 - Fecha: ${new Date().toLocaleString()}  |  url: ${req.url}  |  método: ${req.method}`)

    next()
}
const log2=(req, res, next)=>{
    console.log(`Log 2 - Fecha: ${new Date().toLocaleString()}  |  url: ${req.url}  |  método: ${req.method}`)

    next()
}
const log3=(req, res, next)=>{
    console.log(`Log 3 - Fecha: ${new Date().toLocaleString()}  |  url: ${req.url}  |  método: ${req.method}`)

    next()
}

module.exports={log, log2, log3}
