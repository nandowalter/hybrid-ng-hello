/// <reference path="../../node_modules/@types/angular/index.d.ts" />

import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './app.module';
import { HelloTwoComponent } from './helloTwo/helloTwo.component';
import { NameService } from './name.service.def';
import { uiRouterNgUpgrade } from "ui-router-ng1-to-ng2";

declare var angular: any;
var rootTemplate = require('../ng1-app/route/root/root.html');
const moduleName = 'hello';

export class AppUpgradeAdapter {
    adapter: UpgradeAdapter;
    constructor(){
        this.adapter = new UpgradeAdapter(AppModule);

        uiRouterNgUpgrade.setUpgradeAdapter(this.adapter);

        angular.module(moduleName).service('nameService', this.adapter.downgradeNg2Provider(NameService));
        angular.module(moduleName).directive('helloTwo', this.adapter.downgradeNg2Component(HelloTwoComponent));

        //Route configuration
        angular.module(moduleName).config(config);
        config.$inject = ['$stateProvider'];
        function config($stateProvider: any) {
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
                component: HelloTwoComponent
            });
        }




        angular.element(document.body).ready(function() {
            this.adapter.bootstrap(document.body, [moduleName]);
        }.bind(this));
    }
}