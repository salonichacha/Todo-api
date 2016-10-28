var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id:1,
	description: 'Meet mom for lunch',
	completed: false,
}, {
	id:2,
	description: 'Go to market',
	completed: false,
}, {
	id:3,
	description: 'Go to market',
	completed: true,
} ]

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

app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT + ' !')
});