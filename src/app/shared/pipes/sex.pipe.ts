import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexPipe'
})

export class SexPipe implements PipeTransform {

  transform(value: string) {
    switch (value) {
      case 'F': {
        return 'Feminino';
      }
      case 'M': {
        return 'Masculino';
      }
      default: {
        return 'Inválido';
      }
    }
  }
}
