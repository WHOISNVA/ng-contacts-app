import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './Contact';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: Contact[], startWith: string): any {
    let temp: Contact[] = [];
    temp = array.filter(contact => contact.name.startsWith(startWith));
    return temp;
  }

}
