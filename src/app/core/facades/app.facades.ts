import { Injectable } from '@angular/core';
import { VerificationService } from '../services/form/verification';
import { StorageService } from '../services/storage';
@Injectable()
export class AppFacade {

  constructor(private verificationService : VerificationService , private storageService : StorageService){
  }

  verifyField(field : string){
    return this.verificationService.verifyField(field)
  }

  verifyObj(obj : {}) {
    return this.verificationService.verifyObj(obj);
  }

  set(key : string , value :any){
   this.storageService.set(key,value);
  }

  get(key:string) {
    return this.storageService.get(key)
  }
}
