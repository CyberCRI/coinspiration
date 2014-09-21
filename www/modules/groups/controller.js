angular.module('coin.home')
    .controller('GroupCtrl',function(challenges, $ionicModal, $scope){
        var self = this;
        this.challenges = challenges.data;
        this.getItemHeight = function(item, index) {
            return (index % 2) === 0 ? 50 : 60;
        };
        $ionicModal.fromTemplateUrl('action-modal.tpl.html',{
            scope : $scope,
            animation : 'slide-in-up'
        }).then(function(modal){
            self.modal = modal;
            self.popup = function(){
                self.query.title = "";
                modal.show();
            }
        });

        $scope.$on('$destroy', function() {
            self.modal.remove();
        });
    });