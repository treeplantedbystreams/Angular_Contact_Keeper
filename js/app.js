
var app = angular.module('ContactsApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/home', {
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  })
  .when('/contact/:id', {
    controller: 'ContactInfo',
    templateUrl: 'views/contactinfo.html'
  })
  .otherwise({
    redirectTo: '/home',
  });
});



