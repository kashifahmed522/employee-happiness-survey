import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./customers/customers.module').then((m) => m.CustomersModule),
  // },
  {
    path: '',
    loadChildren: () =>
      import('./books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'survey', loadChildren: () => import('./survey/survey.module').then(m => m.SurveyModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
