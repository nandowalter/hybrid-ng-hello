/// <reference path="../../../node_modules/@types/angular/index.d.ts" />

import { UpgradeAdapter } from '@angular/upgrade';
import { HelloTwoComponent } from '../helloTwo/helloTwo.component';
import { uiRouterNgUpgrade } from "ui-router-ng1-to-ng2";

declare var angular: any;

export class AppRouteConfig {
    constructor(private adapter: UpgradeAdapter, private moduleName: string){
        uiRouterNgUpgrade.setUpgradeAdapter(adapter);

        //Route configuration
        angular.module(moduleName).config(config);
        config.$inject = ['$stateProvider'];
        function config($stateProvider: any) {
            $stateProvider.state({
                name: 'helloTwo', 
                url: '/ng2',
                component: HelloTwoComponent
            });
        }
    }
}