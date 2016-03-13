"use strict";

MusicHistory.controller("SongDetailCtrl",
[
  "$scope",
  "$routeParams",
  "$http",
  "$location",
  "songFactory",

  ($scope, $routeParams, $http, $location, songFactory) => {

    // Default properties for bound variables
    $scope.songs = [];
    $scope.selectedSong = {};

    // Invoke the promise that reads from Firebase
    songFactory().then(

      // Handle resolve() from the promise
      songCollection => {
        Object.keys(songCollection).forEach(key => {
          songCollection[key].id = key;
          $scope.songs.push(songCollection[key]);
        });

        $scope.selectedSong = $scope.songs.filter(song => song.id === $routeParams.songId)[0];
      },

      // Handle reject() from the promise
      err => console.log(err)
    );

    /*
      This function is bound to an ng-click directive
      on the button in the view
    */
    $scope.deleteSong = () => $http
        .delete(`https://nss-demo-instructor.firebaseio.com/songs/${$routeParams.songId}.json`)
        .then(() => $location.url("/"));
  }
]);
