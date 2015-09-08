app.controller('resumeController', ['$scope', '$http', function($scope, $http) {

  $http.get('data.json').success(function(data) {
    $scope.jobs = data;
  });

  // $scope.orderProp = 'age';

}]);
