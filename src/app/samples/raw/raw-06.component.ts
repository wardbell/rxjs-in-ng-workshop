// tslint:disable:member-ordering
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-raw-06',
  template: `
    <h4>06 - fromEvent</h4>

    <div style="margin-bottom: 1rem;">
      <button type="text" (click)="clear()">Clear</button>
    </div>

    <input #input/>

    <ol>
      <li *ngFor="let message of messages">{{message}}</li>
    </ol>
  `
})
export class Raw06Component implements OnInit {

  @ViewChild('input') inputElRef: ElementRef;
  inputEl: HTMLInputElement;
  messages: string[] = [];

  ngOnInit() {
    this.inputEl = this.inputElRef.nativeElement;

    // RxJS `fromEvent` makes it easy to observe DOM events (note import above)
    const observable = fromEvent(this.inputEl, 'keyup');

    observable.subscribe(
      keyupEvent => {
        console.log('KeyUp event', keyupEvent);
        this.messages.push(this.inputEl.value)
      }
    );
  }

  clear() {
    this.messages = [];
    this.inputEl.value = '';
  }
}
