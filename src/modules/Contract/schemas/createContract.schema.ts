import { Joi } from 'celebrate'

const createContractSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().default(null).optional(),
  // TODO: REMOVER FUTURAMENTE
  employer: Joi.object({ id: Joi.number().required() }).required(),
  statusContract: Joi.object({ id: Joi.number().required() }).required(),
})

export default createContractSchema
