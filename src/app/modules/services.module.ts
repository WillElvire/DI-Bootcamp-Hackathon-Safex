import { NgModule } from "@angular/core";
import { AppFacade } from "../core/facades/app.facades";
import { VerificationService } from "../core/services/form/verification";
import { StorageService } from "../core/services/storage";

@NgModule({
  declarations : [],
  providers : [VerificationService,StorageService,AppFacade],
  imports : [],
  exports : [],
  bootstrap :[]
})
export class ServicesModule  {

}
