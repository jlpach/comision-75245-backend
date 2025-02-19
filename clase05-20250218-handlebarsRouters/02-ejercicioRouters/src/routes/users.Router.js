const UsersManager = require('../dao/UsersManager.js');

const Router=require('express').Router;
const router=Router()

router.get('/',async(req,res)=>{

    try {
        let users=await UsersManager.getUsers()
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({users})
        
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})
    }
})

router.post("/", async(req, res)=>{

    // logica del post... 
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload:"user created"});
})


module.exports=router