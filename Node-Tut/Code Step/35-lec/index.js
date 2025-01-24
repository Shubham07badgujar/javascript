const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;  //both are same
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url); 
const dataBase = 'e-comm';

async function getData(){
    let result = await client.connect();
    let db = result.db(dataBase);
    let collection = db.collection('product');
    let response = await collection.find({}).toArray();
    console.log(response);
    
}

getData();