import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './first/first';
import { AddressComponent } from "./first/address.component";
import { ChildComponent } from "./third/child.component";
import { ParentComponent } from "./third/parent.component";
import { EventListComponent } from './event-list/event-list.component';
import { CreateEventComponent } from './event-list/createEvent.component';
import { EventDetailsComponent } from './event-list/eventDetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddressComponent,
    ParentComponent,
    ChildComponent,
    EventListComponent,
    CreateEventComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
