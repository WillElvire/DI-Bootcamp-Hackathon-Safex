import { Component,Self,SkipSelf } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facades';

@Component({
  selector: 'app-demande-cheque',
  templateUrl: './demande-cheque.component.html',
  styleUrls: ['./demande-cheque.component.scss'],
  providers : [AppFacade]
})
export class DemandeChequeComponent {

  cheque =  {
    nbFeuille : 0,
    tpCheque  : ""
  }

  constructor(@Self() private appFacade : AppFacade){

  }

  addNewChequier(){
    const x = this.appFacade.verifyField(this.cheque.nbFeuille.toString());
    console.log(x);
  }
}
