import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexPipe'
})

export class SexPipe implements PipeTransform {

  transform(value: string, literals: any) {
    switch (value) {
      case 'F': {
        return literals['female']
      }
      case 'M': {
        return literals['male'];
      }
      default: {
        return literals['invalidSex'];
      }
    }
  }
}
