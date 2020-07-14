import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Lecture3Component } from './lecture3.component';
import { ControlComponent, OddComponent, EvenComponent } from './components';
import { SubService } from './services';

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
     ],
     providers: [ SubService ]
})
export class Lecture3Module { }