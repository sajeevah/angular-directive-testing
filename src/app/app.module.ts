import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionDirective } from './action.directive';
import { HasPermissionDirective } from './has-permission.directive';

@NgModule({
  declarations: [
    AppComponent,
    ActionDirective,
    HasPermissionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
