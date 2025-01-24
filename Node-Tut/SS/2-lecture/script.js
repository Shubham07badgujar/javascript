// Node.js Basics:
// Introduction to Node.js.
// INstalling Node.js and npm.

// node & npm -> package
// working with node and npm 
// npm init
// node basic usage


// Working with modules.
// File system operations.
// Inderstanding HTTP module



const fs = require('fs');
//writefile, append file, copyfile, rename

// fs.writeFile('hey.txt',"hey hello kaise woh", function(err){
//     if(err) console.log(err);
//     else console.log("Done");   
// })

// fs.appendFile('hey.txt',"me to thik hu", function(err){
//     if(err) console.log(err);
//     else console.log("Done");   
// });

// fs.rename('hey.txt',"helllo.txt", function(err){
//     if(err) console.log(err);
//     else console.log("Done");   
// })


// fs.copyFile('helllo.txt',"./copy/copy.txt", function(err){
//     if(err) console.log(err);
//     else console.log("Done");   
// })
// fs.unlink('helllo.txt',function(err){
//     if(err) console.error(err.message)
//     else console.log("Removed");
        
// })

// this code only remove empty directories
// fs.rmdir("./copy",function(err){
//     if(err) console.error(err);
//     else console.log("removed")
// })

//This code removed directory which contain the files
fs.rmdir("./copy",{recursive: true} ,function(err){
    if(err) console.error(err);
    else console.log("removed")
})