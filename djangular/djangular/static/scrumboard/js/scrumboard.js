
        (
            function(){
                'use strict';
                angular.module('scrumboard.demo', ['ngRoute'])
                    .controller('ScrumBoardController', ['$scope', '$http', '$location', ScrumBoardController]);
                
                function ScrumBoardController($scope, $http, $location){
                    

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
                    $scope.logout = function(){
                        $http.get('/auth_api/logout/').then(
                            function() {
                                $location.url('/login');
                            });
                        

                    };
                    // $scope.login = function(){

                    //     $http.post('/auth_api/login/', {
                    //         username: 'rehmanm', password: 'djangular123'
                    //     });
                    // };    

                    $scope.data =[];
                    $http.get('/scrumboard/lists/').then(function(response){
                        $scope.data = response.data;
                    })

                }

            }
        )();
