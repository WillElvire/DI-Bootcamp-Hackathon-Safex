import { ChequeFilterPipe } from 'src/app/pipes/cheques/cheque-filter.pipe';
import { chequeTransaction } from './../../../core/interfaces/cheques';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cheque-list',
  templateUrl: './cheque-list.component.html',
  styleUrls: ['./cheque-list.component.scss'],
  providers:[ChequeFilterPipe]
})
export class ChequeListComponent {

  @Input('cheques') data ?: chequeTransaction[];
  @Input('filtre') activate : boolean = false;
  cheques  ?: chequeTransaction[];
  isLoad : boolean = false;
  filter : string =""

  constructor(){
    setTimeout(()=>{
      this.cheques = this.data;
      this.isLoad = true;
    },1000);
  }

  setFilterType(event :any){
     this.filter  = event.target.value;
     console.log(this.filter)
  }
}
