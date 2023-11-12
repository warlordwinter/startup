const express =require('express');
const app = express()
const path=require('path')

app.use(express.json());

app.use(express.static('HTML_code'));

const apiRouter=express.Router();
app.use('/api', apiRouter);

app.post("/login",(req,res)=>{
    console.log("We received the Data for Login")
    console.log(req.body)
    res.send("login")
})

app.post("/signup",(req,res)=>{
    res.send("signup")
})

app.listen(4000,()=>{
    console.log("port connected");
})