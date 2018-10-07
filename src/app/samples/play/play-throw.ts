// #region imports
// tslint:disable:member-ordering
// Namespace to get something you need
import * as Rxjs from 'rxjs';
import * as op from 'rxjs/operators';
// #endregion imports

export function play(...args) {

  const array = [10, 20, 30];

  const numbers$ = Rxjs.from(array)

  const observable$ = numbers$.pipe(
    op.map(_ => { throw new Error('Errorrrr'); })
  );

  return observable$;

}
