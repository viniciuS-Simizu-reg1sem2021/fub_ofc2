import cors from 'cors';
import 'reflect-metadata';
import express from 'express';
import { errors } from 'celebrate';
import { createConnection } from '@shared/infra/typeorm';

import '@shared/container';
import api from '@config/api';
import { routes } from './routes';
import { appErrors } from '@shared/infra/middlewares/appErrors';

createConnection()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(`Database error: ${err}`));

const app = express();
const apiConfig = api();

app.use(express.json());

app.use(apiConfig.API_BASE_URL, routes);
app.use(errors());
app.use(cors());

app.use(appErrors);

export { app };
