import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from "@angular/core";
@Component({
    "selector": "child",
    "template": `
        <div>Child Counter {{counter}}</div>
        <button (click)="onClick()">Click me</button>
    `
})
export class ChildComponent implements OnInit {
    counter = 0;

    @Output() clickMe = new EventEmitter()

    ngOnInit(): void {
        setInterval(() => {
            this.counter++
        }, 1000)
    }

    onClick(){
        this.clickMe.emit(this.counter);
    }
}