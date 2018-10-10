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


    // #2 Assign subscription the sink
    this.subs.sink = this.time$.subscribe(
        time => (this.time = time),
        err => console.error(err),
        () => console.log('SubSinkComponent completed') // never called!
    );
  }

  // #3 Call unsubscribe on the sink.
  ngOnDestroy() {
    this.subs.unsubscribe();
    console.log(`SubSinkComponent #${counter} destroyed`);
  }

  constructor(private timeService: TimeService) {}

}
