import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { NavComponent } from './shared'
import { routing } from './app.routing';

import { HomeComponent } from './home';

@NgModule({
    declarations: [AppComponent, HomeComponent, NavComponent],
    imports:      [BrowserModule, FormsModule, routing],
    bootstrap:    [AppComponent],
})
export class AppModule {}