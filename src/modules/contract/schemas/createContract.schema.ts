import { Joi } from 'celebrate';

const createContractSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().default(null).optional(),
  district: Joi.string().required(),
  city: Joi.string().required(),
  proposedValue: Joi.number().required(),
  statusContract: Joi.object().default({ id: 1 }),
  interested: Joi.array()
    .items(Joi.object({ id: Joi.number().required() }))
    .default([]),
  generatedCoupon: Joi.boolean().default(false),
});

export { createContractSchema };
