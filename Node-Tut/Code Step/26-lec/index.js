const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const route = express.Router();

// app.use(reqFilter);
route.use(reqFilter);
app.get("/", (req, res) => {
  res.send("Welcome to home page of Node-Tut");
});
app.get("/users", (req, res) => {
  res.send("Welcome to user page of Node-Tut");
});

route.get("/about", (req, res) => {
  res.send("Welcome to about page of Node-Tut");
});

route.get("/contact", (req, res) => {
  res.send("Welcome to contact page of Node-Tut");
});

app.use("/", route);
app.listen(3000);
