var app = angular.module('market', ['ui.router']);

app.controller('login', function ($scope, $http) {
    $http.get("data.json")
        .success(function (data) {
            $scope.data = data;
        })
    .error(function (err) {
        console.log(err);
    });

    $scope.homes = "login";

    $scope.password = function (pass) {
        if($scope.data.password == pass){
            $scope.homes = "home";
            console.log("Sí");
            return "home";
        }

    }
});

app.controller('profile', function ($scope, $http) {
    $http.get("https://restcountries.eu/rest/v1/all")
        .success(function (countries) {
            $scope.countries = countries;
        });

});

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('login', {
            url: "/login",
            views:{
                "subview1":{
                    templateUrl: "html/login.html"
                }
            }
        })
        .state('home',{
           url: "/home",
            views:{
                "subview1":{
                    templateUrl: "html/sidebar.html"
                },
                "subview2":{
                    templateUrl: "html/home.html"
                }
            }
        })
        .state('orders', {
            url: "/myorders",
            views: {
                "subview1": {
                    templateUrl: "html/sidebar.html"
                },
                "subview2": {
                    templateUrl: "html/orders.html"
                }
            }
        })
        .state('favorites', {
            url: "/myfavorites",
            views: {
                "subview1": {
                    templateUrl: "html/sidebar.html"
                },
                "subview2": {
                    templateUrl: "html/favorites.html"
                }
            }
        })
        .state('profile', {
            url: "/myprofile",
            views: {
                "subview1": {
                    templateUrl: "html/sidebar.html"
                },
                "subview2": {
                    templateUrl: "html/profile.html"
                }
            }
        });
});