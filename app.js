// Code goes here

var app = angular.module("movieApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "actors/actor.html"
        
    })
    .when("/movie", {
        templateUrl: "movie/movie.html"
    })
    
 
    });    
