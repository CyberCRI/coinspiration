angular.module('coin.auth',[

]).config(function($stateProvider){
    $stateProvider.state('auth',{
        abstract : true,
        templateUrl : 'modules/auth/templates/auth.tpl.html'
    }).state('auth.login',{
        url : '/login',
        views : {
            auth : {
                templateUrl : 'modules/auth/templates/login.tpl.html',
                controller : 'LoginCtrl as ctrl'
            }
        }
    }).state('auth.signup',{
        url : '/signup',
        views : {
            auth : {
                templateUrl : 'modules/auth/templates/signup.tpl.html',
                controller : 'SignupCtrl as ctrl'
            }
        }
    })
});