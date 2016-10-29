var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;


app.use(bodyParser.json());

app.get('/',function(req,res){
	res.send('Root');
});

app.get('/todos',function(req,res){
	res.json(todos);
});


app.get('/todos/:id',function(req,res){
	var todoId = parseInt(req.params.id); 
	
	var isTodofound = false
	todos.forEach(function(t){
		if(t.id === todoId)
			res.json(t);
	})

	if(!isTodofound)	
		res.status(404).send();
});


app.post('/todos',function(req,res){
	var body = req.body;
	body.id = todoNextId;
	todoNextId += 1;
	todos.push(body);
	res.json(body);
		
});


app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT + ' !')
});