const http = require('http');

http.createServer((request, response)=>{
    response.writeHead(200,{'content-type':'application/JSON'});
    response.write({name:'shubham',mail:'shubham@.com'})
    response.end()
})