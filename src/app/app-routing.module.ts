import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'auth',
    loadChildren : () =>import("./modules/authentication.module").then((m)=> m.AuthenticationModule)
  },
  {
    path  : 'dashboard',
    loadChildren : () => import("./modules/dashboard.module").then((m)=> m.DashboardModule)
  },
  {
    path  : 'simple',
    loadChildren : () => import("./modules/simple.module").then((m)=> m.SimpleModule)
  },
  {
    path : '',
    redirectTo : 'simple',
    pathMatch : 'full'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
