import { Component } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facades';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers  : [AppFacade]
})
export class SettingsComponent {
   color:string = "";
   preference : any =  {};

   constructor(private appFacade : AppFacade) {

   }
   save(){
      this.preference['color'] = this.color;
      this.appFacade.set('preference', this.preference);
      location.href = "/dashboard/settings"
   }
}
