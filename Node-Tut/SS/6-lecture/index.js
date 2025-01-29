const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');


app.get("/",(req, resp)=>{
    resp.render("index")
});

app.get("/profile/:username",(req, resp)=>{
   
    resp.send( `welcome ${req.params.username}`)
});

app.get("/author/:username/:age",(req, resp)=>{
   
    resp.send( req.params)
});
app.listen(3000, function(){
    console.log("is running");
    
})