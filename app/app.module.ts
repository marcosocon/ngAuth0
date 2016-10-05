import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';

import { AppComponent }  from './app.component';
import { ProfileComponent }  from './components/profile/profile.component';
import { HomeComponent }  from  './components/home/home.component';


@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, ProfileComponent, HomeComponent ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
