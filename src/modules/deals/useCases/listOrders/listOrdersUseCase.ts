import axios from 'axios';
import 'dotenv/config'
import { TotalOrdersRepositoy } from '../../repositories/implementations/TotalOrdersRepository';


class ListOrdersUseCase{
  constructor(private totalOrdersRepository: TotalOrdersRepositoy){}

  async execute(){
  const allOrders = await this.totalOrdersRepository.list();
  return allOrders
  }
}

export {ListOrdersUseCase}