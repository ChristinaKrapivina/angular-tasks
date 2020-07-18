import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { CustomValidators } from './validators/custom.validators';
import { AsyncValidators } from './validators/async.validators';

@Component({
  selector: 'app-lecture12',
  templateUrl: './lecture12.component.html',
  styleUrls: ['./lecture12.component.scss']
})
export class Lecture12Component implements OnInit {
  infoForm: FormGroup;
  pets: string[] = ['cat', 'dog', 'parrot', 'monkey', 'snake'];
  formValues: {[key: string]: string | boolean };
  
  get petTypes() {
    return (this.infoForm.get('petTypes') as FormArray).controls;
  }

  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }
  // ngDoCheck() {
  //   console.log(this.infoForm)
  // }

  onSubmit(): void {
    if(this.infoForm.value.log) {
      console.log(`Saved values: ${JSON.stringify(this.infoForm.value)}`);
    }
    this.formValues = this.infoForm.value;
    this.infoForm.reset();
  }
  onAddPet(): void {
    const control = this.createRequiredControl('');
    (<FormArray>this.infoForm.get('petTypes')).push(control);
  }
  onSetFormValues() {
    const formArray = this.infoForm.get('petTypes') as FormArray;
    if (formArray.length > 1) {
      for(let i = formArray.length - 1; i !== 0; i--) {
        formArray.removeAt(i);
       
      }
    }

    this.infoForm.setValue({
      name: 'Christina',
      email: 'ck@email.com',
      passwords: {
        password: '123',
        passwordConfirm: '123'
      },
      petTypes: [this.pets[0]],
      log: false
    })
  }
  onClearForm() {
    this.infoForm.reset();
  }

  private buildForm(): void {
    this.infoForm = new FormGroup({
      'name': new FormControl('', 
        [
          Validators.required,
          Validators.minLength(3),
          CustomValidators.nameIsNotTest
        ],
        AsyncValidators.checkForbiddenName
        ),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]),
      'passwords': new FormGroup(
        {
          'password': this.createRequiredControl(''),
          'passwordConfirm': this.createRequiredControl('')
        },
        CustomValidators.passwordMatch('password', 'passwordConfirm')
      ),
      'petTypes': new FormArray([
        this.createRequiredControl('')
      ]),
      'log': new FormControl(false)
    })
  }
  private createRequiredControl(controlValue: string): AbstractControl {
    return new FormControl(controlValue, Validators.required);
  }

}
