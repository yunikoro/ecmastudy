/**
 * 
 */

var fs = require('fs');
var multiparty = require('multiparty');

var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	console.log('file list api');
	
	var form = new multiparty.Form();
	
	form.parse(req, function(err, fields, files) {
		console.log(files);
		for(var i = 0; i < fields.kk.length; i++) {
			console.log(fields.kk[i]);
		}
		
	});
	res.status(200).send('file');
});

module.exports = router;