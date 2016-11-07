var angular = require('angular');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { UpgradeAdapter } from '@angular/upgrade';
import { AppComponent } from './app/app.component';

if (process.env.ENV === 'production') {
  enableProdMode();
}

var adapter = new UpgradeAdapter(AppModule); 
//AngularJS 1.x application
var app = angular.module('hello', []);
require('./app/ng1-app/helloOne');

//Angular 2 application
app.directive('myApp', adapter.downgradeNg2Component(AppComponent));

angular.element(document.body).ready(function() {
    adapter.bootstrap(document.body, ['hello']);
    
});

//platformBrowserDynamic().bootstrapModule(AppModule);
