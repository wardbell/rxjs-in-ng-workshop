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


const playName = 'throwError'
import { play } from './play-throwError';

@Component({
  selector: 'app-play',
  styleUrls: [ './play.component.scss'],
  template: `
    <h4>Playground - {{playName}}</h4>

    <div class="buttons">
      <button type="text" (click)="start()">Start</button>
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
export class PlayComponent implements OnDestroy {

  start() {

    const subscriber = messageObserver(this);

    this.add('-- Before subscribe');

    play().pipe(
      logOp()
    ).subscribe(subscriber);

    this.add('-- After subscribe');

  }










  // #region helpers
  destroy$ = new Subject();
  errorMessage = '';
  messages: any[] = [];
  playName = playName;

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
