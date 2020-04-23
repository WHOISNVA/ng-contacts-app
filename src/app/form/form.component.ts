import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  modelForm = new FormGroup({
    name: new FormControl('',Validators.required),
    number: new FormControl(),
    email: new FormControl(),
    profession: new FormControl(),
    birthday: new FormControl()
});

  constructor() { }

  onSubmit(value: any){
    console.log(value);
  }

  onModelSubmit(){
    console.log(this.modelForm.value);
  }

  ngOnInit(): void {
  }

}
