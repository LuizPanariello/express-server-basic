var express    = require('express'); 
var app        = express(); 			
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//SERVERSTART
var port = process.env.PORT || 8080;
app.listen(port);

console.log("Server Running");