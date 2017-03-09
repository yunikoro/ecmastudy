/**
 * 
 */

var fs = require('fs');
var multiparty = require('multiparty');

var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	console.log('file api');
	
	var form = new multiparty.Form();
	
	form.parse(req, function(err, fields, files) {
		console.log(files);
		fs.open(files.fieldNameHere[0].path, 'r', function(err, fd) {
			/*if(err.code === 'ENOENT') {
				console.log('does not exist');
				return;
			} else {
				throw err;
			}*/
			
			fs.open('./upload/' + files.fieldNameHere[0].originalFilename, 'w', function(err, res) {
				res = fd;
			})
		});
	});
	res.status(200).send('file');
});

module.exports = router;