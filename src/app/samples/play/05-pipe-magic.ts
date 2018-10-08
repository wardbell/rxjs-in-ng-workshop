// #region imports
import * as Rxjs from 'rxjs';
import { filter, map, reduce, take, scan } from 'rxjs/operators';
import { interval } from 'rxjs';
import { log } from '../helpers'; // if we need it.
// #endregion imports

export function play(...args) {

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 3 different ways to create the Obsrvable:
  // const numbers$ = Rxjs.from(numbers);
  // const numbers$ = Rxjs.from(numbers, Rxjs.asapScheduler);
  const numbers$ = interval(50); // tick tick tick

  /**
   * To double the odd integers and sum them ...
   * pipe with RxJS array-like operators
   */
  const result$ = numbers$.pipe(
    take(10),  //  WHAT IF WE LEAVE THIS OUT?
    filter(i => i % 2 === 1),
    map(i => i * 2),
    reduce((acc, curr) => acc + curr, 0)
  )

  return result$; // 'cause we love observables
}
