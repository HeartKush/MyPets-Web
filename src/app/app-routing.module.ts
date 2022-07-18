import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/public/public-routing.module').then(m => m.PublicRoutingModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/admin/admin-routing.module').then(m => m.AdminRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
