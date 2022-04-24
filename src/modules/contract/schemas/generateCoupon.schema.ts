import { Joi } from 'celebrate';

const generateCouponSchema = Joi.object({
  value: Joi.number().required(),
  deadline: Joi.date().required(),
});

export { generateCouponSchema };
