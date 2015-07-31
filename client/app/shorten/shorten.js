angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
    console.log($scope.link.url)
    Links.postLinks($scope.link)
      .then(function () {
        $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
