import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HelloTwoComponent } from './helloTwo/helloTwo.component';
import { NameService } from './name.service.def';
import { NameMemoryService } from './nameMemory/nameMemory.service';

@NgModule({
  imports: [
    BrowserModule
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
