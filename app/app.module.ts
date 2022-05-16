import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtikComponent } from './artik/artik.component';
import { ArtikListComponent } from './artik-list/artik-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({

  declarations: [
    AppComponent,
    ArtikComponent,
    ArtikListComponent,
    HeaderComponent,
    LandingPageComponent,
    UserListComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
