var port = 86,

express = require('express'),

app = express().use(express.static(__dirname + '/')),

http = require('http').Server(app);

 

app.use('/', function(req, res){

    res.sendFile(__dirname + '/signup.html');

});

 

http.listen(port, function(){

    console.log("Node server listening on port " + port);

});

 