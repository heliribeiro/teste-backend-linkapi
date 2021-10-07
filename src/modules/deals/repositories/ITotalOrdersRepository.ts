import { TotalOrders } from "../models/TotalOrders";

interface ICreateTotalOrdersDTO {
  numero: number;
  total_value: number;
  date: Date;
}

interface ITotalOrdersRepository {
  create({numero,total_value, date}:ICreateTotalOrdersDTO):void;
  insertMany(pedidos:ICreateTotalOrdersDTO[]):void;
  update():void;
  list();
}

export {ITotalOrdersRepository, ICreateTotalOrdersDTO}