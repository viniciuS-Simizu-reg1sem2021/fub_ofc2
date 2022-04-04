import { Joi } from 'celebrate'

const createContractSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().default(null).optional(),
})

export default createContractSchema
