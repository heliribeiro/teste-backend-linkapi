
interface IXML {
  name: string;
  email: string;
  title: string;
  value: string;
  add_time: string;
  status: string;
}

const convertToXML = ({name,email,title,value,add_time,status}) => `
<?xml version="1.0" encoding="UTF-8"?>
<pedido>
 <cliente>
 <nome>${name}</nome>
 <email>${email}</email>
 </cliente>
 <itens>
 <item>
 <codigo>001</codigo>
 <descricao>${title}</descricao>
 <qtde>1</qtde>
 <vlr_unit>${value}</vlr_unit>
 </item>
 </itens>
 <parcelas>
 <parcela>
 <data>${add_time}</data>
 <vlr>${value}</vlr>
 </parcela>
 </parcelas>
 <obs>${status}</obs>
</pedido>
`;

export {convertToXML}