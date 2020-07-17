import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lecture11',
  templateUrl: './lecture11.component.html',
  styleUrls: ['./lecture11.component.scss']
})
export class Lecture11Component implements OnInit {
  @ViewChild('ckForm') customForm: NgForm;

  formValues: {[key: string]: string | boolean };
  pets: string[] = ['cat', 'dog', 'parrot', 'monkey', 'snake'];

  constructor() { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    if(form.value.log) {
      console.log(`Saved values: ${JSON.stringify(form.value)}`);
    }
    this.formValues = form.value;
    form.reset();
  }
}