import api from '@config/api';
import { app } from '@shared/infra/http/app';

const apiConfig = api();

app.listen(apiConfig.API_PORT, async () => {
  console.log(`SERVER STARTED ON http://localhost:${apiConfig.API_PORT}`);
});

/** TODO
 *   REFAZER MODELO CONCEITUAL
 *   SERVIÇO DE AVALIAÇÃO DE EMPREGADOR E EMPREGADO, ALÉM DE ADICIONAR ISSO NO USER
 *   ADICIONAR SERVIÇOS DE AVALIAÇÃO NO MÓDULO DO (USUARIO | COUPON) E DEPOIS FINALIZAR O CONTRATO
 *   SE SOBRAR TEMPO:
 *   - INTEGRAR O SERVIÇO DA IBM PARA O UPLOAD DE IMAGENS + O IBM FACADE
 *   - ADICIONAR A ROTA DE DELETE NORMAL
 **/
