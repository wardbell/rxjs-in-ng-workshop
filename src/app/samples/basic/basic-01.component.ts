// tslint:disable:member-ordering
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-basic-01',
  template: `
    <h4>01 - Begin</h4>

    <div style="margin-bottom: 1rem;">
      <button type="text" (click)="sayHello()">Say hello</button>
      <button type="text" (click)="clear()">Clear</button>
    </div>

    {{message}}
  `
})
export class Basic01Component {

  message = '';

  // Producer: A function that takes an Observer and
  // calls certain methods on it when something happens
  producer = (o: Observer<string>) => {
    // Something happened ... tell the observer about it
    o.next('Hello, good looking!');
  };


  // Wrap producer as RxJS Observable for safety and features
  observable = new Observable(this.producer);


  // Subscriber: An object with a next property that does something with a nexted value
  // hint: it's an Observer too!
  subscriber = {
    next: value => this.message = value,
  };


  sayHello() {

    // Subscribe to execute (nothing happens until we subscribe!)
    this.observable.subscribe(this.subscriber);

  }


  clear() {
    this.message = '';
  }
}
