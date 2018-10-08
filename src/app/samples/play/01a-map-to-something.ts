// #region imports
// tslint:disable:member-ordering
// Namespace to get something you need
import * as Rxjs from 'rxjs';
import { map } from 'rxjs/operators';
// #endregion imports

export function play(...args) {

  const numbers$ = Rxjs.of(10, 20, 30, 40, 50);

  const observable$ = numbers$.pipe(
    map(n => {
      switch (n) {
        case 0: return 'nothing';
        case 10: return 'ten';
        case 20: return 'twenty';
        case 30: return 'thirty';
        default: return 'a lot';
      }
    })
  );

  return observable$;

}
