import { Component } from "@angular/core";
@Component({
  selector: "parent",
  template: `
  <div>Congratulations, you stopped at : {{currentCounter}}</div><br>
  <child (clickMe)="clickMe($event)"></child>
  `
})
export class ParentComponent {
  currentCounter: number;

  clickMe(data: any): void {
    this.currentCounter = data;
  }
}
