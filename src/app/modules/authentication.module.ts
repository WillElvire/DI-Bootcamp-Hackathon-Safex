import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RegisterComponent } from "../views/authentication/register/register.component";
import { LoginComponent } from "../views/authentication/login/login.component";
import { ForgotPasswordComponent } from "../views/authentication/forgot-password/forgot-password.component";
import { FormsModule } from '@angular/forms';
import { AuthentificationRoutingModule } from '../routes/authentication.route';
import { RouterModule } from '@angular/router';
import { AppFacade } from '../core/facades/app.facades';


@NgModule({
  declarations : [RegisterComponent , LoginComponent , ForgotPasswordComponent],
  providers : [AppFacade],
  imports : [CommonModule, FormsModule , AuthentificationRoutingModule , RouterModule],
  exports : [],
  bootstrap :[]
})
export class AuthenticationModule  {

}
