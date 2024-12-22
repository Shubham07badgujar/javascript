// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop value : ${i}`);
    
//     for (let j = 0; j < 10; j++) {
//         console.log(`Inner loop Value : ${j} Outer loop value : ${i}`);
        
//     }
    
// }
let myArray = ["flash", "batman", "superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
        
//     }
//     console.log(`Value of i is ${index}`)
    
// }
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
        
    }
    console.log(`Value of index is ${index}`)
    
}