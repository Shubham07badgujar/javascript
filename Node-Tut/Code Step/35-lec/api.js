const express = require('express');
const dbConnect = require('./mongodb');
const { name } = require('ejs');
const app = express();

app.get('/',async (req, resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    resp.send(data)
    
});

app.post('/', async (req, resp)=>{
    let data = await dbConnect();
    // data = await data.insertOne({name: 'Ali', age: 30});
    // console.log(data);
    resp.send({name: 'Ali', age: 30});
    
});
app.listen(3000);