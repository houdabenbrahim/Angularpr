import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtikComponent } from './artik/artik.component';
import { ArtikListComponent } from './artik-list/artik-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({

  declarations: [
    AppComponent,
    ArtikComponent,
    ArtikListComponent,
    HeaderComponent,
    LandingPageComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
