const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertOne({
    name: "note 5s",
    brand: "MI",
    price: 10000,
    category: "smartPhone",
  });
  console.log(result);
  
};

insert();
