import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class ValidationMessageService {


  validationErrorObj = [];


  public getValidationMsg(validationId: any): string {
    console.log(validationId);
    return this.validationErrorObj[validationId];
  }


}
