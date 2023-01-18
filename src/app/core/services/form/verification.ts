import { Injectable } from "@angular/core";

@Injectable({
  providedIn : "root"
})
export class  VerificationService {

  constructor(){

  }

  verifyField(field : any ) {
    return !!field;
  }

  verifyObj(obj : {}) {
    let count = 0;
    Object.values(obj).forEach((value)=>{
      if(!value) {
        count ++;
      }
    })
    return count;
  }

}
