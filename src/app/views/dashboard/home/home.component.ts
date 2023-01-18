import { getChequesPreloaded } from 'src/app/core/mocks/cheques';
import { chequeTransaction } from './../../../core/interfaces/cheques';
import { Component, OnInit } from '@angular/core';
import { chequeStatus, chequeType } from 'src/app/core/enum/cheques';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cheques : chequeTransaction[] = getChequesPreloaded();
  isLoad : boolean = false;

  constructor(private router : Router){

  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isLoad = true;
    },1000)
  }
  gotoHistory(){
    this.router.navigate(["/dashboard/history"]);
  }

}
