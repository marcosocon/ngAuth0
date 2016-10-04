import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProfileComponent }  from './components/profile/profile.component';
import { HomeComponent }  from  './components/home/home.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ProfileComponent, HomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
