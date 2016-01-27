var express = require('express');

var app = express()
	, fs = require('fs')
	, path = require('path');

var env = process.env.NODE_ENV || 'production'
	, config = require('./config/config')[env]
	, mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/orbitax');


app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




//Initialize Models
var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path+'/'+file)
});

require('./config/routes')(app,config);

var server = app.listen(9000, function(){
	var host = server.address().address;
	var port = server.address().port;

});
