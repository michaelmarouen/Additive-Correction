import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: string): string {

    let result = '#f44336';
    switch (true) {
      case value === '0':
        result = '#4caf50'; // green lighten
        break;
      case value === '1':
        result = '#ffa726'; // orange lighten
        break;
      case value === '2':
        result = '#ff7043'; // deep orange lighten
        break;
      case value === '3':
        result = '#f44336'; // red lighten
        break;
      default:
        break;
    }

    return result;
  }
}
