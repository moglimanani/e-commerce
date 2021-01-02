var mysql = require('mysql');
var config =require('./config');
console.log(1111,config);
var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.db
});

con.connect(function(err){
  if(err) throw err;
  console.log('Connected');
});

module.exports = con;