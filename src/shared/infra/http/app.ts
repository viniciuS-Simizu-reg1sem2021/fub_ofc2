import 'reflect-metadata';
import express from 'express';
import { errors } from 'celebrate';
import { createConnection } from '@shared/infra/typeorm';

import '@shared/container';
import api from '@config/api';
import { routes } from './routes';

createConnection()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(`Database error: ${err}`));

const app = express();
const apiConfig = api();

app.use(express.json());

app.use(apiConfig.API_BASE_URL, routes);
app.use(errors());

export { app };
