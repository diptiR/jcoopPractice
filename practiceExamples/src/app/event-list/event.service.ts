import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class EventService {
  events: any = [
    {
      id: 1,
      name: "Angular Connect",
      format: "InPerson",
      date: "9/26/2036",
      time: "10am",
      location: {
        address: "1 London Road ",
        city: "London",
        country: "England"
      }
    },
    {
      id: 2,
      name: "ng-conf 2037",
      format: "Online",
      date: "4/15/2037",
      time: "9am",
      onlineUrl: "https://www.ng-conf.org/"
    },
    {
      id: 3,
      name: "Future Conf (Location/Url TBD)",
      date: "6/10/2037",
      time: "8am"
    },
    {
      id: 4,
      name: "ng-nl",
      format: "Online",
      date: "4/15/2037",
      time: "9am",
      onlineUrl: "http://ng-nl.org/"
    },
    {
      id: 5,
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
  getEvents() {
    return this.events;
  }
  getEventById(id: number) {
    return this.events.find(event => event.id === id);
  }
}
