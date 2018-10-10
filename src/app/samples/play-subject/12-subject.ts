// #region imports
// tslint:disable:member-ordering
// Namespace to get something you need
import * as Rxjs from 'rxjs';
import * as op from 'rxjs/operators';
// #endregion imports

import { data$ } from '../helpers';

export function play(...args) {

  /**
   * Subject keep a list of subscribers and notify all of them (multi-cast)
   * each time they emit on a channel.
   */
  const subject = new Rxjs.Subject();

  data$.subscribe(n => {
    subject.next(n)
  });

  return subject;

  // WHY IS THE FOLLOWING A BETTER PRACTICE?
  // return subject.asObservable();
}
