import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { LandingComponent } from '../views/simple/landing/landing.component';
import { AboutComponent } from '../views/simple/about/about.component';
import { SimpleRoutingModule } from '../routes/simple.route';



@NgModule({
  declarations : [LandingComponent , AboutComponent ],
  providers : [],
  imports : [CommonModule, FormsModule , SimpleRoutingModule],
  exports : [LandingComponent , AboutComponent],
  bootstrap :[]
})
export class SimpleModule  {

}
