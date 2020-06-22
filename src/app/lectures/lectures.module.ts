import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Lecture2Component } from './lecture2/lecture2.component';

import { Lecture3Module } from './lecture3/lecture3.module';
import { Lecture4Module } from './lecture4/lecture4.module';

@NgModule({
     declarations: [
          Lecture2Component,
     ],
     imports: [
          CommonModule,
          FormsModule,
          Lecture3Module,
          Lecture4Module
     ]
})
export class LecturesModule { }