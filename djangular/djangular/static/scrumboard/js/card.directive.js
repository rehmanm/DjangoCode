(
    function(){
        'use strict';
        angular.module('scrumboard.demo')
        .directive('scrumboardCard', CardDirective);

        function CardDirective(){
            return{
                templateUrl: '/static/scrumboard/html/card.html',
                restrict: 'E',
                controller: ['$scope', '$http', function($scope, $http){
                    var url = '/scrumboard/cards/' + $scope.card.id + '/';
                    $scope.update = function (){
                        $http.put(
                            url,
                            $scope.card
                        );
                    };
                    $scope.delete = function (){
                        $http.delete(
                            url).then(function(){ 
                                var cards = $scope.list.cards;
                                cards.splice(
                                    cards.indexOf($scope.card)
                                )    
                            }
                        );
                    };
                    $scope.modalOptions = {
                        debounce :500
                    }
                }]
            };

        }
    }
)();