// tslint:disable:member-ordering
import { TimeService } from '../../time.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription  } from 'rxjs';

// From https://github.com/NetanelBasal/ngx-auto-unsubscribe/blob/master/src/auto-unsubscribe.ts
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

let counter = 0;

@AutoUnsubscribe()
@Component({
  selector: 'app-auto-unsubscribe',
  template: ` <p>time: {{ time }}</p>`
})
export class AutoUnsubscribeComponent implements OnInit, OnDestroy {
  time: string;
  time$: Observable<string>

  // #1 declare a subscription variable for each subscription
  timeSubscription: Subscription;

  ngOnInit() {
    counter += 1;
    this.time$ = this.timeService.time$(`AutoUnsubscribeComponent #${counter}`);


    // #2 Assign subscription to a component variable that AutoUnsubscribe can find
    this.timeSubscription = this.time$.subscribe(
        time => (this.time = time),
        err => console.error(err),
        () => console.log('AutoUnsubscribeComponent completed') // never called!
    );
  }

  // #3 Must have an ngOnDestroy for Angular to find, even if it is empty
  ngOnDestroy() {
    console.log(`AutoUnsubscribeComponent #${counter} destroyed`);
  }

  constructor(private timeService: TimeService) {}

}

/**
 * You still have to remember the subscription vars and assign them.
 * Is this really better than using takeUntil?
 */
