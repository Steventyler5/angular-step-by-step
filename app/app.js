var app = angular.module("SongApp", ['firebase', 'ngRoute', 'angular.filter']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      when('/songs/new', {
        templateUrl: 'partials/song-form.html',
        controller: 'SongFormCtrl'
      }).
      when('/songs/:songId', {
        templateUrl: 'partials/song-view.html',
        controller: 'SongDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
