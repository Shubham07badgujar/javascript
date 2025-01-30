const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");
console.log(publicPath);
// app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (req, res) => {
  const user = {
    name: "shubham badgujar",
    email: "shubham@gcoej.com",
    city: "jalgaon",
    skills:['php' ,'C++', 'C' , 'java' , 'python']
  }
  res.render("profile", { user });
});
app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/pageNotFound.html`);
});
app.listen(3000);


