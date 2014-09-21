angular.module('coin.home',[]).config(function($stateProvider){

    $stateProvider.state('home.groups',{
        "url" : "/",
        views : {
          home : {
              "controller" : "GroupCtrl as ctrl",
              "templateUrl" : "modules/groups/templates/groups.tpl.html"
          }
        },
        resolve : {
            challenges : function($http,Config){
                return $http.get(Config.apiUrl+'/challenges');
            }
        }
    })
});