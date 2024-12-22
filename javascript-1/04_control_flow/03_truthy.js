const UserEmail = "Shubham@gmail.com"
if (UserEmail) {
    console.log("Got User Email");
    
}else{
    console.log("Don't have User Email");
    
}

/*
Falsy Value
false, 0, -0, BigInt 0n, "",null, undefined, NaN


/truthy values

"0", 'false', " ", [], {}, function(){}, 
*/

// if(UserEmail.length ===0){
//     console.log("Array is Empty");
    
// }
// const emptyObj = {}

// if(Object.keys(emptyObj).length){
//     console.log("Object is Empty");
    
// }

//NULLISH COALESCING OPERATOR (??):null undefined

let val1;
val1= 5 ?? 10
console.log(val1);

val1 = null ?? 10
console.log(val1);

val1 = undefined ?? 15
console.log(val1);

val1 = null ?? null ?? 20
console.log(val1);


//Ternary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(" Less than 80") : console.log("more than 80");


