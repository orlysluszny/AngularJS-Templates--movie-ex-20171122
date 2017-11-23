app.controller("movieCtrl", function ($scope, $http, convert, $log, Movie) {

    
        $scope.movies = [];
        $http.get("movie/movie.json").then(function mySuccess(response) {
                for (var i = 0; i < response.data.length; i++) {
                  $scope.movies.push(new Movie(response.data[i].name, response.data[i].time, 
                    response.data[i].director, response.data[i].actors, response.data[i].link))  
                }
            //$scope.movies=response.data;
        }, function myError(response) {
            alert("error" + JSON.stringify(response.status));
          })
         /* $log.log(convert.time(n));*/
        });