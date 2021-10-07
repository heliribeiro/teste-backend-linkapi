import axios from 'axios';
import 'dotenv/config'
import { TotalOrdersRepositoy } from '../../repositories/implementations/TotalOrdersRepository';


const url = `https://bling.com.br/Api/v2/pedidos/json&apikey=${process.env.BLING_API_KEY}`

class ImportFromBlingUseCase{
  constructor(private totalOrdersRepository: TotalOrdersRepositoy){}

  async execute(){
  
  const result:any = await axios.get(url)

  let orders = result.data.retorno.pedidos.map(({pedido}) => {
    return({
      numero:pedido.numero,
      total_value:pedido.totalprodutos,
      date: new Date(pedido.data.split('-'))
    });
  })
  await this.totalOrdersRepository.insertMany(orders)
  }
}


export {ImportFromBlingUseCase}