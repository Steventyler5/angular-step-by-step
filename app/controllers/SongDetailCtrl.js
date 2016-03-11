"use strict";

MusicHistory.controller("SongDetailCtrl", 
  ["$scope", 
  "$routeParams", 
  "$http", 
  
  function($scope, $routeParams, $http) {

    $http.get("./data/songs.json")
      .success(function (songObject) {
        $scope.songs = songObject.songs;

        $scope.selectedSong = $scope.songs.filter(function (s) {
          return s.id === parseInt($routeParams.songId, 10);
        })[0];
      });
  }
]);























// function getSongList() {

//     // Return a promise for our async XHR
//     return $q(function(resolve, reject) {

//       // Perform some asynchronous operation, resolve or reject 
//       // the promise when appropriate.
//       $http.get('./data/songs.json')
//       .success(
//         function(objectFromJSONFile) {
//           resolve(objectFromJSONFile.songs);
//         },function(error) {
//           reject(error);
//         }
//       );

//     });
//   }