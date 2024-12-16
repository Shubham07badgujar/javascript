// Singleton
///object.create()
///Object literals


const mySym = Symbol("key1");
const JsUser = {
    name: "shubham",
    "full name" :" Shubham Badgujar",
    [mySym]: "myKey1",
    age :21,
    location :"Jalgaon",
    email:"Shubham@gcoej.ac.in",
    isLoggedIn : false,
    lastLoginDays:["Monday", "Saturday"],

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "shuabham@hmail.com";
// Object.freeze(JsUser)
// console.log(JsUser);
// JsUser.email = "shruti@gmail.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS users");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS users , ${this.name}`);
    
}
console.log(JsUser.greeting());
// console.log(JsUser.greeting);

console.log(JsUser.greetingTwo());


console.log("shubham");