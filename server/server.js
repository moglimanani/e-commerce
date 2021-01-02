const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
var app = express();
var con = require('./connection');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//parse application.json
app.use(bodyParser.json());

//middleware
app.use(function(req,res,next){
  console.log('intermediate req', req.body);
  next();
});

const port = process.env.port || 8000;

// app.get('/',(req,res)=>{
//   res.json({message:'Welcome'});
// });

app.listen(port, ()=>{
  console.log(`App running on port: ${port}`);
});

var routes = require('./appRoutes');

routes(app);