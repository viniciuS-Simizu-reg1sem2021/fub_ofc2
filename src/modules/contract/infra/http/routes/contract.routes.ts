import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';

import { createContractSchema } from '@modules/contract/schemas/createContract.schema';
import { updateContractSchema } from '@modules/contract/schemas/updateContract.schema';
import { generateCouponSchema } from '@modules/contract/schemas/generateCoupon.schema';
import { ContractController } from '@modules/contract/infra/http/controllers/ContractController';

const contractRoutes = Router();
const contractController = new ContractController();

contractRoutes.post(
  '',
  [celebrate({ [Segments.BODY]: createContractSchema }, { abortEarly: false })],
  contractController.create
);

contractRoutes.post(
  '/:id',
  [celebrate({ [Segments.BODY]: generateCouponSchema }, { abortEarly: false })],
  contractController.generateCoupon
);

contractRoutes.get('', contractController.list);

contractRoutes.get('/title', contractController.findByTitle);

contractRoutes.get('/:id', contractController.findById);

contractRoutes.get('/contact/:id', contractController.retrieveEmployeeInfo);

contractRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateContractSchema }, { abortEarly: false })],
  contractController.update
);

contractRoutes.put(
  '/select/:id/employee/:selectedUserId',
  contractController.selectEmployee
);

contractRoutes.patch('/apply/:id', contractController.applyToContract);

contractRoutes.delete('/:id', contractController.softDelete);

contractRoutes.delete('/unapply/:id', contractController.unapplyToContract);

export { contractRoutes };
