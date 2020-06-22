import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Lecture4Component } from './lecture4.component';
import { PurchaseCreatorComponent } from './purchase-creator/purchase-creator.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseItemComponent } from './purchase-item/purchase-item.component';
import { PurchaseComponent } from './purchase-list/purchase/purchase.component';

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