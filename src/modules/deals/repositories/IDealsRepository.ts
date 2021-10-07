import { Deal } from "../models/Deal";

interface ICreateDealDTO {
  name: string;
  email: string;
  title: string;
  value: string;
  add_time: string;
  products_count:string;
  status: string;
}

interface IDealsRepository {
  create({name,email,title,value,products_count,status}:ICreateDealDTO):void;
  list():Deal[];
}
export {IDealsRepository, ICreateDealDTO}