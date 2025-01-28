const mongoose = require("mongoose");

const main = async () => {
    await mongoose.connect("mongodb://127.0.0.1/e-comm");
    const productSchema = new mongoose.Schema({
        name: String,
        price:Number,
    });
const ProductsModel = mongoose.model('products', productSchema);
let data = new ProductsModel({ name: "m8", price:12345 });
let result = await data.save();
    console.log(result);
}

main();





















// mongoose.connect("mongodb://127.0.0.1/e-comm");
// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   brand: String,
//   category: String,
// });

// const main = async () => {
// const product = mongoose.model("products", productSchema);
//   let data = new product({
//     name: "Note pro",
//     price: 2000,
//     brand: "maxx",
//     category: "mobile",
//   });
//   let result = await data.save();
//   console.log(result);
// };

// main();
