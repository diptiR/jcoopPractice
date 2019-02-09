import { Component, OnInit, EventEmitter, Output } from "@angular/core";
@Component({
  selector: "child",
  template: `
    <div>Child Counter {{ counter }}</div>
    <button (click)="onClick()">Click me</button>
  `
})
export class ChildComponent implements OnInit {
  counter = 0;
  counterInterval: any;

  @Output() clickMe: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    this.counterInterval = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.counterInterval);
  }

  onClick() {
    this.clickMe.emit(this.counter);
  }
}
