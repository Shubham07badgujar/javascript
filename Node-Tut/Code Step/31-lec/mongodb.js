const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1";
const client = new MongoClient(url);
const dataBase = "e-comm";

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(dataBase);
  return db.collection("product");
}

module.exports = dbConnect;

