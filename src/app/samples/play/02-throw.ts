// #region imports
// tslint:disable:member-ordering
// Namespace to get something you need
import * as Rxjs from 'rxjs';
import { map } from 'rxjs/operators';
// #endregion imports

export function play(...args) {

  const numbers$ = Rxjs.of(10, 20, 30, 40, 50);

  const observable$ = numbers$.pipe(
    map(_ => { throw new Error('Errorrrr'); })
  );

  return observable$;

}
