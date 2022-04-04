import { Router } from 'express'
import { celebrate, Segments } from 'celebrate'
import ContractController from '../controllers/ContractController'
import updateContractSchema from '../../../schemas/updateContract.schema'
import createContractSchema from '../../../schemas/createContract.schema'

const contractRouter = Router()
const contractController = new ContractController()

contractRouter.post(
  '',
  [celebrate({ [Segments.BODY]: createContractSchema }, { abortEarly: false })],
  contractController.create
)

contractRouter.get('', contractController.list)

contractRouter.get('/:id', contractController.find)

contractRouter.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateContractSchema }, { abortEarly: false })],
  contractController.update
)

contractRouter.delete('/:id', contractController.delete)

export default contractRouter
