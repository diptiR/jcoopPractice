import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './first/first';
import { AddressComponent } from "./first/address.component";
import { ChildComponent } from "./third/child.component";
import { ParentComponent } from "./third/parent.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddressComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
