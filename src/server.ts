import express from 'express';
import {dealRoutes} from './routes/deals.routes'
import './database/connection'
import 'dotenv/config'

const app = express();

app.use('/deals', dealRoutes)

app.listen('3333', () => {
  console.log('server is running!');
});
