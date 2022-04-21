import { Joi } from 'celebrate';

const createContractSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().default(null).optional(),
  statusContract: Joi.object({ id: Joi.number().required() }).required(),
});

export { createContractSchema };
