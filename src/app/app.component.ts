import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Contact } from './Contact';
import { AddDataService } from './add-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ContactsApp';
  counterVar: false;
  queryString = '';
  toolbarColor: String;
  imageIcon = "https://library.wwu.edu/files/Icon-Phone.png";
  colorChosen;
  bestfriend = 'Arya Stark';
  appDescription = 'This is a contact book style app. Thats shows the list of people and has other cool features';
  newGuy;

  constructor(private addDataService: AddDataService){
  }

  ngOnInit() {
    this.newGuy = this.addDataService.newContact();
    this.people.push(this.newGuy);
  }

  callingAlert(name: String){
    alert("Now Calling " + name);
  }

  colorSelect(color: string){
    this.toolbarColor = color;
  }

  ngOnChanges(){
    
  }
  
  themeColors = ['red','blue', 'green', 'yellow', 'orange', 'purple'];

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
