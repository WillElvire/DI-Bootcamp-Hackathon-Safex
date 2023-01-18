import { ConfirmChequeComponent } from './../views/dashboard/confirm-cheque/confirm-cheque.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../views/dashboard/home/home.component';
import { DemandeChequeComponent } from '../views/dashboard/demande-cheque/demande-cheque.component';
import { DashboardRoutingModule } from '../routes/dashboard.route';
import { HistoryComponent } from '../views/dashboard/history/history.component';
import { SharedModule } from './shared.module';
import { ReportingComponent } from '../views/dashboard/reporting/reporting.component';
import { ServicesModule } from './services.module';



@NgModule({
  declarations : [HomeComponent , ConfirmChequeComponent , DemandeChequeComponent, HistoryComponent, ReportingComponent],
  providers : [ServicesModule],
  imports : [CommonModule, FormsModule , DashboardRoutingModule , SharedModule],
  exports : [HomeComponent , ConfirmChequeComponent , DemandeChequeComponent],
  bootstrap :[]
})
export class DashboardModule  {

}
