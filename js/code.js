var app = angular.module('market', ['ui.router']);

app.controller('login', function ($scope, $http) {
    $http.get("data.json")
        .success(function (data) {
            $scope.data = data;
            var datas = data;
        })
    .error(function (err) {
        var datas = err;
        console.log(datas);
    });

    $scope.homes = "login";

    $scope.password = function (pass) {
        if($scope.data.password == pass){
            $scope.homes = "home";
            console.log("Sí");
            return "home";
        }

    }
    $scope.go = function(state) {
        $state.go(state);
        console.log("entro");
    }
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
        });
});