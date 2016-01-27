var mongoose = require('mongoose')
	, http = require('http')
	, fs = require('fs')
	, uploadModel = mongoose.model('uploadModel');

exports.newUpload = function(req, res)
{
  	uploadModel.find().exec(function(err, upload){
  		if(err)
  		{
  			console.log(err)
  			
  		}
  		else
  		{
  			
  		}
  	})
}