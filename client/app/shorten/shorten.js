angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
    Links.postLinks($scope.link)
      .then(function () {
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
