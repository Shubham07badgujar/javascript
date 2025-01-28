const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/e-comm');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,

});

const main = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        namae: "max 132",
        price: 200, 
        brand: "maxx",
        category: "phone"
    });
    const result = await data.save();
    console.log(result);

}
main();