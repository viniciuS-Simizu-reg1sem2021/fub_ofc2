import { Joi } from 'celebrate';

const updateContractSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  statusContract: Joi.object({ id: Joi.number().required() }).optional(),
  employee: Joi.object({ id: Joi.number().required() }).optional(),
  interested: Joi.array()
    .items(Joi.object({ id: Joi.number().required() }))
    .optional(),
  isPaid: Joi.boolean().optional(),
});

export { updateContractSchema };
