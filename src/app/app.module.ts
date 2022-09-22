import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
