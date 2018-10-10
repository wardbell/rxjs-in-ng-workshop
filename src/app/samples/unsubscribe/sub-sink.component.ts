// tslint:disable:member-ordering
import { TimeService } from '../../time.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { SubSink } from '../helpers';

let counter = 0;

@Component({
  selector: 'app-sub-sink',
  template: ` <p>time: {{ time }}</p>`
})
export class SubSinkComponent implements OnInit, OnDestroy {
  time: string;
  time$: Observable<string>

  // #1 declare a sink for subscriptions
  private subs = new SubSink();


  ngOnInit() {
    counter += 1;
    this.time$ = this.timeService.time$(`SubSinkComponent #${counter}`);

    // Create a subscriber for demo purposes ... because we'll subscribe the same way multiple times
    const subscriber = (() => {
      const that = this;
      return {
        next(time) { that.time = `${name} ${time}`; },
        error(err) { console.error(err); },
        complete() { console.log('SubSinkComponent completed'); } // never called!
      }
    })();

    // #2 Assign subscriptions to the sink or call add()
    this.subs.sink = this.time$.subscribe(subscriber);
    this.subs.sink = this.time$.subscribe(subscriber);
    this.subs.sink = this.time$.subscribe(subscriber);
    this.subs.add(this.time$.subscribe(subscriber)); // this works too
  }

  // #3 Call unsubscribe on the sink.
  ngOnDestroy() {
    this.subs.unsubscribe();
    console.log(`SubSinkComponent #${counter} destroyed`);
  }

  constructor(private timeService: TimeService) {}

}
