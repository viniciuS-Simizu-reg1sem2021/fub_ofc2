import { Joi } from 'celebrate';

const updateContractSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  district: Joi.string().optional(),
  city: Joi.string().optional(),
  proposedValue: Joi.number().optional(),
});

export { updateContractSchema };
