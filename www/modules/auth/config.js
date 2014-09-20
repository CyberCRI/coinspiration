angular.module('coin.auth',[
    'satellizer'
]).constant('LoginConf',{
    apiUrl : 'localhost:5000'
}).config(function($authProvider,LoginConf,$stateProvider){
    $authProvider.loginUrl = LoginConf.apiUrl+'/auth/login',
    $authProvider.signupUrl = LoginConf.apiUrl+'/auth/signup'

    $stateProvider.state('login',{
        url : '/login',
        templateUrl : 'module/auth/templates/login/tpl.html',
        controller : 'login as LoginCtrl'
    }).state('signup',{
        utl : '/signup',
        templateUrl : 'module/auth/templates/signup/tpl/html',
        controller : 'signup as SignupCtrl'
    })
});