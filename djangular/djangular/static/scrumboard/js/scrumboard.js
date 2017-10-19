
        (
            function(){
                'use strict';
                angular.module('scrumboard.demo', ['ngRoute'])
                    .controller('ScrumBoardController', ['$scope', '$http', 'Login', ScrumBoardController]);
                
                function ScrumBoardController($scope, $http, Login){
                    

                    $scope.add = function(list, title){
                        var card = {
                            title: title,
                            list: list.id
                        }
                        $http.post('/scrumboard/cards/', card).then(function(response){

                            
                        list.cards.push(response.data);
                        }, function(){

                            alert("counldn't create card")
                        });

                    };
                    // $scope.logout = function(){
                    //     $http.get('/auth_api/logout/').then(
                    //         function() {
                    //             $location.url('/login');
                    //         });
                        

                    // };
                    // $scope.login = function(){

                    //     $http.post('/auth_api/login/', {
                    //         username: 'rehmanm', password: 'djangular123'
                    //     });
                    // };    

                    Login.redirectIfNotLoggedIn();
                    $scope.data =[];
                    $scope.logout = Login.logout;
                    $scope.sortBy = "story_points";
                    $scope.reverse = true;
                    $scope.showFilters = false;
                        $http.get('/scrumboard/lists/').then(function(response){
                            $scope.data = response.data;
                        });
                    

                }

            }
        )();
