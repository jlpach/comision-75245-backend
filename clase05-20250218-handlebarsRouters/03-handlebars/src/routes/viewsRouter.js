const { VillanosManager } = require('../dao/VillanosManager.js');

const Router=require('express').Router;
const router=Router()

router.get("/villanos", async(req, res)=>{
    let villanos=await VillanosManager.getVillanos()

    res.render("villanos", {villanos})
})

router.get('/villano',async(req,res)=>{
    let villanos=await VillanosManager.getVillanos()

    let numero=Math.floor(Math.random()*(20)+0)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    
    let villano=villanos[numero]

    res.render("villano", {
        name:villano.name, 
        alias:villano.alias,
        villano
    })
})


module.exports=router