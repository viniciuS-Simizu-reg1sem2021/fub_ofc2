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

contractRoutes.get('/:id', contractController.findById);

contractRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateContractSchema }, { abortEarly: false })],
  contractController.update
);

contractRoutes.patch('/apply/:id', contractController.applyToContract);

contractRoutes.patch('/select/:id', contractController.selectEmployee);

contractRoutes.delete('/:id', contractController.softDelete);

export { contractRoutes };
