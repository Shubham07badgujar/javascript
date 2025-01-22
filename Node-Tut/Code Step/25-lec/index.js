const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("You are not allowed to access this page pleaso provide your age");
  }
  else if (req.query.age < 18) {
    res.send("You are not allowed to access this page");  
  }  
   else {
    next();
  }
};

app.use(reqFilter);
app.get("/", (req, res) => {
  res.send("Welcome to home page of Node-Tut");
});
app.get("/users", (req, res) => {
  res.send("Welcome to user page of Node-Tut");
});

app.listen(3000);
