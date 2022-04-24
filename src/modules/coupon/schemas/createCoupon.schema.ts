import { Joi } from 'celebrate';

const createCouponSchema = Joi.object({
  value: Joi.number().required(),
  deadline: Joi.date().required(),
  contract: Joi.object({ id: Joi.number().required() }).required(),
});

export { createCouponSchema };
