const express=require('express');
const { HeroesManager } = require('./dao/HeroesManager.js');
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/heroes", async(req, res)=>{
    let {name}=req.query
    let heroes=await HeroesManager.getHeroes()

    if(name){
        let heroe=heroes.find(h=>h.name.toLowerCase()==name.toLowerCase())
        if(!heroe){
            return res.send({
                error:`No existe ${name} en la DB`
            })
        }else{
            return res.send(heroe)
        }
    }

    res.send(heroes)
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
