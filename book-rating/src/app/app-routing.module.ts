import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    // scrollPositionRestoration: 'enabled' --- use this, when we have state management in place!
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
