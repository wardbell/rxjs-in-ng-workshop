import { of, interval } from 'rxjs';

import { filter, map, reduce, take } from 'rxjs/operators';

export function play(...args) {

  const arr$ = interval(250); // tick tick tick

  /**
   * To double the odd integers and sum them ...
   * pipe with RxJS array-like operators
   */
  const result$ = arr$.pipe(
    filter(i => i % 2 === 1),
    map(i => i * 2),
    take(10),  //  WHAT IF WE LEAVE THIS OUT?
    reduce((acc, curr) => acc + curr)
  )

  return result$; // 'cause we love observables
}
