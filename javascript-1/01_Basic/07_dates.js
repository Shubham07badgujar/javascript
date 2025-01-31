let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


// let myCreateDate =  new Date(2024, 0, 24)
// let myCreateDate =  new Date(2024, 0, 24,5,4)

// console.log(myCreateDate.toDateString());


let myCreateDate = new Date("01-07-2024");
// console.log(myCreateDate.toLocaleDateString);

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

`${newDate.getDay()}  and the time `

newDate.toLocaleString('dafault', {
    weekday:"long",
    
})

