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

    // Try these variations. What happens?
    // replaySubject.error('Oops ... error');
    // replaySubject.complete();

    replaySubject.next('Got data again');
  }, 500);

  return replaySubject;
}



/**
 * As far as I can tell, BehaviorSubject could be implemented with ReplaySubject
 * // subject = new Rxjs.ReplaySubject(1); // buffer one value
 * // subject.next('initial'); // immediately next the initial value, before 1st possible subscription.
 */
