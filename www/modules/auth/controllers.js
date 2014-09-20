angular.module('coin.auth').controller('loginCtrl',function($auth){
    this.login = function(){
        this.user = {};
        this.login = function(){
            $auth.login(this.user).then(function(){

            }).catch(function(err){
                console.log(err)
            })
        }
    }
}).controller('signupCtrl',function($auth){
    this.user = {};
    this.signup = function(){
        $auth.signup(this.user)
    }
});