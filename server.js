const mongoose = require("mongoose");
const express = require('express')
const app =new express();
const PORT = 3000;

app.listen(PORT,()=>{
    console.log("Server Started");
})

app.get('/',((req,res)=>res.send("Up and Running")));

