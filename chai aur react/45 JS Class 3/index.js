// console.log('hello jii');

// // let lastname='Badgujar';

// // let Firstname=new String("shubham");

// // let message=`this my 
// // first 
// // paragraph`;

// console.log(message);

// let date =new Date();

// console.log(date);
// let date2=new Date('june 20 1988 7:25 ');
// let date3=new Date(1998,4,56,8);
// console.log(date2);
// console.log(date3);

// let num=[1,2,3,4,5,6];
// console.log(num);
// console.log(num[4 ]);

//FOR IINSERTING AT ENDING 
// num.push(7);
// console.log(num);

//FOR INSERTION IN TH STARTING 
// num.unshift(8);
// console.log(num);

//FOR INSERTIN IN THE MIDDLE
// num.splice(3,0,'a','b');
// console.log(num);

// //SEARCHING IN THE ARRAYS
// console.log(num);

// console.log(num.indexOf(7));//if number IS NOT PRESENT THEN IT RETURN THE NEGATIVE INDEX THAT IS -1

// console.log(num.indexOf(4));

//IF WE WANT TO CHECK IF A NUMBER IS EXIST IN ARRAY 
// if(num.indexOf(4) !=-1)
//     console.log("present");

// console.log(num.includes(3));

// console.log(num.indexOf(4,6));//SECOND ARGUMENT IS USED TO START SEARCHING FROM THAT GIVEN INDEX (IF NUMBER IS NOT PRESENT IN THE ARRAY THEN IT RETURN -1)

// let courses=[
//     {no:1 , naam:'love'},
//     {no:2 , naam:'shubham'}
// ];
// console.log(courses);

// console.log(courses.indexOf({no:1,naam:'love'}));
// console.log(courses.includes({no:1,naam:'love'}));

// let course = courses.find(function(courses){
//     return courses.naam=='love';
// });

// console.log(course);

//EMPTY ARRAY
// let num=[1,2,3,4,5];
// let numbers=num;
// //num=[];
// num.length=0;

// //num.splice(0,number.length);
// console.log(num);
// console.log(numbers);

// //COMBINING &  ARRAYS 
// let first=[1,2,3];
// let second =[4,5,6];
// let combined=first.concat(second);
// console.log(combined);

// //SLICING of array
// let sliced = combined.slice(2,4);
// console.log(sliced);
//let sliced = comined.slice();
//let sliced = comined.slice(2);

//SPREAD OPERATOR

// let first =[1,2,3,4];
// let second=[5,6,7];
// let combined=[...first , ...second];
// let combined1=[...first ,'a', ...second,'b'];

// console.log(combined);
//copy kaise create karu
//let another = [...combined];

//ITERATING AN ARRAY
//let object=[1,2,3,4,5,6];
// for (let value of object) {
//     console.log(value);
    
// }
// object.forEach(number=>
//     console.log(number)
// );

// let numbers=[1,2,3,4,5];
// const joined=numbers.join(',');
// console.log(joined);

// let message ='this is my fiest message';
// let parts=message.split(' ');
// console.log(parts);
// let joined=parts.join('_');
// console.log(joined);


// let numbers=[1,2,3,4,8,7];
// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// let numbers=[1,2,-1,-3,-5,7];
// let filtered = numbers.filter(function(value){
//     return value>=0;
// });
// console.log(filtered);


//MAPPING ARRAYS:
// let numbers=[1,7,8,9,10];

// let items = numbers.map(value => 'student_no '+value);
// console.log(items);

//MAPPING WITH OBJECTS

let numbers=[1,-1,-2,-6,7,6,4];
let filtered = numbers.filter(function(value){
    return value>=0;
});
console.log(filtered);
let items=filtered.map(function(num){
    let obj={value:num};
    return obj;
});
console.log(items);