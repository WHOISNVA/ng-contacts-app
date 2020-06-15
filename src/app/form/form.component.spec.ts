import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Contact } from '../Contact';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule ],
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form should be invalid when empty', () => {
    expect(component.modelForm.valid).toBeFalsy();
  })
 
  it('name field validity', () => {
    let name = component.modelForm.controls['name'];
    expect(name.valid).toBeFalsy();

    let errors = {};
    errors = name.errors
    expect(errors['required']).toBeTruthy();

    name.setValue("Nova");
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
  }) 

  it('submitting a form logs a contact', () => {
    expect(component.modelForm.valid).toBeFalsy();
    component.modelForm.controls['name'].setValue("Nova");
    component.modelForm.controls['number'].setValue(7287172817);
    expect(component.modelForm.valid).toBeTruthy();

    let contact: Contact;
    component.onModelSubmit();

    expect(contact.name).toBe("Nova");
    expect(contact.phoneNumber).toBe(7287172817);
  })

});
