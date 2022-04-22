import { Joi } from 'celebrate';

const updateContractSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  isPaid: Joi.boolean().optional(),
  category: Joi.object({ id: Joi.number().required() }).optional(),
});

export { updateContractSchema };
