import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  // pure:false - if pure:false function will re-render
  // pure:true - if pure:true function will be memoized // DEFAULT OPTION
})
export class ReducePipe<T> implements PipeTransform {
  transform(
    array: T[],
    reduceFn: (acc: any, curr: T) => any,
    initialValue: T
  ): unknown {
    return array.reduce(reduceFn, initialValue);
  }
}
