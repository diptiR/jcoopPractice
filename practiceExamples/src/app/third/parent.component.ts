import { Component } from "@angular/core";
@Component({
    "selector": "parent",
    "template": "<div>Congratulations, you stopped at : {{currentCounter}}</div><br><child (clickme)='clickMe($event)'></child>"
})

export class ParentComponent {
    currentCounter: number

    clickMe(data): void{
        this.currentCounter = data;
    }
}