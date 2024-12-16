// # console.log( 2 > 1);
// # console.log( 2 >= 1);
// # console.log( 2 < 1);
// # console.log( 2 <= 1);
// # console.log( 2 == 1);
// # console.log( 2 != 1);

// console.log("shubham")

// console.log("2 " > 1);  //true

// console.log( null > 0);   //false
// console.log( null == 0);  //flase
// console.log( null >= 0);  //true

// console.log(undefined==0);
// console.log(undefined > 0);
// console.log(undefined < 0);

//strict change ===
// console.log("2"===2);


//primitive

// 7 Types : String , Number ,Boolean , null , undefined , Symbol , BigInt
// const score = 1000
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = true
// let useEmail;
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);   //output = false

// const bigNumber = 735320754n  //BigInt
// Referance Type(non primitive)

// Array, Objects, Function

// const heros = ['shaktiman ', "maagraj", "doga"]
// let myObj = {
//     name :"shubham",
//     age : 22,
// }

// const myFunction = function() {
//     console.log("Hello World");
    
// }
// console.log(typeof bigNumber);  //undefined


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
// Stack (Primitive) , Heap (Non-Primitive)
let myYouTubeName="shubham07Coder"
let anotherName = myYouTubeName
anotherName = "code with shubham"
console.log(anotherName);
console.log(myYouTubeName);

let userOne ={ 
    email : "shubham@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "shubham07a@google.com"

console.log(userOne.email);
console.log(userTwo.email);

