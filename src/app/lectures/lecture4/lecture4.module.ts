import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Lecture4Component } from './lecture4.component';
import { PurchaseCreatorComponent, PurchaseListComponent, PurchaseItemComponent, PurchaseComponent } from './components';

@NgModule({
     declarations: [
          Lecture4Component,
          PurchaseCreatorComponent,
          PurchaseListComponent,
          PurchaseItemComponent,
          PurchaseComponent
     ],
     imports: [
          CommonModule,
          FormsModule,
     ]
})
export class Lecture4Module { }