import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './app.module';
import { HelloTwoComponent } from './helloTwo/helloTwo.component';
import { NameService } from './name.service.def';

declare var angular: any;
var rootTemplate = require('../ng1-app/route/root/root.html');

export class AppUpgradeAdapter {
    adapter: UpgradeAdapter;
    constructor(private moduleName: string){
        this.adapter = new UpgradeAdapter(AppModule);

        angular.module(moduleName).service('nameService', this.adapter.downgradeNg2Provider(NameService));
        angular.module(moduleName).directive('helloTwo', this.adapter.downgradeNg2Component(HelloTwoComponent));
    }
}