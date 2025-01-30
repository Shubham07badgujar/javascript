// const app = require('./app')
// console.log('hello');
// console.log(app);
// console.log(app.x);

// console.log(app.z());

const arr = [1,2,3,4,5,6,7,8,9];
arr.filter((item) => {
    console.log(item);
    
})
const result = arr.filter((item) => {
    // return item===3
    return item>3
    
});
console.log(result);
