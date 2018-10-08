// #region imports
// tslint:disable:member-ordering
import { Observable } from 'rxjs';
// import * as op from 'rxjs/operators';
import { tap } from 'rxjs/operators';
// #endregion imports
import { data$ } from '../helpers';

/** Observer logs to the console with optional name prefix */
export const loggingObserver = (name?: string) => ({
  next(value) { name ? console.log(name, value) : console.log(value) },
  error(err) { console.error((name ?  `${name}: ` : '') + err) },
  complete() { console.log((name ?  `${name}: ` : '') + 'Completed') }
});



/** Custom operator that taps into observable and logs it with the loggingObserver */
export const logOp = (name?: string) =>
  (o: Observable<any>) => o.pipe(
    // use the tap operator for side-effects
    tap(loggingObserver(name))
  );



/**
 * Custom nameless logger operator
 * Usage: drop it in a pipe:  data$.pipe(log, filter(...), etc.)
 */
export const log = logOp();




export function play(...args) {

  const observable$ = data$.pipe(
    logOp('Custom logger')
  );

  return observable$;

}
