import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'units'
})
export class UnitsPipe implements PipeTransform {

  transform(value: number): any {
    if (!value) {
      return '';
    }
    return value + ' units';
  }

}
