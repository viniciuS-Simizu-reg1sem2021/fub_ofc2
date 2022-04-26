import { Joi } from 'celebrate';

const updateContractSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
});

export { updateContractSchema };
