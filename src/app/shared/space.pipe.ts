import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'space',
  standalone: true
})
export class SpacePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    return ` - ${value} - `

  }
}
