import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { UpgradeAdapter } from '@angular/upgrade';
import { AppUpgradeAdapter } from './app/appUpgradeAdapter';

declare var angular: any;

if (process.env.ENV === 'production') {
  enableProdMode();
} 

//AngularJs 1.x application
require('./ng1-app');

new AppUpgradeAdapter();