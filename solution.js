//
/*var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db){
	db.collection('parrots').find({
		age: {$gt: parseInt(process.argv[2])}
	}).toArray(function(err, data){
		console.log(data)
	})
	db.close()
})*/

//== Find Project

/*var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db){
	db.collection('parrots').find({
		age: {$gt: parseInt(process.argv[2])}
	},{
		name: 1,
		age: 1,
		_id: 0
	}).toArray(function(err, data){
		console.log(data)
	})
	db.close()
})*/

//==Insert

/*var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'

firstname = process.argv[2]
lastname = process.argv[3]

mongo.connect(url, function(err, db){
	var collection = db.collection('docs')

	collection.insert({
		firstName: firstname,
		lastName: lastname
	}, function(err, data){
		console.log(JSON.stringify(data.ops['0']))
		db.close()
	})
})*/

//==Update

var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

