import { Joi } from 'celebrate';

const updateCouponSchema = Joi.object({
  value: Joi.number().optional(),
  deadline: Joi.date().optional(),
});

export { updateCouponSchema };
