import { Injectable } from '@angular/core';
import { Contact } from './Contact';

@Injectable({
  providedIn: 'root'
})
export class AddDataService {

  constructor() { }

  newContact(){
    var tyrion = { name: 'Tyrion Lanister', phoneNumber: 31077456732, email: 'slickplayer@gmail.com', profession: 'Politician', birthday: new Date('December 10, 26') }
    return tyrion;
}
}
