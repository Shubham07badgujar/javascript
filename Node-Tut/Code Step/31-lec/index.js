const dbConnect = require("./mongodb");
dbConnect().then((resp) => {
  resp
    .find({ name: "redmo note 10" })
    .toArray()
    .then((data) => {
      console.log(data);
    });
});
// const main = async () => {
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   console.warn(data);
// };
// main();

dbConnect().then((resp)=>{
   resp.find().toArray().then((data)=>{
    console.warn(data);
   })
    
})