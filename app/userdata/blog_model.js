var mongoose = require("mongoose");
var schema = mongoose.Schema;

var data1 = new schema({
     Title: String,
	Descp : String,
	User : String
});

module.exports = mongoose.model('blogwalla',data1);