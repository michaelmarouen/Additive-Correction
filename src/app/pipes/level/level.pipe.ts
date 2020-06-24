import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(value: string): string {
    let result = 'rien';
    switch (true) {
      case value === '0':
        result = 'acceptable';
        break;
      case value === '1':
        result = 'rapports contradictoires';
        break;
      case value === '2':
        result = 'à risque';
        break;
      case value === '3':
        result = 'à éviter';
        break;
      default:
        break;
    }

    return result;
  }

}
