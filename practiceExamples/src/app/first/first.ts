import { Component } from "@angular/core";

@Component({
    "selector": "home",
    "templateUrl": "./first.html",
    "styles":[".block{display:block;padding-bottom:10px}"]
})

export class HomeComponent {
    data = {
        name: 'ngConf 2025',
        date: '3/1/2025',
        time: '8am',
        location:
        {
            address: '123 Main St',
            city: 'Salt Lake City, UT',
            country: 'USA'
        }
    }
}