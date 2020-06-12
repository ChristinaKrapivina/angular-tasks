import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lecture2Component } from './lecture2/lecture2.component';
import { Lecture3Component } from './lecture3/lecture3.component';


const routes: Routes = [
  { path: 'lecture2', component: Lecture2Component },
  { path: 'lecture3', component: Lecture3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
