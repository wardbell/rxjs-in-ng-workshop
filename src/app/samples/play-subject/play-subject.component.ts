// #region imports
// tslint:disable:member-ordering
import { Component, OnDestroy } from '@angular/core';
import { loggingObserver, logOp, messageObserver } from '../helpers';

// Always available in the playground
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Namespace to get something you need
import * as Rxjs from 'rxjs';
import * as op from 'rxjs/operators';
// #endregion imports

import { play } from './15-replay-subject';
const playName =       '15-replay-subject';

@Component({
  selector: 'app-play-subject',
  styleUrls: [ './play-subject.component.scss'],
  template: `
    <h4>Subject Playground - {{playName}}</h4>

    <div class="buttons">
      <button type="text" (click)="start()">Start</button>
      <span *ngIf="producer">
        <button type="text" (click)="next()">Next</button>
        <button type="text" (click)="error()">Error</button>
        <button type="text" (click)="complete()">Done</button>
      </span>
      <button type="text" (click)="clear()">Clear</button>
    </div>

    <ol>
      <li *ngFor="let message of messages">{{message}}</li>
    </ol>

    <div *ngIf="errorMessage" class="error" >
      {{errorMessage}}
    </div>
  `
})
export class PlaySubjectComponent implements OnDestroy {


  start() {

    this.messages.push('-- Before subscribe --');

    const observable$ = play(this);

    observable$.subscribe(messageObserver(this, 'A'));
    observable$.subscribe(messageObserver(this, 'B'));

    setTimeout(() => {
      this.messages.push('******* C starts subscribing');
      observable$.subscribe(messageObserver(this, 'C'));
    }, 1000)

    this.messages.push('-- After subscribe --');

  }


  // #region helpers
  destroy$ = new Subject();
  complete = () => this.producer && this.producer.complete();
  error = () => this.producer && this.producer.error('Error');
  errorMessage = '';
  messages: any[] = [];
  next = () => this.producer && this.producer.next('Next!');
  playName = playName;
  producer: Rxjs.Observer<any> = null;

  add(_: any) {
    this.messages.push(JSON.stringify(_));
  }

  clear() {
    this.errorMessage = '';
    this.messages = [];
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
  // #endregion helpers
}
