var profiles = require('../models/profile.js');


module.exports = {
  getFriends: function(req, res, next){
    console.log('doing it right now here in profilecontroller');
    var friendsArray = [];
    req.session.currentUser.friends.forEach(function(friend){
      profiles.forEach(function(profile){
        if(profile.name === friend){
          friendsArray.push(profile);
        }
      });
    });

    res.send({ currentUser: req.session.currentUser,
      friends: friendsArray
    });
    console.log(req.session.currentUser);
  }
};
