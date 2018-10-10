import { Subscription } from 'rxjs';

/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
export class SubSink {

  protected _subs: Subscription[] = [];

  /**
   * Subscription sink that holds Observable subscriptions
   * until you call unsubscribe on it in ngOnDestroy.
   *
   * @example
   * ```
   *   private subs = new SubSink();
   *   ...
   *   this.subs.add(observable$.subscribe(...)); //
   *   this.subs.sink = observable$.subscribe(
   *       ...
   *   );
   *   ...
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   * ```
   */
  constructor() {}

  /**
   * Add subscription to the tracked subscriptions
   * @example
   *  this.subs.add(observable$.subscribe(...));
   */
  add(subscription: Subscription) {
    this._subs.push(subscription);
  }

  /**
   * Assign subscription to this sink to add it to the tracked subscriptions
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
