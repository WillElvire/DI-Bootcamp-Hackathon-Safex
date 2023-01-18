export interface chequeTransaction {
  id : string;
  beneficiary : string;
  amount : number;
  status : string;
  banque ?: string;
  date   ?: string;
  metadata ?: {};
  type  : string;
  message ?: string;
  emetteur : string;
}
