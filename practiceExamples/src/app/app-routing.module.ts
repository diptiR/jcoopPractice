import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventListComponent } from "./event-list/event-list.component";
import { CreateEventComponent } from "./event-list/createEvent.component";
import { EventDetailsComponent } from "./event-list/eventDetails.component";
import { EventCanActivateService } from "./event-list/eventCanActivate.service";

const routes: Routes = [
  { path: "", component: EventListComponent },
  { path: "events/:id", component: EventDetailsComponent, canActivate: [EventCanActivateService] },
  { path: "create", component: CreateEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
