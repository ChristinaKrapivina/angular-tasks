import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { Lecture4Component } from './lecture4.component';
import { PurchaseCreatorComponent, PurchaseListComponent, PurchaseDetailsComponent, PurchaseDashboardComponent } from './components';

const routes: Routes = [
     {
          path: 'lecture4',
          component: Lecture4Component,
          children: [
               {
                    path: '',
                    children: [
                         { path: 'add', component: PurchaseCreatorComponent },
                         { path: 'purchase', component: PurchaseListComponent },
                         { path: 'purchase/:purchaseID', component: PurchaseDetailsComponent },
                         { path: '', component: PurchaseDashboardComponent },
                    ]
               }
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
          PurchaseDetailsComponent
     ]
}