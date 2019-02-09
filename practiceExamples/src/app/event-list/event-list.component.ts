import { Component } from "@angular/core";

@Component({
  selector: "event-list",
  templateUrl: "./event-list.html",
  styles: [
    "li {list-style-type:none}",".block{display:block; padding-top: 10px;}"
  ]
})
export class EventListComponent {
  events: any = [
    {
      name: "Angular Connect",
      format:"InPerson",
      date: "9/26/2036",
      time: "10am",
      location: {
        address: "1 London Road ",
        city: "London",
        country: "England"
      }
    },
    {
      name: "ng-conf 2037",
      format:"Online",
      date: "4/15/2037",
      time: "9am",
      onlineUrl: "https://www.ng-conf.org/"
    },
    { name: "Future Conf (Location/Url TBD)", date: "6/10/2037", time: "8am" },
    {
      name: "ng-nl",
      format:"Online",
      date: "4/15/2037",
      time: "9am",
      onlineUrl: "http://ng-nl.org/"
    },
    {
      name: "UN Angular Summit",
      date: "6/10/2037",
      time: "8am",
      location: {
        address: "The UN Angular Center",
        city: "New York",
        country: "USA"
      },
      onlineUrl: "http://unangularsummit.org"
    }
  ];
}
