'use strict';
var sql = require('../../connection');
var config = require('../../config');


var User = function (user) {
  this.user_id = user.user_id;
  this.user_name = user.user_name;
  this.user_pass = user.user_pass;
  this.user_email = user.user_email;
  this.user_phone = user.user_phone;
  this.user_address = user.user_address;
  this.user_datetime = user.user_datetime;
  this.user_logged = user.user_logged;
};

User.addUser = function(newUser,result) { 
  sql.query(`INSERT INTO ${config.tables.userTable} set ? `, newUser, function (err, res) {
    if (err) {
      console.log(`error: ${err}`);
      result(err, null);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

User.isUserNameUnique = function(username, result) {
  sql.query(`select * from ${config.tables.userTable} where user_name = ?`,[username],function(err, res,fields){
    if(err){
      console.log('err',err);
      result(err, null);
    }
    console.log('res',result.length);
    result(null, res.length > 0);
  });
};

module.exports = User; 