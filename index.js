const express =require('express');
const app = express()
const path=require('path')

app.use(express.json());

app.use(express.static('HTML_code'));

const apiRouter=express.Router();
app.use('/api', apiRouter);

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})


app.listen(4000,()=>{
    console.log("port connected");
})