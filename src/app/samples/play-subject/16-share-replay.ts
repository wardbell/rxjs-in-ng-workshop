// #region imports
// tslint:disable:member-ordering
// Namespace to get something you need
import * as Rxjs from 'rxjs';
import * as op from 'rxjs/operators';
// #endregion imports

import { data$ } from '../helpers';

  /**
   * Normal Observables notify only a single subscriber (uni-cast)
   * and re-execute each time they are subscribes.
   */
export function play(...args) {

  // Starts like "11-observable" ... and pipes on shareReplay(1)
  // Now it's multi-cast with a buffer of the last next'd value
  return data$.pipe(op.shareReplay(1));
}
