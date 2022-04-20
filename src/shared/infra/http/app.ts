import 'reflect-metadata';
import express from 'express';
import { errors } from 'celebrate';
import { routes } from './routes';
import { createConnection } from 'typeorm';

import '@shared/container';
import api from '@config/api';

createConnection()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(`Database error: ${err}`));

const app = express();
const apiConfig = api();

app.use(express.json());

app.use(apiConfig.API_BASE_URL, routes);
app.use(errors());

export { app };
