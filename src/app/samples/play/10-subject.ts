// #region imports
// tslint:disable:member-ordering
import * as Rxjs from 'rxjs';
// #endregion imports

/**
 * Subject as a producer of values
 * Usage:
 *
 *   play(this).subscribe(subscriber);
 */
export function play(component: { producer: Rxjs.Observer<string> }) {

  // Subject as a producer of Observable values
  const subject = new Rxjs.Subject();

  component.producer = {
    next(value) { subject.next('Subject next: ' + value) },
    error(err) { subject.error('Subject error: ' + err) },
    complete() {
      subject.next('Subject completing');
      subject.complete();
    }
  }

  return subject;

}
