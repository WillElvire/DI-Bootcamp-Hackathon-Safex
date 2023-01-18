import { Component,Self,SkipSelf } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facades';
import { guidMaker } from 'src/app/core/services/utils/guid';

@Component({
  selector: 'app-demande-cheque',
  templateUrl: './demande-cheque.component.html',
  styleUrls: ['./demande-cheque.component.scss'],
  providers : [AppFacade]
})
export class DemandeChequeComponent {

  cheque =  {
    nbFeuille : 0,
    titre     : "",
    tpCheque  : "",
    id : guidMaker(),
    date : new Date(),
    key : guidMaker(),
    user : {
      name : "Koua",
      lastname : "Wilfried",
      country : "CI",
      phone : "0103659060"
    },
  }
  verification : any;
  success : string  = "";
  constructor(@Self() private appFacade : AppFacade){

  }

  addNewChequier(){
    this.verification = this.appFacade.verifyObj(this.cheque);
    if(this.verification.count == 0) {
      /*this.appFacade.get("chequier").subscribe((chequiers)=>{
        const chequier : any = JSON.parse(chequiers) as [];
        console.log(chequier)
        this.appFacade.set("chequier",chequier != null && typeof chequier == "object" ? chequier.push(this.cheque) : [this.cheque]);
      }) */
      this.appFacade.set("chequier",this.cheque);
      this.success = "Votre demande de cheque a été pris en compte";
    }
  }

  formatTotable(index :number){
   return Object.keys(this.cheque)[index];
  }
}
