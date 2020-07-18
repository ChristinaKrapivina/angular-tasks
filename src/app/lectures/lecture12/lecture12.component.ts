import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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

  onSubmit(): void {
    if(this.infoForm.value.log) {
      console.log(`Saved values: ${JSON.stringify(this.infoForm.value)}`);
    }
    this.formValues = this.infoForm.value;
    this.infoForm.reset();
  }
  onAddPet(): void {
    const control = new FormControl('', Validators.required);

    (<FormArray>this.infoForm.get('petTypes')).push(control);
  }
  onSetFormValues() {
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
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'passwords': new FormGroup({
        'password': new FormControl('', Validators.required),
        'passwordConfirm': new FormControl('', Validators.required)
      }),
      'petTypes': new FormArray([
        new FormControl('', Validators.required)
      ]),
      'log': new FormControl(false)
    })
  }

}
