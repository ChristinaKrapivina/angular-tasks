import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Lecture5Component } from './lecture5.component';
import { FocusDirective, ShowHideDirective, HoverChangeDirective } from './directives';

@NgModule({
     declarations: [
          Lecture5Component,
          FocusDirective,
          ShowHideDirective,
          HoverChangeDirective,
     ],
     imports: [
          CommonModule,
          FormsModule,
     ]
})
export class Lecture5Module { }