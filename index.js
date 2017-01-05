var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var profileCtrl = require('./controllers/profileController.js');
var userCtrl = require('./controllers/userCtrl.js');
var config = require('./config.js');

var corsOption = {
  origin: 'http://localhost:3000'
};

var app = express();
app.use(bodyParser.json());
app.use(cors(corsOption));
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));


app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);





app.listen(3000, function(){
  console.log("listening on port 3000");
});
