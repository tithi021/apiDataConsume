var async = require('async')
	, mongoose = require('mongoose')
	, uploadModel = mongoose.model('uploadModel');

module.exports = function (app) {

  // upload routes

  var upload = require('../app/controller/upload');

  app.get('/newUpload', upload.newUpload)
}