app.controller('resumeController', ['$scope', '$http', '$resource', function($scope, $http, $resource) {
  // create an object so that the form ng-model can push directly to this
  $scope.employer = {};

  // create a resource
  var Resume = $resource('/api/resume/:id');

  // show all employers from api
  Resume.query(function(results) {
    $scope.employers = results;
  });

  // create a new employer
  $scope.createEmployer = function() {
    $http.post('/api/resume', $scope.employer).then(function(response) {
      // push response to the client wihtout page reload
      $scope.employers.push(response.data);
      // clear out form
      $scope.employer = {};

    }, function(xhr) {
      console.log('failure, y u no success?');
      console.log(xhr);
    });
  };

  // remove employer
  $scope.removeEmployer = function(employer) {
    Resume.remove({id: employer._id}, function() {
      // in the callback remove employer without page reload
      var index = $scope.employers.indexOf(employer);
      if (index > -1) {
        $scope.employers.splice(index, 1);
      }
    });
  };


}]);
