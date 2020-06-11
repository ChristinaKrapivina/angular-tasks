import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { Lecture3Component } from './lecture3/lecture3.component';


const routes: Routes = [
  { path: 'lecture2', component: InputComponent },
  { path: 'lecture3', component: Lecture3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
