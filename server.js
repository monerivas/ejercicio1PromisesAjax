var express= require('express');
var path = require('path');
var app = express();

app.use('/data', express.static(path.join(__dirname, '/data')));
app.use('/static', express.static(path.join(__dirname, '/assets')));
app.use('/static', express.static(path.join(__dirname, '/node_modules')));

//Esta es sitaxis de ES5
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

//Esta es sitaxis de ES6
/*Esta es sitaxis de ESapp.get('/',(req.res) =>{
    res.sendFile(__dirname + '/index.html');
});*/

app.listen(8080);

