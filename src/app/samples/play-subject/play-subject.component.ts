// #region imports
// tslint:disable:member-ordering
import { Component, OnDestroy } from '@angular/core';
import { log, logOp, loggingObserver, messageObserver } from '../helpers';

// Always available in the subject playground
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Namespace to get something you need
import * as Rxjs from 'rxjs';
import * as op from 'rxjs/operators';
// #endregion imports

import { play as observable11 } from './11-observable';
import { play as subject12 } from './12-subject';
import { play as subject13 } from './13-subject';
import { play as behaviorSubject14 } from './14-behavior-subject';
import { play as replaySubject15 } from './15-replay-subject';
import { play as shareReplay16 } from './16-share-replay';

const playFns = {
  '11-Observable': observable11,
  '12-Subject': subject12,
  '13-Subject': subject13,
  '14-BehaviorSubject': behaviorSubject14,
  '15-ReplaySubject': replaySubject15,
  '16-ShareReplay': shareReplay16,
}

@Component({
  selector: 'app-play-subject',
  templateUrl: './play-subject.component.html',
  styleUrls: [ './play-subject.component.scss'],
})
export class PlaySubjectComponent implements OnDestroy {

  playList = Object.keys(playFns);
  playName = this.playList[0];

  selected(value: any) {
    this.playName = value;
    this.producer = undefined;
    this.errorMessage = '';
    this.messages = [];
  }

  start() {

    this.messages.push('-- Before subscribe --');

    const observable$ = playFns[this.playName](this);

    observable$.pipe(logOp('A')).subscribe(messageObserver(this, 'A'));
    observable$.pipe(logOp('B')).subscribe(messageObserver(this, 'B'));

    setTimeout(() => {
      this.messages.push('******* C starts subscribing');
      observable$.pipe(logOp('C')).subscribe(messageObserver(this, 'C'));
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
  producer: Rxjs.Observer<any> = null;

  clear() {
    this.errorMessage = '';
    this.messages = [];
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
  // #endregion helpers
}
