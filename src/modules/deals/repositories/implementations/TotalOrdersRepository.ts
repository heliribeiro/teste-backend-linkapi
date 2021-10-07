import { TotalOrders } from "../../models/TotalOrders";
import { ICreateTotalOrdersDTO, ITotalOrdersRepository } from "../ITotalOrdersRepository";

class TotalOrdersRepositoy implements ITotalOrdersRepository{

   async create({numero, total_value, date}:ICreateTotalOrdersDTO): Promise<void> {
    const newTotalOrder = await TotalOrders.create(
      {
        numero,
        total_value,
        date
      }
    )
    console.log(newTotalOrder)
  }

   async insertMany(pedidos:ICreateTotalOrdersDTO[]):Promise<void> {
    const manyTotal = await TotalOrders.insertMany(pedidos)
  }

  update(): void {
    throw new Error("Method not implemented.");
  }
  async list() {
    return await TotalOrders.find();
  }


}

export {TotalOrdersRepositoy}