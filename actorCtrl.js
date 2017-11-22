
app.controller("actorCtrl", function($scope, $http) {
    
    function Actor(firstName, lastName, img, imdbURL) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.img = img;
        this.imdbURL = imdbURL;
    }  
    $http.get("actor.json").then(function mySuccess(response) {
          $scope.actors=response.data;
      }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
      })
    $scope.order = function() {
        $scope.orderProp = "first";
    }  
  });