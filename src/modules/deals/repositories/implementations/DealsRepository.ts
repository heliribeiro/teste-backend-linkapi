import { Deal } from "../../models/Deal";
import { IDealsRepository, ICreateDealDTO } from "../IDealsRepository";

class DealsRepository implements IDealsRepository{
  private deals:Deal[];

  private static INSTANCE:DealsRepository;

  constructor(){
    this.deals = [];
  }

  public static getInstance(): DealsRepository{
    if(!DealsRepository.INSTANCE){
      DealsRepository.INSTANCE = new DealsRepository;
    }
    return DealsRepository.INSTANCE;
  }


  create({name, email, title, value,add_time,products_count,status}:ICreateDealDTO): void {
     const deal = new Deal();
     Object.assign(deal,{
       name,
       email,
       title,
       value,
       add_time,
       products_count,
       status
     })
     this.deals.push(deal);
  }
  list(): Deal[] {
    return this.deals;
  }
  
}

export {DealsRepository}