import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventListComponent } from "./event-list/event-list.component";
import { CreateEventComponent } from "./event-list/createEvent.component";

const routes: Routes = [
  { path: "events", component: EventListComponent },
  { path: "create", component: CreateEventComponent },
  { path: "", redirectTo: "events", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
