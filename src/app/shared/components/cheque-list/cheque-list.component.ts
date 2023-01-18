import { chequeTransaction } from './../../../core/interfaces/cheques';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cheque-list',
  templateUrl: './cheque-list.component.html',
  styleUrls: ['./cheque-list.component.scss']
})
export class ChequeListComponent {

  @Input('cheques') data ?: chequeTransaction[];
  cheques  ?: chequeTransaction[];
  isLoad : boolean = false;

  constructor(){
    setTimeout(()=>{
      this.cheques = this.data;
      this.isLoad = true;
    },1000);
  }
}
