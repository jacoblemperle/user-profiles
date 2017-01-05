var users = require('../models/user.js');

module.exports = {
  login: function(req, res, next){
    let flag = false;
    users.forEach(function(user){
      if(user.name == req.body.user.name && user.password == req.body.user.password){
        flag = true;
        req.session.currentUser = user;
      }
    });
    if (flag) {
      console.log('here');
      res.send({userFound: true});
    }
    else{
      console.log('Invalid log-in');
      res.send({userFound: false});
    }
  }
};
