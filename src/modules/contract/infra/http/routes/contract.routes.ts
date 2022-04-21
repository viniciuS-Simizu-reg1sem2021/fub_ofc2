import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';

import { createContractSchema } from '@modules/contract/schemas/createContract.schema';
import { updateContractSchema } from '@modules/contract/schemas/updateContract.schema';
import { ContractController } from '@modules/contract/infra/http/controllers/ContractController';

const contractRoutes = Router();
const contractController = new ContractController();

contractRoutes.post(
  '',
  [celebrate({ [Segments.BODY]: createContractSchema }, { abortEarly: false })],
  contractController.create
);

contractRoutes.get('', contractController.list);

contractRoutes.get('/:id', contractController.find);

contractRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateContractSchema }, { abortEarly: false })],
  contractController.update
);

contractRoutes.delete('/:id', contractController.delete);

export { contractRoutes };
