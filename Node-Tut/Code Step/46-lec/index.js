const express = require('express');
const EventEmitter = require('events');
const app = express();

const event = new EventEmitter();

let count = 0;
event.on("countAPI", () =>{
    count++;
    console.log('API called');
})

app.get('/', (req, res) => {
    res.send('api called!');
    event.emit('countAPI' );
}   );  

app.get('/search', (req, res) => {
    res.send('search called!');
}   );

app.get('/profile', (req, res) => {
    res.send('profile called!');
}   );


app.listen(3000);