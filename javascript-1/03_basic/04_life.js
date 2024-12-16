//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
}());
//chai()
// golobal scope ko pollution se problem hoti hainkahi bar isliye hum yaha pe aisa method user kr rahe hai



// ( ()=> {
//     console.log(`DB CONNECTES`);
    
// })

( (name)=> {
    console.log(`DB CONNECTES`);
    
})(shubhaam);