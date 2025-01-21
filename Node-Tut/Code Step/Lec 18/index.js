// what is expressjs
// install Express
// Make Example with expressjs

const express = require('express');

const app = express;

app.get(' ',(req,res)=>{
    console.log('hello , THis is home page');
    
});

app.get('./about',(req,res)=>{
    console.log('hello , THis is home page');
    
});


app.get('./help',(req,res)=>{
    console.log('hello , THis is home page');
    
});

app.listen(3000);