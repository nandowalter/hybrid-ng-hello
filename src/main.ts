import { enableProdMode } from '@angular/core';
import { UpgradeAdapter } from '@angular/upgrade';
import { AppUpgradeAdapter } from './app/appUpgradeAdapter';
import { AppRouteConfig } from './app/route/AppRouteConfig';

declare var angular: any;
var adapter: UpgradeAdapter;
const moduleName = 'hello';

if (process.env.ENV === 'production') {
  enableProdMode();
} 

//AngularJs 1.x application
require('./ng1-app');

adapter = new AppUpgradeAdapter(moduleName).adapter;

//Bootstrap app
angular.element(document.body).ready(function() {
  adapter.bootstrap(document.body, [moduleName]);
}.bind(this));

new AppRouteConfig(adapter, moduleName);