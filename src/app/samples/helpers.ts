import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/** Observer logs to the console with optional name prefix */
export const loggingObserver = (name?: string) => ({
  next(value) { name ? console.log(name, value) : console.log(value) },
  error(err) { console.error((name ?  `${name}: ` : '') + err) },
  complete() { console.log((name ?  `${name}: ` : '') + 'Completed') }
});

/** Custom operator that taps into observable and logs it with the loggingObserver */
export const logOp = (name?: string) =>
  (obs: Observable<any>) => obs.pipe(tap(loggingObserver(name)));

/** Observer displays observable emits to a conforming component's UI */
export const messageObserver = (component: {messages: string[], errorMessage: string}, name?: string) => ({
  next: value => component.messages.push((name ?  `${name}: ` : '') + JSON.stringify(value)),
  error: error => component.errorMessage = (name ?  `${name}: ` : '') + error,
  complete: () => component.messages.push((name ?  `${name}: ` : '') + 'Completed')
});
