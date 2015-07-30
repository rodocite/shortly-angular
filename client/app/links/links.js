angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks()
      .then(function(searchedLinks) {
        $scope.data.links = searchedLinks;
      })
      .catch(function(err) {
        console.error('We have a freaking error!!!!', err);
      });
  };

  $scope.getLinks();
});
