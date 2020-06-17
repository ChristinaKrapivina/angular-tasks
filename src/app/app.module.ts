import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lecture2Component } from './lecture2/lecture2.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { Lecture3Component } from './lecture3/lecture3.component';
import { ControlComponent } from './lecture3/control/control.component';
import { OddComponent } from './lecture3/odd/odd.component';
import { EvenComponent } from './lecture3/even/even.component';
import { Lecture4Component } from './lecture4/lecture4.component';
import { PurchaseCreatorComponent } from './purchase-creator/purchase-creator.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseItemComponent } from './purchase-item/purchase-item.component';

@NgModule({
  declarations: [
    AppComponent,
    Lecture2Component,
    TopBarComponent,
    Lecture3Component,
    ControlComponent,
    OddComponent,
    EvenComponent,
    Lecture4Component,
    PurchaseCreatorComponent,
    PurchaseListComponent,
    PurchaseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
