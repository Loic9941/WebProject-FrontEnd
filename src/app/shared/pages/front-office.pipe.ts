import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frontOffice'
})
export class FrontOfficePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
