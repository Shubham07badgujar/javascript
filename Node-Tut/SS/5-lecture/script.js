const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next){
    console.log("middle ware chala");
    next();
});



app.get('/',function(req,res){
    res.send('hello World');
});
// app.get('/profile',function(req,res){
//     res.send('Profile page');
// });
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('something break;')
})
app.listen(3000);