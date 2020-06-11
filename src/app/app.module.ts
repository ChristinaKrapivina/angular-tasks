import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { Lecture3Component } from './lecture3/lecture3.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TopBarComponent,
    Lecture3Component
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
