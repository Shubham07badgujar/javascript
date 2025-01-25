const dbConnect = require('./mongodb');

const updateData = async () =>{
    let data = await dbConnect();
    let result = await data.updateOne({
        name:'note 5s'
    },{$set:{name:'redmi note 10 pro'}
    })
    console.warn(result);
    
}

updateData();