// what is expressjs
// install Express
// Make Example with expressjs

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log("Data seebd by browser is: ", req.query.name); 
    
  res.send("hello , THis is home page");
});

app.get("/about", (req, res) => {
  res.send("hello , THis is about page");
});

app.get("/help", (req, res) => {
  res.send("hello , THis is help page");
});

app.listen(3000);
