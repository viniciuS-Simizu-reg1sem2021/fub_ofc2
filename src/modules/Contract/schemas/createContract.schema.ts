import { Joi } from 'celebrate'

const createContractSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().default(null).optional(),
  // TODO: PEGAR O ID DO EMPLOYER AQUI DE ALGUMA FORMA
})

export default createContractSchema
