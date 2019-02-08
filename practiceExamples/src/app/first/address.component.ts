import { Component, Input } from '@angular/core'

@Component({
    "selector": "locAddress",
    "templateUrl": "./address.html"
})

export class AddressComponent {
    @Input() location
}