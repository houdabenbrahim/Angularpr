import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtikComponent } from './artik/artik.component';


@NgModule({

  declarations: [
    AppComponent,
    ArtikComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
