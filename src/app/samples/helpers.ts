import { interval, Observable, Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';

/** Observable of integers emitted every 1/4 second. Completes after 10 of them */
export const data$ = interval(250).pipe(take(10));

/** Observer logs to the console with optional name prefix */
export const loggingObserver = (name?: string) => ({
  next(value) { name ? console.log(name, value) : console.log(value) },
  error(err) { console.error((name ?  `${name}: ` : '') + err) },
  complete() { console.log((name ?  `${name}: ` : '') + 'Completed') }
});

/** Custom operator that taps into observable and logs it with the loggingObserver */
export const logOp = (name?: string) =>
  (obs: Observable<any>) => obs.pipe(tap(loggingObserver(name)));

/**
 * Custom nameless logger operator
 * Usage: drop it in a pipe:  data$.pipe(log, filter(...), etc.)
 */
export const log = logOp();

/** Observer displays observable emits to a conforming component's UI */
export const messageObserver = (component: {messages: string[], errorMessage: string}, name?: string) => ({
  next: value => component.messages.push((name ?  `${name}: ` : '') + JSON.stringify(value)),
  error: error => component.errorMessage = (name ?  `${name}: ` : '') + error,
  complete: () => component.messages.push((name ?  `${name}: ` : '') + 'Completed')
});

/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 *
 * @example
 *   private subs = new SubSink();
 */

export class SubSink {
  private _subs: Subscription[] = [];

  /**
   * Assign subscription to this sink
   * @example
   *  this.subs.sink = observable$.subscribe(...);
   */
  set sink(subscription: Subscription) {
    this._subs.push(subscription);
  }

  /**
   * Unsubscribe to all subscriptions in ngOnDestroy()
   * @example
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   */
  unsubscribe() {
    this._subs.forEach(sub => sub.unsubscribe());
  }
}
