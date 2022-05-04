import api from '@config/api';
import { app } from '@shared/infra/http/app';

const apiConfig = api();

app.listen(apiConfig.API_PORT || 3000, async () => {
  console.log(`SERVER STARTED ON http://localhost:${apiConfig.API_PORT}`);
});

/** TODO
 *   REFAZER MODELO CONCEITUAL
 *   SE SOBRAR TEMPO:
 *   - INTEGRAR O SERVIÇO DA IBM PARA O UPLOAD DE IMAGENS + O IBM FACADE
 *   - ADICIONAR A ROTA DE DELETE NORMAL
 *   - ADICIONAR UM BOOLEAN PARA GARANTIR QUE O CUPOM ESTÁ DENTRO DA VALIDADE
 *   - FAZER ISSO COM UM CRON PARA CADA DIA FAZER ESSA VERIFICAÇÃO
 **/
