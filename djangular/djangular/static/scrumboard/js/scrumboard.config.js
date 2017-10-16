(function(){
    'use strict';

    angular.module('scrumboard.demo')
    .config(['$routeProvider', config])
    .run(['$http', run]);

    function config($routeProvider){
        $routeProvider
            .when("/", {
                templateUrl: '/static/scrumboard/html/scrumboard.html',
                controller: 'ScrumBoardController'
            }
            ).when('/login',{
                templateUrl: '/static/scrumboard/html/login.html',
                controller:'LoginController'
            }).otherwise('/');

    }
    function run($http){
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';

    }

})();