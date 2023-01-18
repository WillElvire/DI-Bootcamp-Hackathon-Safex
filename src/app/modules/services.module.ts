import { NgModule } from "@angular/core";
import { AppFacade } from "../core/facades/app.facades";
import { VerificationService } from "../core/services/form/verification";

@NgModule({
  declarations : [],
  providers : [VerificationService,AppFacade],
  imports : [],
  exports : [],
  bootstrap :[]
})
export class ServicesModule  {

}
