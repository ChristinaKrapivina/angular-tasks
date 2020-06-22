import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lecture2Component } from './lectures/lecture2/lecture2.component';
import { Lecture3Component } from './lectures/lecture3/lecture3.component';
import { Lecture4Component } from './lectures/lecture4/lecture4.component';
import { Lecture5Component } from './lectures/lecture5/lecture5.component';


const routes: Routes = [
  { path: 'lecture2', component: Lecture2Component },
  { path: 'lecture3', component: Lecture3Component },
  { path: 'lecture4', component: Lecture4Component },
  { path: 'lecture5', component: Lecture5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
