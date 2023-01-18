import { guidMaker } from './../services/utils/guid';
import { chequeStatus } from './../enum/cheques';
import { chequeType } from '../enum/cheques';
import { chequeTransaction } from './../interfaces/cheques';

export const getChequesPreloaded   = () : chequeTransaction [] =>{
  return [
    {
      beneficiary  : "wilfried koua",
      amount  : 2000,
      date : "01/01/2023",
      status : chequeStatus.STATUS_2,
      type : chequeType.TYPE_1,
      id: guidMaker(),
      emetteur : "Alexandre gbamele",
    },
   {

    beneficiary  : "Alexandre gbamele",
    amount  : 70000,
    date : "10/22/2022",
    status : chequeStatus.STATUS_1,
    type : chequeType.TYPE_1,
    id: guidMaker(),
    emetteur : "Ngoran cyrille"

   },
   {
      beneficiary  : "wilfried koua",
      amount  : 2000,
      date : "12/12/2022",
      status : chequeStatus.STATUS_3,
      type : chequeType.TYPE_2,
      id: guidMaker(),
      emetteur : " Jean kacou diagou"
   },
   {
    beneficiary  : "wilfried koua",
    amount  : 2000,
    date : "12/25/2022",
    status : chequeStatus.STATUS_2,
    type : chequeType.TYPE_2,
    id: guidMaker() ,
    emetteur : "Bayo amdoulilah"
 }
  ]
}
