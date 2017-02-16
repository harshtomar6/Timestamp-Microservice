//==GOOD OLD FORMS

/*var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function(req, res){
	res.end(req.body.str.split('').reverse().join(''))
})
app.listen(process.argv[2])*/

//==STYLUS

/*var express = require('express')
var app = express()

app.use(require('stylus').middleware(__dirname, '/public'))
app.use(express.static(process.argv[3]||path.join('main.styl', '/public')))
app.use(express.static(process.argv[3]||path.join('index.html', '/public')))

app.get('/main.css', function(req, res){

})
app.listen(process.argv[2])*/

//==Param pam pam

/*var express = require('express')
var app = express()
var crypto = require('crypto')

app.put('/message/:id', function(req, res){
	var id = req.params.id
	res.end(crypto.createHash('sha1').update(new Date().toDateString()+id).digest('hex'))
})
app.listen(process.argv[2])*/

//==Whats in Query

/*var express = require('express')
var app = express()

app.get('/search', function(req, res){
	var query = req.query
	res.send(query)
})
app.listen(process.argv[2])*/

//==JSON me

var fs = require('fs')
var express = require('express')
var app = express()

app.get('/books', function(req, res){
	var str
	fs.readFile(process.argv[3], function(error, data){
		if(error)
			console.log("An error occured")
		else{
			str = data.toString()
			res.json(JSON.parse(str))
		}

	})
	
})
app.listen(process.argv[2])