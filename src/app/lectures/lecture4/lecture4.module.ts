import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../../app-routing.module';

import { Lecture4Component } from './lecture4.component';
import { PurchaseCreatorComponent, PurchaseListComponent, PurchaseComponent } from './components';
import { PurchaseService, AlertService } from './services';

@NgModule({
     declarations: [
          Lecture4Component,
          PurchaseCreatorComponent,
          PurchaseListComponent,
          PurchaseComponent,
     ],
     imports: [
          CommonModule,
          FormsModule,
          AppRoutingModule
     ],
     providers: [
          AlertService,
          PurchaseService
     ]
})
export class Lecture4Module { }