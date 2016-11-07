(function(angular, name){
    'use strict';

    angular.module('hello').directive(name, directive);

    directive.$inject=[];
    function directive(){
        return {
            restrict: 'E',
            template: '<span class="mainMessage">...and I\'m an hello from Angular 1.x directive!</span>'
        }
    }
})(angular, 'helloOne');