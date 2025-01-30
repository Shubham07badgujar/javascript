const http = require('http');
const data = require('./data')
http.createServer((request, response)=>{
    response.writeHead(200 ,{'content-Type':'application\json'});
    response.write(JSON.stringify(data));
    response.end()
}).listen(3000)