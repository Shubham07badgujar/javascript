// Call stack
// Node API
// CallBack Queue
// Example
// Interviw Question

console.log("Starting uo...");
setTimeout(() => {
    console.log("2 Second log");
    
}, 2000);

setTimeout(()=>{
    console.log("0 second log");
    
},0);
console.log("Finishing up ..");

