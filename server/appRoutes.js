module.exports = function (app) {
  var userController = require('./controllers/users/userController'); 

  app.route('/user/adduser')
    .post(userController.addUser);
};