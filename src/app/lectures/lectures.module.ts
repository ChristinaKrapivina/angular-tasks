import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Lecture2Component } from './lecture2/lecture2.component';
import { Lecture11Component } from './lecture11/lecture11.component';
import { Lecture12Component } from './lecture12/lecture12.component';
import { Lecture13Component } from './lecture13/lecture13.component';

import { Lecture3Module } from './lecture3/lecture3.module';
import { Lecture4Module } from './lecture4/lecture4.module';
import { Lecture5Module } from './lecture5/lecture5.module';

import { ConsoleInterceptor } from './lecture13/interceptors';

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
    HttpClientModule,
    Lecture3Module,
    Lecture4Module,
    Lecture5Module
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ConsoleInterceptor, multi: true }
  ]
})
export class LecturesModule { }