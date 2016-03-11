"use strict";

MusicHistory.controller("SongCtrl", [
    "$scope",
    "$http",
    "$http",

  function($scope, $http) {
    $scope.songSearchText = {name: "", artist: "", album: ""};
    $scope.query = "";

    $http.get("./data/songs.json")
      .success(function (songObject) {
        $scope.songs = songObject.songs;
      });

  }]
);










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