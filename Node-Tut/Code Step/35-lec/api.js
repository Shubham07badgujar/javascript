const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");

const { name } = require("ejs");
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  // console.log(data);
  resp.send(data);
});

app.post("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  // console.log(result);
  // resp.send({name: 'Ali', age: 30});
  resp.send(result);
});

app.put("/:name", async (req, resp) => {
  // console.log(req.body);
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: req.params.name },    
    { $set:req.body }
  );

  resp.send({ result: "Put Method" });
});

app.delete("/:id", async (req, resp) => {
    console.log(req.params.id); 
    let data = await dbConnect();
    let result = await data.deleteOne({ _id:new mongodb.ObjectId(req.params.id) });
    
    resp.send(result);
    });
app.listen(3000);
