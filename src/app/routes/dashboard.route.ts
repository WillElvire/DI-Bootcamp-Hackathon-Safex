import { HomeComponent } from './../views/dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { ConfirmChequeComponent } from '../views/dashboard/confirm-cheque/confirm-cheque.component';
import { DashboardLayoutComponent } from '../layouts/dashboard-layout/dashboard-layout.component';
import { ListChequeComponent } from '../views/dashboard/list-cheque/list-cheque.component';
import { HistoryComponent } from '../views/dashboard/history/history.component';
import { DemandeChequeComponent } from '../views/dashboard/demande-cheque/demande-cheque.component';
import { ReportingComponent } from '../views/dashboard/reporting/reporting.component';
import { ListChequierComponent } from '../views/dashboard/list-chequier/list-chequier.component';
import { SettingsComponent } from '../views/dashboard/settings/settings.component';

const routes : Route[] = [
  {
    path :'dashboard',
    component :  DashboardLayoutComponent,
    children : [
      {
        path : 'demande-cheque',
        component  : DemandeChequeComponent
      },
      {
        path : 'reporting',
        component  : ReportingComponent
      },
      {
        path : 'confirm-cheque',
        component  : ConfirmChequeComponent
      },
      {
        path : 'confirm-cheque',
        component : ConfirmChequeComponent
      },
      {
        path : 'list-chequier',
        component : ListChequierComponent
      },
      {
        path : 'settings',
        component : SettingsComponent
      },
      {
        path :'cheque-list',
        component : ListChequeComponent
      },
      {
        path :'history',
        component : HistoryComponent
      },
      {
        path : 'home',
        component : HomeComponent
      },{
        path : '',
        pathMatch  : 'full',
        redirectTo : 'home'
      }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class DashboardRoutingModule {

}
