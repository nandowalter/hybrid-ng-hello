var helloOneTemplate = require('./helloOne.html');

(function(angular, name){
    'use strict';

    angular.module('hello').directive(name, directive);

    directive.$inject=['nameService'];
    function directive(nameService) {
        return {
            restrict: 'E',
            template: helloOneTemplate,
            scope: {},
            link: function(scope) {
                scope.name = nameService.getName();
            }
        }
    }
})(angular, 'helloOne');