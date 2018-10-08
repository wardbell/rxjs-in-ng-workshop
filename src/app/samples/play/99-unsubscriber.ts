// #region imports
// tslint:disable:member-ordering
import * as Rxjs from 'rxjs';
// #endregion imports

// #region Producer Class
export class Producer {
  constructor(private observer: Rxjs.Observer<string>) { }

  next(value?: string) {
   this.observer.next(value || 'Hit me!');
  }

  error(err?: string) {
    this.observer.error(err);
  }

  // Complete behavior
  complete() {
    this.observer.complete();
  }
}
// #endregion Producer Class

/**
 * Usage:
 *  const observable$ = play(this); // the PlayComponent instance
 */
export function play(component: { producer: Rxjs.Observer<string> }) {


  const observable$ = new Rxjs.Observable((subscriber: Rxjs.Subscriber<string>) => {

    component.producer = new Producer(subscriber);

    // return a "Teardownable" object (has an "unsubcribe()")
    return {
      unsubscribe() {
        subscriber.unsubscribe();
        alert('Producer unsubscribed!')
      }
    }
  });

  return observable$

}
