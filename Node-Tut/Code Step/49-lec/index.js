const express = require("express");
const con = require("./config")
const app = express();

app.get("/", (req, resp) => {
    con.query("select * from users", (err, result) => {
        if (err) { resp.send("error"); }
        else {resp.send(result);}
    })
});

app.post("/",(req, resp)=>{
    const data = {
        user_id:10,
        user_name:'shubammmm'
    };
    con.query("insert into users SET ?", data, (error, result, fields)=>{
        if(error) error;
        resp.send(result)
    })
})

app.listen(3000);