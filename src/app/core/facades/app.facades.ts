import { Injectable } from '@angular/core';
import { VerificationService } from '../services/form/verification';
@Injectable()
export class AppFacade {

  constructor(private verificationService : VerificationService){
  }

  verifyField(field : string){
    return this.verificationService.verifyField(field)
  }

  verifyObj(obj : {}) {
    return this.verificationService.verifyObj(obj);
  }
}
