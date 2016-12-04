import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './app.module';
import { HelloTwoComponent } from './helloTwo/helloTwo.component';
import { NameService } from './name.service.def';

declare var angular: any;
const moduleName = 'hello';

export class AppUpgradeAdapter {
    adapter: UpgradeAdapter;
    constructor(){
        this.adapter = new UpgradeAdapter(AppModule);
        angular.module(moduleName).service('nameService', this.adapter.downgradeNg2Provider(NameService));
        angular.module(moduleName).directive('helloTwo', this.adapter.downgradeNg2Component(HelloTwoComponent));

        angular.element(document.body).ready(function() {
            this.adapter.bootstrap(document.body, [moduleName]);
        }.bind(this));
    }
}