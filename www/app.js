angular.module('coinspiration',[
    'ionic',
    'coin.auth',
    'restangular',
    'pasvaz.bindonce',
    'coin.challenges',
    'coin.home'
]).config(function(Config,RestangularProvider){
    RestangularProvider.setBaseUrl(Config.apiUrl);
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
});
