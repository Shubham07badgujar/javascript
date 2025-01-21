// Fundamentals of javascript
// arrays, objects, functions, loops, conditionals, etc.
// Functions returns
// async js coding
// foreach map filter reduce find indexof


var arr = [1,2,3,4,5,6];

// const newArr = arr.map(function(val){
//     return 13;
// })
// console.log(newArr);


var newArr1= arr.filter(function(val){
    if(val >3) {return true;}
    else return false;
  })

  console.log(newArr1);
  