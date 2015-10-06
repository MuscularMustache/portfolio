app.controller('resumeController', ['$scope', '$http', function($scope, $http) {

  $http.get('/api/resume').success(function(data) {
    $scope.jobs = data;
  });

}]);
