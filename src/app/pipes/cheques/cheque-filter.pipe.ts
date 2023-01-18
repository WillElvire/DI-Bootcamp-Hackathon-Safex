import { Pipe, PipeTransform } from '@angular/core';
import { chequeTransaction } from 'src/app/core/interfaces/cheques';

@Pipe({
  name: 'chequeFilter',
  standalone : false,
  pure : false
})
export class ChequeFilterPipe implements PipeTransform {

  transform(value: any , filter: string): chequeTransaction[] {
    if(filter == "") {
      return value;
    }
    return value = value.filter((cheque :any)=>{
      return cheque.status == filter;
    });
  }

}
