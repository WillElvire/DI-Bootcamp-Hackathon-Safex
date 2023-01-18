import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from '../views/authentication/login/login.component';
import { RegisterComponent } from '../views/authentication/register/register.component';
import { ForgotPasswordComponent } from '../views/authentication/forgot-password/forgot-password.component';

const routes : Route[] = [
  {
    path  : '',
    redirectTo : 'login',
    pathMatch : 'full'
  }
  ,
  {
    path :'login',
    component :  LoginComponent
  },
  {
    path : 'register',
    component  : RegisterComponent
  },
  {
    path : 'forgot-password',
    component : ForgotPasswordComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class AuthentificationRoutingModule {

}
