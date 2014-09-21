angular.module('coin.challenges', [

]).config(function($stateProvider) {
    $stateProvider.state('challenge', {
        url: "/challenge",
        abstract: true,
        views : {
            home : {
                templateUrl: "modules/actionGroup/templates/action-group.tpl.html"
            }
        }
    }).state('challenge.discussion', {
        url: '/discussion',
        views: {
            'discussion': {
                templateUrl: 'modules/actionGroup/templates/discussion.tpl.html',
                controller: 'ctrl as DiscussionCtrl'
            }
        }
    }).state('challenge.action', {
        url: '/action',
        views: {
            'action': {
                templateUrl: 'modules/actionGroup/templates/action.tpl.html',
                controller: 'ctrl as ActionCtrl'
            }
        }
    }).state('challenge.members', {
        url: '/members',
        views: {
            'members': {
                templateUrl: 'modules/actionGroup/templates/members.tpl.html',
                controller: 'ctrl as MembersCtrl'
            }
        }
    });
});

