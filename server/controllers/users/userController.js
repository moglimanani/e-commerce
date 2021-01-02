'use strict';

var User = require('../../models/users/usersModel');

exports.addUser = function(req, res){
  var u1 = {...req.body};
  u1.user_datetime = new Date();

  var newUser = new User(u1);
  User.isUserNameUnique(u1.user_name, function(err, res1){
    if(err)
      res.send(err); 
    else if(res1) {
      res.status(400).send({error: true, message: `Already username exist for ${u1.user_name}`});
    }
    else if(!newUser){
      res.status(400).send({error: true, message: 'Please provide details'});
    }
    else {
      User.addUser(newUser, function(err1, user){
        if(err1)
          res.send(err1);
        else
          res.json(user);
      });
    }
  }); 
};