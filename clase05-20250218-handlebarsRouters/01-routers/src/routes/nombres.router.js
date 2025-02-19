// const Router=require("express").Router
const {Router}=require("express")

const router=Router()


let nombres=["Mariana", "Laura", "Romina"]

router.get("/", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombres});
})

router.get("/:pos", (req, res)=>{
    let {pos} = req.params
    pos=Number(pos)
    if(isNaN(pos)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id debe ser numérico`})
    }

    // validaciones
    if(nombres.length==0){
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({error:`No existen nombres en DB`})
    }

    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`La posicion debe ser un número entre 1 y ${nombres.length}`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombre:nombres[pos-1]});
})

router.get("/:pos/saludo", (req, res)=>{
    let {pos} = req.params
    pos=Number(pos)
    if(isNaN(pos)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id debe ser numérico`})
    }

    // validaciones
    if(nombres.length==0){
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({error:`No existen nombres en DB`})
    }

    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`La posicion debe ser un número entre 1 y ${nombres.length}`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({saludo:`Hola ${nombres[pos-1]}`});
})

router.post("/", (req, res)=>{
    let {nombre}=req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`nombre es requerido`})
    }

    // validaciones
    nombres.push(nombre)

    res.setHeader('Content-Type','application/json');
    return res.status(201).json({nombres});
})

router.put("/:pos", (req, res)=>{
    let {pos} = req.params
    pos=Number(pos)
    if(isNaN(pos)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id debe ser numérico`})
    }

    // validaciones
    if(nombres.length==0){
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({error:`No existen nombres en DB`})
    }

    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`La posicion debe ser un número entre 1 y ${nombres.length}`})
    }

    let {nombre}=req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Nombre es requerido`})
    }

    let nombreAnterior=nombres[pos-1]
    nombres[pos-1]=nombre


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({
        nombreAnterior, 
        nuevoNombre: nombre,
        nombres
    });
})

router.delete("/:pos", (req, res)=>{
    let {pos} = req.params
    pos=Number(pos)
    if(isNaN(pos)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id debe ser numérico`})
    }

    // validaciones
    if(nombres.length==0){
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({error:`No existen nombres en DB`})
    }

    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`La posicion debe ser un número entre 1 y ${nombres.length}`})
    }

    let nombreEliminado=nombres[pos-1]
    nombres.splice(pos-1,1)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({
        nombreEliminado, 
        nombres
    });
})



module.exports=router