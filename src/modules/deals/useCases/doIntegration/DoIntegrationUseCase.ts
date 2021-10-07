import axios from 'axios'
import { convertToXML } from '../../helpers/convertToXML';
import { DealsRepository } from '../../repositories/implementations/DealsRepository';
import 'dotenv/config'
async function getData(url:string) {
  const result = await axios.get(url)
  return result
}

interface IEmailPerson {
  label: string;
  value: string;
  primary: boolean;
}

interface IPerson {
  name: string;
  email: IEmailPerson[];
}

interface IDeal {
  person_id: IPerson; 
  title: string;
  value: string;
  add_time: string;
  status:string;
}

const url_bling = 'https://bling.com.br/Api/v2/pedido/json/';

class DoIntegrationUseCase{
constructor(private dealsRepository: DealsRepository){}
 async execute() {
    const urlGetDeals = `https://${process.env.PIPEDRIVE_COMPANY_DOMAIN}.pipedrive.com/api/v1/deals?api_token=${process.env.PIPEDRIVE_API_TOKEN}`
    const result:any = await getData(urlGetDeals)
    const {data} =  result;
    let deals =  data.data.filter(({status})=> status === 'won').map( ({ person_id,title, value, add_time, status}:IDeal) => {
      return({
        name:person_id.name,
        email: person_id.email[0].value,
        title,
        value,
        add_time,
        status,
      })
    })
  
    deals.map(deal=> {
      this.dealsRepository.create(deal);
    })
  
    const dealsLoaded = this.dealsRepository.list();
  
    dealsLoaded.map(async deal => {
      const xml = convertToXML(deal);
      try {
        const result:any = await axios.post(url_bling,
          {},
          {
            params: {
              apikey: process.env.BLING_API_KEY,
              xml,
            },
          }
          );
         
      } catch (error) {
        console.log('error',error.message)
      }
      
    })
    
  }

}


export {DoIntegrationUseCase}