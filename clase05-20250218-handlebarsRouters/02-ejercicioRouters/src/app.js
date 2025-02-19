const express=require('express');
const usersRouter=require("./routes/users.Router.js")
const petsRouter=require("./routes/petsRouter.js")

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/pets", petsRouter)
app.use("/api/users", usersRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
