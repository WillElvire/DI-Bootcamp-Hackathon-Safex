import { Injectable } from '@angular/core';


@Injectable()
export class AlertBuilder {

  alertType : string = "error";

  constructor() {

  }

  setAlertType(alertType : string){
    this.alertType = alertType;
  }

  getAlertType() {
    return this.alertType;
  }

  buildError() {
    this.setAlertType("error");
    return this.build();
  }

  buildSuccess() {
    this.setAlertType("success");
    return this.build();
  }

  buildWarning() {
    this.setAlertType("warning");
    return this.build();
  }

  build() {
    const color : string[]  = ["red","orangered","forestgreen"];
    const snachBar = "";
    return snachBar;
  }
}
