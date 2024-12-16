const user = {
    username : "shubham",
    price : 99,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
console.log(this);


// function chai() {
//     let username = "shubham"
//     console.log(this.username);// output undefined
    
// }
// chai()

// function chai =  () => {
//     let username = "shubham"
//     console.log(this);// output undefined
    
// }
// chai()

// const addTwo = (num1, num2)  => {  //explicite return
//     return num1 + num2
// }

// const addTwo = (num1, num2)  => num1 + num2 //implicite return 

// const addTwo = (num1, num2)  => num1 + num2 =>  ({username: "shubham"})

console.log(addTwo(3,4));

const myArray = [2,3,4,5,6]
//myArray.foreach()