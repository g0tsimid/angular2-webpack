import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  routing,
  appRoutingProviders
} from './app.routing';
import { HomeComponent } from './home';
import { NavComponent } from './shared/nav'

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent
  ],
  providers: [
    appRoutingProviders  
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
