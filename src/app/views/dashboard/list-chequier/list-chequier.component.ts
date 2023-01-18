import { AppFacade } from './../../../core/facades/app.facades';
import { Component, Self, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-chequier',
  templateUrl: './list-chequier.component.html',
  styleUrls: ['./list-chequier.component.scss'],
  providers : [AppFacade]
})
export class ListChequierComponent implements OnInit {

  chequier : any;

  constructor(@Self()private appFacade : AppFacade){

  }

  ngOnInit(): void {
   this.appFacade.get("chequier").subscribe((responce)=>{
     this.chequier  = JSON.parse(responce);
     console.log(this.chequier)
   });
  }

}
