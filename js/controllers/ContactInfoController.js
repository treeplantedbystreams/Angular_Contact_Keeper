
app.controller('ContactInfo', ['$scope','$routeParams','$location','contacts',function($scope, $routeParams, $location, contacts) {
    $scope.post = contacts.posts[$routeParams.id];
    $scope.post = contacts.posts.filter(function(a) {
      return (a.id == $routeParams.id);
    })[0];

    
  }]);
