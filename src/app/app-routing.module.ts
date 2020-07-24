import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { Lecture2Component } from './lectures/lecture2/lecture2.component';
import { Lecture3Component } from './lectures/lecture3/lecture3.component';
import { Lecture5Component } from './lectures/lecture5/lecture5.component';
import { Lecture11Component } from './lectures/lecture11/lecture11.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Lecture12Component } from './lectures/lecture12/lecture12.component';
import { Lecture13Component } from './lectures/lecture13/lecture13.component';


const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'lecture2', component: Lecture2Component },
  { path: 'lecture3', component: Lecture3Component },
  { path: 'lecture5', component: Lecture5Component },
  { path: 'lecture11', component: Lecture11Component },
  { path: 'lecture12', component: Lecture12Component },
  { path: 'lecture13', component: Lecture13Component },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
