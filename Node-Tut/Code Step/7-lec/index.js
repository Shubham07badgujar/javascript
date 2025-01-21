const http = require('http');

http.createServer((req,resp) => {
    resp.write("hello this is shubham from node js");
    resp.end();
}).listen(4500);