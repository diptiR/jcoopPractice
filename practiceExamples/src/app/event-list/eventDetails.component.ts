import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventService } from './event.service';

@Component({
  templateUrl: "./eventDetails.html"
})
export class EventDetailsComponent implements OnInit {
  id: number;
  event: any;
  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService, private router: Router) {}
  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.params.id;
    this.event = this.eventService.getEventById(this.id);
  }
  returnToEvents(){
    this.router.navigate([""]);
  }
}
