import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HelloTwoComponent } from './helloTwo/helloTwo.component';
import { NameService } from './name.service.def';
import { NameMemoryService } from './nameMemory/nameMemory.service';
import { Ng1ToNg2Module } from 'ui-router-ng1-to-ng2'; 

@NgModule({
  imports: [
    BrowserModule,
    Ng1ToNg2Module
  ],
  providers: [
    { provide: NameService, useClass: NameMemoryService }
  ],
  declarations: [
    HelloTwoComponent
  ],
  entryComponents: [
    HelloTwoComponent
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}
