angular.module('coinspi',[
    'ionic',
    'ngMessages',
    'satellizer',
    'restangular',
    'coin.services',
    'coin.auth',
    'coin.challenges',
    'coin.home'
]).constant('Config',{
    "apiUrl" : 'http://localhost:5011'
}).config(function(Config,RestangularProvider,$authProvider,$stateProvider){
    RestangularProvider.setBaseUrl(Config.apiUrl);

    $stateProvider.state('home',{
        abstract : true,
        templateUrl : 'home.tpl.html',
        controller : 'HomeCtrl as ctrl',
        resolve : {
            me : function($http,Config){
                return $http.get(Config.apiUrl+'/me');
            }
        }
    });
    $authProvider.loginSignup = true;
    $authProvider.loginRedirect = '/';
    $authProvider.logoutRedirect = '/';
    $authProvider.signupRedirect = '/login';
    $authProvider.loginUrl = Config.apiUrl+'/auth/login';
    $authProvider.signupUrl = Config.apiUrl+'/auth/signup';
    $authProvider.loginRoute = '#/login';
    $authProvider.signupRoute = '/signup';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer'; // Local storage name prefix
    $authProvider.unlinkUrl = '/auth/unlink/';

    if(window.localStorage['satellizer_token']){
        window.location.href = 'http://localhost:8100/#/';
    }else{
        window.location.href ='http://localhost:8100/#/login'
    }

}).run(function($ionicPlatform,$window) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if($window.cordova && $window.cordova.plugins.Keyboard) {
            $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if($window.StatusBar) {
            $window.StatusBar.styleDefault();
        }
    });
}).controller('HomeCtrl',function(me,Me,$ionicPopover,$scope,$auth,$state){
    this.me = Me = me;
    var self = this;
    $ionicPopover.fromTemplateUrl('personnal-menu.tpl.html', {
        scope: $scope
    }).then(function(popover) {
        self.popover = popover;
    });
    this.popup = function(e){
        this.popover.show(e)
    };
    this.logout = function(e){
        console.log('eerer')
        self.popover.hide(e)
        $auth.logout();
        $state.go('auth.login');
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        self.popover.remove();
    });
});
