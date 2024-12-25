/*console.log('chaliye shuru karte hai'); 
// object created
let rectangle ={
    lengt : 1,
    breadth : 2,

    draw: function() {
        console.log('draw');
    }
};*/

//factory fuction
// function createRectangle(len ,bre){
//     return rectangle = {
//         length: len,
//         bredth: bre,
        
//     draw: function() {
//         console.log('draw');
//     }
//     };
// };
// 1
// let rectangleobj1=createRectangle(5,6);
// rectangleobj1.draw();
// let rectangleobj2=createRectangle(8,6);
// let rectangleobj3=createRectangle(3,6);

//constructor fuction ->Pascal Notation ->first letter of every word is capital;
//constructor function-> properties->intialize/Define
// function rectangle(){
//     this.length = len;
//     this.breadth =bre;
//     this.draw=function(){
//         console.log('Drawing ');
//     }
// }

// let rectangleobject = new rectangle();

// rectangleobject.color = 'Yellow';
// console.log(rectangleobject);

// delete rectangleobject.color;
// console.log(rectangleobject);

// let Rectangle = new Function('length', 'breadth' ,
//     `this.length = length;
//     this.breadth = breadth;
//     this.draw=function(){
//     console.log('Drawing');
// }`);
// //object Creation using rectangl1
// let rect= new Rectangle1(2,3);

// console.log(rect);
let rectangle={
    length:2,
    breadth:4
};

// //for-in
// for(let key in rectangle){
//     //keys are reflected through  key variable
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

// //for-of loop
// for(let key of Object.keys(rectangle) ){
//     console.log(key);
// }
// for(let key of Object.entries(rectangle) ){
//     console.log(key);
// }

// if('color' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('Absent');
// }

// OBJECT CLONING

// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest= {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

// //OBJECT CLONING #2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };
// let src2 = {value :23};
// let dest = Object.assign({},src,src2);
// console.log(dest);

// src.a++;
// console.log(dest);
//OBJECT CLONING #2
let src = {
    a:10,
    b:20,
    c:30
};
let src2 = {value :23};
let dest ={...src};;
console.log(dest);

src.a++;
console.log(dest);

