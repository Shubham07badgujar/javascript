const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'This is a simple text file');

// fs.readFile(filePath,(err,item)=>{
//     console.log(item);

// })
// fs.readFile(filePath, 'utf8',(err,item)=>{
//     console.log(item);

// })

// fs.appendFile(filePath, "and file nameis apple.txt", (err) => {
//   if (!err) {
//     console.log("File is Updated");
//   }
// });

// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("File is rename")
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)