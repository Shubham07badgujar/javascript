const { MongoClient } = require("mongodb");
// const MongoClient = require('mongodb').MongoClient;  //both are same
const url = "mongodb://127.0.0.1";
const client = new MongoClient(url);
const dataBase = "e-comm";

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(dataBase);
  return db.collection("product");
//   let response = await collection.find({}).toArray();
//   console.log(response);
}


// dbConnect().then((resp)=>{
//    resp.find().toArray().then((data)=>{
//     console.warn(data);
//    })
    
// })


// console.warn(dbConnect());

const main = async () =>{
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data); 
}
main();