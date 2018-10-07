import { of } from 'rxjs';

export function play(...args) {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  /**
   * To double the odd integers and sum them ...
   * chain with array operators
   */
  const result = arr
    .filter(i => i % 2)
    .map(i => i * 2)
    .reduce((acc, curr) => acc + curr)


  return of(result); // 'cause we love observables
}
