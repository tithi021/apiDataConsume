var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
		
	Name: String,
	IsDirectory: Boolean,
	Parent: String,
	Content: Boolean

});

mongoose.model("dataModel", dataSchema);