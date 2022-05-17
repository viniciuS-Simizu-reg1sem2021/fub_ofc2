import api from '@config/api';
import { app } from '@shared/infra/http/app';

const apiConfig = api();

app.listen(apiConfig.API_PORT || 3000, async () => {
  console.log(`SERVER STARTED ON http://localhost:${apiConfig.API_PORT}`);
});
