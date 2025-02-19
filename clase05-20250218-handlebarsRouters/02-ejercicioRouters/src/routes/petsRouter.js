const PetsManager = require('../dao/PetsManager.js');

const Router=require('express').Router;
const router=Router()

router.get('/',async(req,res)=>{

    try {
        let pets=await PetsManager.getPets()
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({pets})
        
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})
    }
})

router.post("/", async(req, res)=>{

    // logica del create...
    // validaciones, etc...
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload: "mascota creada...!!!"});
})


module.exports=router