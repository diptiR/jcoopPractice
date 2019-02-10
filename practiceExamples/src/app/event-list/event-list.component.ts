import { Component, OnInit } from "@angular/core";
import { EventService } from "./event.service";

@Component({
  selector: "event-list",
  templateUrl: "./event-list.html",
  styles: [
    "li {list-style-type:none}",
    ".block{display:block; padding-top: 10px;}",
    ".online{color:green}",
    ".inperson{color:red}",
    ".tbd{color:blue}"
  ]
})
export class EventListComponent implements OnInit {
  constructor(private eventService: EventService) {}

  events: any;

  getTitle(format: string) {
    if (format === "Online") return ["online"];
    if (format === "InPerson") return ["inperson"];
    return ["tbd"];
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
