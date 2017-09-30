
        (
            function(){
                'use strict';
                angular.module('scrumboard-demo', [])
                    .controller('ScrumBoardController', ['$scope', '$http', ScrumBoardController]);
                
                function ScrumBoardController($scope, $http){
                    $scope.data =[];

                    $scope.add = function(list, title){
                        var card = {
                            title: title
                        }
                        list.cards.push(card);

                    };

                    $http.get('/scrumboard/lists').then(function(response){
                        $scope.data = response.data;
                    })

                }

            }
        )();
