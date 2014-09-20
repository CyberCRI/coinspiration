angular.module('coin.challenges', [

]).config(function($stateProvider) {
    $stateProvider.state('challenge', {
        url: "/challenge",
        abstract: true,
        templateUrl: "modules/challenge/templates/challenge.tpl.html"
    }).state('challenge.discussion', {
        url: '/discussion',
        views: {
            'discussion': {
                templateUrl: 'modules/challenge/templates/discussion.tpl.html',
                controller: 'discussion as DiscussionCtrl'
            }
        }
    }).state('challenge.action', {
        url: '/action',
        views: {
            'action': {
                templateUrl: 'modules/challenge/templates/action.tpl.html',
                controller: 'action as ActionCtrl'
            }
        }
    }).state('challenge.members', {
        url: '/members',
        views: {
            'members': {
                templateUrl: 'modules/challenge/templates/members.tpl.html',
                controller: 'member as MembersCtrl'
            }
        }
    });
}).constant('Config',{
    "apiUrl" : 'localhost:5011'
});

