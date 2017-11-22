app.controller("timeCtrl", function ($scope, ) {
    
            function timeConvert(hr, min) {
                this.hr = hr;
                this.min = min;
            }
        
            $scope.timeConvert = [];
            $http.get("movie.json").then(function mySuccess(response) {
                $scope.movies=response.data;
            }, function myError(response) {
                alert("error" + JSON.stringify(response.status));
              })
    
            });