const express = require('express');
const bodyParser = require('body-parser');
const app= express();
const cors = require('cors');

const knex = require('knex');

app.use(bodyParser.json());
app.use(cors())

const db = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'yourUsername',
    password : 'yourPassword ',
    database : 'yourDatabaseName'
  }
});
//check knex docs for database syntaxes
app.post('/leaderlogin',(req,res) =>{
	db.select('name','password').from('leaders').where('name','=', req.body.name)
    .then(data =>{
    	if('password','=',req.body.password){
    		res.json("success")
    	}
    })
});

app.post('/addparticipants',(req,res) =>{
	const {name,team,event,contactnumber} = req.body;
    db('participants').returning('*').insert({
     	name:name,
     	team:team,
     	event:event,
     	contactnumber:contactnumber
     }).then(user =>{
     	res.json(user[0]);
    }).catch(err => res.status(400).json(err))
})


app.get('/event1',(req,res)=>{
db.select('*').from('participants').where('event','=','event1').then(data=>{
	res.json(data);
})
});

app.get('/event3',(req,res)=>{
db.select('*').from('participants').where('event','=','event3').then(data=>{
	res.json(data);
})
});

app.get('/event2',(req,res)=>{
db.select('*').from('participants').where('event','=','event2').then(data=>{
	res.json(data);
})
});

app.get('/event4',(req,res)=>{
db.select('*').from('participants').where('event','=','event4').then(data=>{
    res.json(data);
})
});

app.get('/',(req,res)=>{
	res.send('this is working');
})

app.get('/team1',(req,res)=>{
db.select('*').from('participants').where('team','=','team1').then(data=>{
	res.json(data);
})
});

app.get('/team2',(req,res)=>{
db.select('*').from('participants').where('team','=','team2').then(data=>{
	res.json(data);
})
});

app.get('/team3',(req,res)=>{
db.select('*').from('participants').where('team','=','team3').then(data=>{
	res.json(data);
})
});

