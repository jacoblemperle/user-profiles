angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      console.log(user);
      return $http({
        method: 'POST',
        url: '/api/login',
        data: {user: user}
      });
    };

    this.getFriends = function() {
      console.log('doing it');
    	return $http ({
        method: 'GET',
        url: '/api/profiles'
      }).then(function(response){
        console.log(response.data);
        return response.data;
      });
    };

});
