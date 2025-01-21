const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1> hello , THis is home page</h1>
    <a href="/about">Go to About</a>
    `);
});

app.get("/about", (req, res) => {
  res.send(`
    <input type="text" placeholder="User Name"/>
    <button>click me</button>
    `);
});

app.get("/help", (req, res) => {
  res.send({
    name: "Rahul",
    age: 23,
    name1: "shubham",
    age1: 24,
  });
});

app.listen(3000);