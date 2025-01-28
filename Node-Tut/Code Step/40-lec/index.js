const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/e-comm');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,

});

const saveInDb = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "max 132",
        price: 200, 
        brand: "maxx",
        category: "phone"
    });
    const result = await data.save();
    console.log(result);

}

const updateInDb = async () =>{
    const Product = mongoose.model('products', productSchema) ;
    let data = await Product.updateOne(
        {name:"max 132"},{
            $set:{price:40000}
        }
    );
    console.log(data);
    
}

const deleteInDb = async () =>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:"m8"});
    console.log(data);
    
}

const findInDb = async () =>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({name:"Note pro"});
    console.log(data);
    
}

findInDb();