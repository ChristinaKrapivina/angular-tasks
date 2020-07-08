import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Lecture4RoutingModule } from './lecture4-routing.module';

import { PurchaseService, AlertService, AuthService } from './services';
import { PurchaseComponent } from './components';
import { AuthGuard, ConfirmGuard, PurchaseResolveGuard } from './guards';

@NgModule({
     declarations: [
          Lecture4RoutingModule.components,
          PurchaseComponent,
     ],
     imports: [
          CommonModule,
          FormsModule,
          Lecture4RoutingModule
     ],
     providers: [
          AlertService,
          PurchaseService,
          AuthService,
          AuthGuard,
          ConfirmGuard,
          PurchaseResolveGuard
     ]
})
export class Lecture4Module { }