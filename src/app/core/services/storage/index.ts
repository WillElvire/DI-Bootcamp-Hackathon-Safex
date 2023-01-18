import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn  : 'root'
})
export class StorageService {
  constructor() {

  }

  set(key :string ,value : any) {
    localStorage.setItem(key,JSON.stringify(value));
  }

  get(key :string) {
    return of(localStorage.getItem(key) as any)
  }
}
