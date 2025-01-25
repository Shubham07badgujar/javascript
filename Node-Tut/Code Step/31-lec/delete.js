const dbConnect = require("./mongodb");

const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteOne({name:'note 5s'});
  console.warn(result);
  
};

deleteData();
