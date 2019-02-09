import { Component } from "@angular/core";
@Component({
  selector: "parent",
  template: `
    <div *ngIf="stopped">Congratulations, you stopped at : {{ currentCounter }}</div>
    <br />
    <child #childComp (clickMe)="clickMe($event)"></child>
    <button (click)="childComp.stopTimer()">Stop Timer</button>
  `
})
export class ParentComponent {
  currentCounter: number;
  stopped: boolean = false;

  clickMe(data: any): void {
    this.currentCounter = data;
    this.stopped = true;
  }
}
