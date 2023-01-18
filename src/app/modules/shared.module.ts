import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { SimpleRoutingModule } from '../routes/simple.route';
import { ChequeItemComponent } from '../shared/components/cheque-item/cheque-item.component';
import { ChequeListComponent } from '../shared/components/cheque-list/cheque-list.component';
import { BackButtonComponent } from '../shared/widgets/back-button/back-button.component';



@NgModule({
  declarations : [
    ChequeItemComponent, ChequeListComponent, BackButtonComponent
  ],
  providers : [],
  imports : [CommonModule, FormsModule , SimpleRoutingModule],
  exports : [ChequeItemComponent,ChequeListComponent,BackButtonComponent],
  bootstrap :[]
})
export class SharedModule  {

}
