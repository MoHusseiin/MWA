import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiPipe'
})
export class MultiPipePipe implements PipeTransform {

  transform(value: any, args?: any): String {
    return value+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +value+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +value;
  }

}
