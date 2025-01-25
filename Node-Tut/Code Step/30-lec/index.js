const { MongoClient } = require("mongodb");
// const MongoClient = require('mongodb').MongoClient;  //both are same
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dataBase = "e-comm";

async function getData() {
  let result = await client.connect();
  let db = result.db(dataBase);
  let collection = db.collection("product");
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData();

// const { MongoClient } = require("mongodb");

// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
// const dataBase = "e-comm";

// async function getData() {
//   try {
//     // Establish connection
//     let result = await client.connect();
//     console.log("Connected successfully to MongoDB");

//     // Access database and collection
//     let db = result.db(dataBase);
//     let collection = db.collection("product");

//     // Fetch and log data
//     let response = await collection.find({}).toArray();
//     console.log(response);
//   } catch (error) {
//     console.error("Error during database operation:", error);
//   } finally {
//     // Close the connection
//     await client.close();
//     console.log("Connection closed");
//   }
// }

// getData();

// import { MongoClient } from "mongodb";
// const client = new MongoClient("mongodb://localhost:27017");
// await client.connect();
// const db= client.db("e-comm");
// const userCollection = db.collection("users");
// userCollection.insertOne({name: "John Doe", age: 30});
