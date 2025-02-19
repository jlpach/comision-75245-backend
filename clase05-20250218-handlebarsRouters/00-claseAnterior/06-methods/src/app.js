const express=require('express');
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

let nombres=["Mariana", "Laura", "Romina"]

app.get("/api/nombres", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombres});
})

app.get("/api/nombres/:pos", (req, res)=>{
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

app.post("/api/nombres", (req, res)=>{
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

app.put("/api/nombres/:pos", (req, res)=>{
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

app.delete("/api/nombres/:pos", (req, res)=>{
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


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
