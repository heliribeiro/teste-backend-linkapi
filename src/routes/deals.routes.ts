import {  Router } from 'express'
import { doIntegrationController } from '../modules/deals/useCases/doIntegration';
import { importFromBlingController } from '../modules/deals/useCases/importFromBling';
import { listOrdersController } from '../modules/deals/useCases/listOrders';

const dealRoutes = Router()

dealRoutes.get('/integration', async(request,response)=> {
  return doIntegrationController.handle(request,response)
})

dealRoutes.get('/import-bling', async (request,response)=> {
  return importFromBlingController.handle(request, response)
})


dealRoutes.get('/allOrders', (request,response)=> {
  return listOrdersController.handle(request, response)
})

export { dealRoutes }