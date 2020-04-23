import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { AddDataService } from '../add-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  queryString = '';
  newGuy;

  constructor(private addDataService: AddDataService) { }

  ngOnInit(): void {
    this.newGuy = this.addDataService.newContact();
    this.people.push(this.newGuy);
  }
  
  callingAlert(name: String){
    alert("Now Calling " + name);
  }


  people: Contact[] = [
    {
    name: 'Jon Snow',
    phoneNumber: 31078456732,
    email: 'bravesnow@gmail.com',
    profession: 'Engineer',
    birthday: new Date('February 9, 16')
    },
    {
      name: 'Arya Stark',
      phoneNumber: 31078456732,
      email: 'littleassasin@gmail.com',
      profession: 'Scientist',
      birthday: new Date('October 25, 24')
      },
      {
        name: 'Daenerys Targaryen',
        phoneNumber: 8478920398,
        email: 'dragonqueen@gmail.com',
        profession: 'Princess',
        birthday: new Date('January 5, 18')
        },
  ];

}
