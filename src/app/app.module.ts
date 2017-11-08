import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RestService } from './rest.service';

import { AboutComponent } from './about/about.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task/task.service';
import { ListComponent } from './task/list/list.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TaskComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    TaskService, 
    RestService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
