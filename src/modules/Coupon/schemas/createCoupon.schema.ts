import { Joi } from 'celebrate';

const createCouponSchema = Joi.object({
  value: Joi.number().required(),
  deadline: Joi.date().required(),
});

export { createCouponSchema };
