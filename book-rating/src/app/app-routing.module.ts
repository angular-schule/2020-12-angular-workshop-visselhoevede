import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'books', loadChildren:
    () => import('./books/books.module').then(m => m.BooksModule)
  },
  { path: '**', redirectTo: 'books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    // scrollPositionRestoration: 'enabled' --- use this, when we have state management in place!
    scrollPositionRestoration: 'top',
    preloadingStrategy: NoPreloading
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
