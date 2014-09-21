angular.module('coin.auth').controller('LoginCtrl',function($auth,Me){
    this.user = {};
    this.signin = function(){
        this.signin = function(){
            $auth.login(this.user).then(function(me){
                Me.data = me
            }).catch(function(err){
                Me.data = null;
                console.log(err)
            })
        }
    }
}).controller('SignupCtrl',function($auth){
    this.user = {};
    this.signup = function(){
        $auth.signup(this.user)
    }
});