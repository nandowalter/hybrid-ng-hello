(function(angular, name){
    'use strict';

    angular.module('hello').directive(name, directive);

    directive.$inject=['nameService'];
    function directive(nameService){
        return {
            restrict: 'E',
            template: `
                <span class="mainMessage">...and I\'m an hello from {{name}} and Angular 1.x directive!</span>
            `,
            scope: {},
            link: function(scope) {
                scope.name = nameService.getName();
            }
        }
    }
})(angular, 'helloOne');