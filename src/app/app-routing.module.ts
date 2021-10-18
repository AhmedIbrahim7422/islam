import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =  [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {
    path: 'landing',
    loadChildren: () => import('./layouts/landing.module').then(m => m.LandingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
