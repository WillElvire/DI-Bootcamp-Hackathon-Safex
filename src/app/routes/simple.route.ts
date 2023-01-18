import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { LandingComponent } from '../views/simple/landing/landing.component';
import { AboutComponent } from '../views/simple/about/about.component';

const routes : Route[] = [
  {
    path  : '',
    redirectTo : 'landing',
    pathMatch : 'full'
  }
  ,
  {
    path :'landing',
    component :  LandingComponent
  },
  {
    path : 'about',
    component  : AboutComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class SimpleRoutingModule {

}
