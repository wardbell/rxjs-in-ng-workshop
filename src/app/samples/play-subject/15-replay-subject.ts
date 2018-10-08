// #region imports
// tslint:disable:member-ordering
// Namespace to get something you need
import * as Rxjs from 'rxjs';
import * as op from 'rxjs/operators';
// #endregion imports

/**
 * ReplaySubject has no initial value.
 * It emits when asked
 * It "replays" the last (n) nexted values for new subscribers
 */
export function play(...args) {

  const replaySubject = new Rxjs.ReplaySubject(1);

  setTimeout(() => {
    replaySubject.next('Got the data');

    // replaySubject.error('Oops ... error');

    // replaySubject.complete();

    replaySubject.next('Got data again');
  }, 500);

  return replaySubject;
}
