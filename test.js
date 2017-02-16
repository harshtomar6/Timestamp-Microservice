var express = require('express')
var app = express()

var object = {"unix": null, "natural": null}

app.get('/', function(req, res){
	res.send(object)
})

app.get('/:params', function(req, res){
	var params = req.params.params

	if(parseInt(params)){
		var ts = Math.round((new Date(params*1000)).getTime()/1000)
		object.unix = ts
		object.natural = new Date(params*1000).toDateString()
	}
	
	res.send(object)
})

app.listen(3000, function(){
	console.log("Server is running at http://localhost:3000")
})