import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Lecture3Component } from './lecture3.component';
import { ControlComponent } from './control/control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
     declarations: [
          Lecture3Component,
          ControlComponent,
          OddComponent,
          EvenComponent,
     ],
     imports: [
          CommonModule,
          FormsModule,
     ]
})
export class Lecture3Module { }