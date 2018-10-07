// tslint:disable:member-ordering
import { Component, OnDestroy } from '@angular/core';

// Always available
import { Observable, Subject, asapScheduler, asap } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Namespace to get something you need
import * as Rxjs from 'rxjs';
import * as op from 'rxjs/operators';


//////  Component //////////

@Component({
  selector: 'app-play',
  template: `
    <h4>Playground</h4>

    <div style="margin-bottom: 1rem;">
      <button type="text" (click)="start()">Start</button>
      <button type="text" (click)="clear()">Clear</button>
    </div>

    <ol>
      <li *ngFor="let message of messages">{{message}}</li>
    </ol>

    <div *ngIf="errorMessage" style="background-color: red; color: white">
      {{errorMessage}}!
    </div>
  `
})
export class PlayComponent implements OnDestroy {

  start() {

    const array = [10, 20, 30];

    const result = Rxjs.from(array); // , Rxjs.asapScheduler);

    this.add('-- Before subscribe');

    interface Obj {
      id: number,
      name: string,
    }

    Rxjs.of(
      {id: 1, name: 'javascript'},
      {id: 2, name: 'parcel'},
      {id: 2, name: 'webpack'},
      {id: 1, name: 'typescript'},
      {id: 3, name: 'tslint'}
    ).pipe(
      op.groupBy(p => p.id, p => p.name),
      op.mergeMap( (group$) => group$.pipe(op.reduce((acc, cur) => [...acc, cur], ['' + group$.key]))),
      op.map((arr: string[]) => ({'id': parseInt(arr[0], 10), 'values': arr.slice(1)})),
    )
    .subscribe(p => this.add(p));


    this.add('-- After subscribe');

  }


  // #region helpers
  destroy$ = new Subject();
  errorMessage = '';
  messages: any[] = [];

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
