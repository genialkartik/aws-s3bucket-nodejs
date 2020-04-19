var express = require('express');
var rtr = express.Router();
var Test = require('../api/test.js');


// User's Blog List
const test = new Test();

rtr.get('/', function(req, res){
	res.render('test',{
		tag: 'get',
		temp: '',
		//dlist: datalist
		dlist: ''
	});
});

rtr.get('/test', function(req, res){
	test.test2(function(datalist){
		res.render('test',{
			tag: 'get',
			temp: '',
			dlist: datalist
			//dlist: ''
		});
	});
});

rtr.post('/deleteFile', function(req, res){
	test.deleteFile('filename.ext');  // ex: example.png
	res.send("File deleted Successfully");
});


rtr.post('/uploadpic', function(req, res){
	if(req.files){
		var file = req.files.profile;
		test.test(file);
	res.render('test',{
		tag: 'post',
		temp: 'ex',
	});
}
} );

module.exports = rtr;
