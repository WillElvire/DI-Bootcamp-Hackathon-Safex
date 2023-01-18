import { Component, Self } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facades';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers : [AppFacade]
})
export class LoginComponent {

  constructor(@Self() private appFacade : AppFacade){
   console.log(appFacade.verifyField(""))
  }
}
