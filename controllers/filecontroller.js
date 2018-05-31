var multer = require('multer');

exports.GetFile = function(req, res, next) {
	res.render("fileform");
}

exports.PostFile = function(req, res, next) {
	res.send("File Size: " + req.file.size + " bytes");
}