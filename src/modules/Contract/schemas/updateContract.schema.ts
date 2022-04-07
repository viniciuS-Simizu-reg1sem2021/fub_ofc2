import { Joi } from 'celebrate'

const updateContractSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  employee: Joi.object({ id: Joi.number() }).optional(),
})

export default updateContractSchema
