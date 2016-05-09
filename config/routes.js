var async = require('async')
	, mongoose = require('mongoose')
	, dataModel = mongoose.model('dataModel');

module.exports = function (app) {

  // upload routes

  var data = require('../app/controller/data');

  app.get('/getallscrapingdata', data.getallscrapingdata);
  app.get('/getDataForInterview', data.getDataForInterview);
  app.get('/stackoverflow', data.stackoverflow);
}