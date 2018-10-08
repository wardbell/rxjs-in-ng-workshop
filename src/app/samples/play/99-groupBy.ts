// #region imports
// tslint:disable:member-ordering
import * as Rxjs from 'rxjs';
import { groupBy, mergeMap, map, reduce, concatMap } from 'rxjs/operators';
// #endregion imports

export function play(...args) {
  interface Obj {
    id: number,
    name: string,
  }

  const observable$ = Rxjs.of(
    {id: 1, name: 'javascript'},
    {id: 2, name: 'parcel'},
    {id: 2, name: 'webpack'},
    {id: 1, name: 'typescript'},
    {id: 3, name: 'tslint'}
  ).pipe(
    groupBy(p => p.id, p => p.name),
    mergeMap( (group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], ['' + group$.key]))),
    map((arr: string[]) => ({'id': parseInt(arr[0], 10), 'values': arr.slice(1)})),


    // concatMap(_ => Rxjs.throwError('error'))
    // map(_ => { throw new Error('Errorrrr'); })
  );

  return observable$;

}
