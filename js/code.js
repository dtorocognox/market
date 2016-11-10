var app = angular.module('market', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    app.controller('login', function ($scope, $http) {
        $http.get('../data.json')
            .success(function (data) {
                console.log(data);
            });
    });


    $stateProvider
        .state('login', {
            url: "/login",
            views:{
                "subview1":{
                    templateUrl: "html/login.html"
                }
            }
        });
});