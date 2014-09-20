angular.module('coin.home',[]).config(function($stateProvider){
    $stateProvider.state('home',{
        "url" : "/home",
        "controller" : "home as HomeCtrl",
        "templateUrl" : "modules/home/templates/home.tpl.html",
    })
})