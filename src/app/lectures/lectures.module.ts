import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Lecture2Component } from './lecture2/lecture2.component';
import { Lecture11Component } from './lecture11/lecture11.component';
import { Lecture12Component } from './lecture12/lecture12.component';
import { Lecture13Component } from './lecture13/lecture13.component';

import { Lecture3Module } from './lecture3/lecture3.module';
import { Lecture4Module } from './lecture4/lecture4.module';
import { Lecture5Module } from './lecture5/lecture5.module';

@NgModule({
     declarations: [
          Lecture2Component,
          Lecture11Component,
          Lecture12Component,
          Lecture13Component,
     ],
     imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          Lecture3Module,
          Lecture4Module,
          Lecture5Module
     ]
})
export class LecturesModule { }