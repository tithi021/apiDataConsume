var mongoose = require('mongoose');

var uploadSchema = new mongoose.Schema({
		
	Name: String,
	IsDirectory: Boolean,
	Parent: String,
	Content: Boolean

});

mongoose.model("uploadModel", uploadSchema);