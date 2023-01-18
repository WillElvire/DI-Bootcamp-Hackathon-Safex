import { chequeTransaction } from 'src/app/core/interfaces/cheques';
import { getChequesPreloaded } from './../../../core/mocks/cheques';
import { Component, OnInit } from '@angular/core';
import { chequeStatus, chequeType } from 'src/app/core/enum/cheques';
import { guidMaker } from 'src/app/core/services/utils/guid';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  cheques : chequeTransaction[] = getChequesPreloaded();

  ngOnInit(){
    for(let i = 0 ; i < 4 ; i++) {
      this.cheques.push({
        beneficiary  : "wilfried koua",
        amount  : 2000,
        date : "01/01/2023",
        status : chequeStatus.STATUS_2,
        type : chequeType.TYPE_1,
        id: guidMaker(),
        emetteur : " Jean kacou diagou"
      },)
    }

  }
}
