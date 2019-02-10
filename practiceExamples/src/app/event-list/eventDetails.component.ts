import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from './event.service';

@Component({
  templateUrl: "./eventDetails.html"
})
export class EventDetailsComponent implements OnInit {
  id: number;
  event: any;
  constructor(private router: ActivatedRoute, private eventService: EventService) {}
  ngOnInit() {
    this.id = +this.router.snapshot.params.id;
    this.event = this.eventService.getEventById(this.id);
  }
}
