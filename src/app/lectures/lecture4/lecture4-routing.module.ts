import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { Lecture4Component } from './lecture4.component';
import { PurchaseCreatorComponent, PurchaseListComponent, PurchaseDetailsComponent, PurchaseDashboardComponent, PurchaseEditorComponent, LoginComponent } from './components';
import { AuthGuard, ConfirmGuard, PurchaseResolveGuard } from './guards';

const routes: Routes = [
  {
    path: 'lecture4',
    component: Lecture4Component,
    children: [
      { path: 'add', component: PurchaseCreatorComponent },
      {
        path: 'purchase',
        component: PurchaseListComponent,
        canActivate: [AuthGuard],
        children:[
          {
            path: ':purchaseID',
            component: PurchaseDetailsComponent,
            resolve: {
              purchase: PurchaseResolveGuard
            }
          },
          {
            path: ':purchaseID/edit',
            component: PurchaseEditorComponent,
            resolve: {
              purchase: PurchaseResolveGuard
            },
            canDeactivate: [ConfirmGuard]
          },
        ]
      },
      { path: 'login', component: LoginComponent },
      { path: '', component: PurchaseDashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lecture4RoutingModule {
  static components = [
    Lecture4Component,
    PurchaseCreatorComponent,
    PurchaseListComponent,
    PurchaseDetailsComponent,
    PurchaseEditorComponent,
    LoginComponent
  ]
}