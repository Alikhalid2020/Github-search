import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'servicesCount'
})
export class ServicesCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
