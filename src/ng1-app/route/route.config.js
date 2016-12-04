var rootTemplate = require('./root/root.html');

(function(){
    angular.module('hello').config(config);
    
    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider.state({
            name: 'index', 
            url: '',
            template: rootTemplate
        }).state({
            name: 'helloOne', 
            url: '/ng1',
            component: 'helloOne'
        }).state({
            name: 'helloTwo', 
            url: '/ng2',
            component: 'helloTwo'
        });
    }
})();