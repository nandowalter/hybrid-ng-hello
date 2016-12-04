var rootTemplate = require('./root/root.html');

(function(){
    angular.module('hello').config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider){
        $routeProvider.when('/', {
            template: rootTemplate
        });
    }
})();